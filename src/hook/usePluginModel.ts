import { useStore } from "react-redux";
import Web3 from "web3";
import { BigNumber, ethers, utils } from "ethers";
import { useEffect, useMemo } from "react";
import { Decimal } from "decimal.js";
import abi from "../abi/abi.json"
import { MaxApproveBalance, getInput, minAllowance } from "../utils/tools";
import Notice from "../Components/Notification";

export interface ISignatrua {
    origin: string
    signatrue: string
}
type IApprove = {
    token: string,
    owner: string,
    spender: string
}

type IBuy = {
    amount: string,
    quantity: number,
    tokenId: number,
    deadline: number,
    salt: number,
    v: number,
    r: string,
    s: string,
}

interface ITrans {
    blockHash: any
    blockNumber: any
    chainId: number
    confirmations: number
    creates: any
    data: string
    from: string
    gasLimit: any
    gasPrice: any
    hash: string
    nonce: number
    status: number,
    type: string,
    symbol: string
}


export function usePluginModel() {
    const provider = (window as any).ethereum;
    // const Provider = useMemo(() => {
    //     // @ts-ignore
    //     return storeData.wallet_info?window[storeData.wallet_info.plugin]:undefined;
    // }, [storeData.wallet_info]);
    const Provider: any = useMemo(() => {
        return provider ? provider : undefined;
    }, [provider]);

    function getProvider() {
        return ethers.getDefaultProvider(abi.node);
    }

    function getWallet() {
        if (!Provider) {
            return;
        }
        return new ethers.providers.Web3Provider(Provider).getSigner();
    }

    function NewReadContract(address: string, abi: any[]) {
        return new ethers.Contract(address, abi, getProvider());
    }

    function NewWriteContract<T = any>(address: string, abi: any[]): T {
        return new ethers.Contract(address, abi, getWallet()) as any;
    }

    async function signMsg(signObj: any, walletAddress: string): Promise<ISignatrua> {
        const originData = typeof signObj === "string" ? signObj : JSON.stringify(signObj);
        /*const signature = await getWallet().signMessage(originData);
        return {origin: originData, signatrue: signature}*/

        return signString(originData, walletAddress);
    }

    async function signString(str: string, address: string): Promise<ISignatrua> {
        if (!Provider) {
            return Promise.reject();
        }
        let web3Provider = new Web3(Provider);

        return new Promise((resolve, reject) => {
            web3Provider.eth.personal.sign(str, address, "", (err: any, res: any) => {
                if (!err) {
                    resolve({ origin: str, signatrue: res });
                } else {
                    if (err.code === -32602) {
                        // PubSub.publish(wallet_logout);

                    }
                    reject(err);
                }
            })
        });
    }

    function needApprove(params: IApprove, amount: BigNumber): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            let contract = NewReadContract(params.token, abi.contracts.RAIT.abi);

            let [allowance] = await Promise.all([
                contract.allowance(params.owner, params.spender),
            ]);
            console.log('1111111111allowance', allowance, allowance.toString())
            console.log('1111111111amount', amount, amount.toString())
            if (BigNumber.from(amount).lt(allowance)) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }

    function approve(params: IApprove): Promise<ITrans> {
        return new Promise(async (resolve, reject) => {
            let contract = NewWriteContract(params.token, abi.contracts.RAIT.abi);
            console.log('1111111111111111', MaxApproveBalance)
            contract.approve(params.spender, MaxApproveBalance).then((res: ITrans) => {
                resolve(res)
            }).catch((error: any) => {
                Notice.Error({title: 
                    JSON.parse(JSON.stringify(error)).reason 
                    || JSON.parse(JSON.stringify(error)).message
                    || 'error'
                })
                reject(error);
            });
        });
    }

    async function getEndTime(): Promise<number> {
        let contract = NewReadContract(abi.contracts.blindBox.address, abi.contracts.blindBox.abi);

        let time = await contract.startSelling()
        
        return time;
    }

    function checkHashStatus(tranInfo: ITrans) {

        function checkStatus(currentHash: string, callback: Function) {
            if (!Provider) {
                return;
            }
            let instance = new ethers.providers.Web3Provider(Provider);
            //const instance = new web3(chainNode);
            //instance.eth.getTransactionReceipt(currentHash).then((res) => {
            instance.getTransactionReceipt(currentHash).then((res: any) => {
                if (res && res.status) {
                    // PubSub.publish("reload.balance");
                    callback(true);
                } else if (res) {
                    callback(false);
                } else {
                    setTimeout(() => {
                        checkStatus(currentHash, callback);
                    }, 3 * 1000);
                }
            })
        }

        return new Promise((resolve, reject) => {
            checkStatus(tranInfo.hash, (res: boolean) => {
                res ? resolve(true) : reject()
            })
        });
    }

    async function getTokenBalance(account: string, address: string): Promise<number> {
        let contract = NewReadContract(address, abi.contracts.RAIT.abi);

        let [balance, decimals] = await Promise.all([
            contract.balanceOf(account),
            contract.decimals(),
        ]);
        return Decimal.div(balance.toString(), Math.pow(10, decimals)).toNumber();
    }

    // 查询所有的nft tokenId
    async function getTokensOfOwner(account: string): Promise<number> {
        let contract = NewReadContract(abi.contracts.rabbitNFT.address, abi.contracts.rabbitNFT.abi);

        let balance = await contract.tokensOfOwner(account)
        console.log(balance)
        const maxTokenId = balance && balance?.reduce((max: BigNumber, current: BigNumber) => {
            console.log(max)
            console.log(current)
            return Math.max(Number(max.toString()), Number(current?.toString()))
        }, balance[0]);
        console.log(maxTokenId)
        return maxTokenId;
    }
    // 
    async function getTokenIdRecords(account: string) {
        let contract = NewReadContract(abi.contracts.rabbitNFT.address, abi.contracts.rabbitNFT.abi);

        let tokenIds = await contract.tokensOfOwner(account)
        console.log(tokenIds)
        
        const arr = await Promise.all(tokenIds.map(async (item: BigNumber) => {
            let nftType: BigNumber = await contract.nftTypes(item)
            console.log(item)
            console.log(nftType)
            return {
                tokenId: item.toNumber(),
                nftType: nftType.toNumber()
            }
        }))
        console.log(arr)
        return arr;
    }
    // ethPrice
    // tokenPrice
    async function getPrice(): Promise<{ ethPrice: string, tokenPrice: string }> {
        let contract = NewReadContract(abi.contracts.blindBox.address, abi.contracts.blindBox.abi);

        let [ethPrice, tokenPrice] = await Promise.all<BigNumber>([
            contract.ethPrice(),
            contract.tokenPrice(),
        ]);
        console.log(ethPrice.toString(), tokenPrice.toString())
        // const price = {
        //     ethPrice: Decimal.div( tokenPrice.toString(), Math.pow(10, 18)).toNumber(),
        //     tokenPrice: Decimal.div( ethPrice.toString(), Math.pow(10, 18)).toNumber()
        // }
        return { ethPrice: ethPrice.toString(), tokenPrice: tokenPrice.toString() }
    }
    // async function getTokenPrice(): Promise<number> {
    //     let contract = NewReadContract(abi.contracts.blindBox.address, abi.contracts.blindBox.abi);

    //     let [balance, decimals] = await Promise.all([
    //         contract.tokenPrice(),

    //     ]);
    //     return Decimal.div( balance.toString(), Math.pow(10, decimals)).toNumber();
    // }
    async function buyNft(params: IBuy, ethVal: string): Promise<any> {
        console.log( ethVal , params, 'bba')
        console.log( 'eth',getInput(ethVal, 0).toString())
        console.log( 'amount',getInput(params.amount, 0).toString())
        return new Promise(async (resolve, reject) => {
            let contract = NewWriteContract(abi.contracts.blindBox.address, abi.contracts.blindBox.abi);
            contract.buy(
                getInput(params.amount, 0),
                params.quantity,
                params.tokenId,
                params.deadline,
                params.salt,
                params.v,
                params.r,
                params.s,
                // 不支付主币
                // { value: getInput(ethVal, 0) }
                )
                .then((res: boolean) => {
                    console.log(res)
                    resolve(res)
                }).catch((error: any) => {
                    console.log(error)
                    console.log(JSON.parse(JSON.stringify(error)))
                    Notice.Error({title: 
                        JSON.parse(JSON.stringify(error)).reason 
                        || JSON.parse(JSON.stringify(error)).message
                        || 'error'
                    })
                    // reject(error);
                });
        });
    }

    // 我的收益
    async function getMyReward(address: string): Promise<BigNumber[]> {
        let contract = NewReadContract(abi.contracts.rabbitNFT.address, abi.contracts.rabbitNFT.abi);

        let balance = await contract.userAmount(address)
        console.log(balance)
        // 1:总领  2：可领 3：待释放
        return balance;
    }


    // 领取收益
    async function getReward(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let contract = NewWriteContract(abi.contracts.blindBox.address, abi.contracts.blindBox.abi);
            contract.claim()
                .then((res: boolean) => {
                    console.log(res)
                    resolve(res)
                }).catch((error: any) => {
                    Notice.Error({title: 
                        JSON.parse(JSON.stringify(error)).reason 
                        || JSON.parse(JSON.stringify(error)).message
                        || 'error'
                    })
                    reject(error)
                });
        });
    }
    // 获取当前购买 tokenId
    async function getCurrTokenId(): Promise<number> {
        let contract = NewReadContract(abi.contracts.rabbitNFT.address, abi.contracts.rabbitNFT.abi);

        let balance: BigNumber = await contract.currTokenId()
        const num = 1000 - balance.toNumber() + 1
        console.log(balance)
        
        return num;
    }

    return {
        signMsg,
        signString,
        Provider,
        NewReadContract,
        NewWriteContract,
        getProvider,
        checkHashStatus,
        needApprove,
        approve,
        project: provider,
        USDT_decimal: 6,
        getTokenBalance,
        getPrice,
        getTokensOfOwner,
        buyNft,
        getTokenIdRecords,
        getEndTime,
        getReward,
        getMyReward,
        getCurrTokenId
    };
}
