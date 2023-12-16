
import {useEffect, useMemo, useState} from "react";
import {usePluginModel} from "./usePluginModel";
import useConnect from "./useConnect";
import { awaitWrap, getInput, minAllowance } from "../utils/tools";
import { useAppSelector } from "./hooks";
import Notice from "../Components/Notification";

type IApproveParams = {
    tokenAddress: string
    spenderAddress: string
}
export default function useApprove(props: IApproveParams) {
    const {tokenAddress, spenderAddress} = props;
    const currentHooks = useConnect()
    const store = useAppSelector((state) => state.App)
    const {project, needApprove, approve, checkHashStatus} = usePluginModel();
    const [approveStatus, setApproveStatus] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    // const state = useEffectState({
    //     approveStatus: true,
    //     loading: false
    // });
    
    // useEffect(() => {
    //     setApproveStatus(true)
    //     console.log('aaaaaaaaaaaaaaaaaaa111111',store.walletAddress)
    //     console.log('aaaaaaaaaaaaaaaaaaa111111',project)
    //     console.log('aaaaaaaaaaaaaaaaaaa111111',store.walletAddress)
    //     if (project && store.walletAddress && store.network === 'Ethereum') {
    //         checkApproveStatus();
    //     }
    // }, [project, store.walletAddress, tokenAddress, spenderAddress]);

    async function checkApproveStatus(needAmount?: number | string) {
        console.log('111111111111111111111', needAmount)
        if (store.walletAddress && tokenAddress) {
            const a = {
                token: tokenAddress,
                owner: store.walletAddress,
                spender: spenderAddress
            };
            setLoading(true)
            const result = await needApprove(a, getInput(needAmount || minAllowance, 0));
            console.log(result, 'aaaaaaaaaaaaaaaaaaa')
            setApproveStatus(result)
            setLoading(false)
            return result
        }
    }

    async function approveToken() {
        console.log('?????????', store.walletAddress)
        const a = {
            token: tokenAddress,
            owner: store.walletAddress,
            spender: spenderAddress
        };
        setLoading(true)
        const [transInfo, error] = await awaitWrap(approve(a));
        if (error) {
            Notice.Error({title: JSON.parse(JSON.stringify(error)).error
                || JSON.parse(JSON.stringify(error)).message
                || 'error'
            })
            // showError(error);
            
        } else {
            await checkHashStatus(transInfo);
            setApproveStatus(true)
        }
        setLoading(false)
    }

    return {approveStatus, loading, approveToken, checkApproveStatus};
}
