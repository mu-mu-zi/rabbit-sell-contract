import React, { useContext, useEffect, useState } from 'react';
import Box, { Typography } from '../../Components/Box';
import Toggle from '../../Components/Toggle/Toggle';
import { BottomBG } from '../Home/HomeIndex.styled';
import { useTheme } from 'styled-components';
import Footer from '../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Wrap, Title, RewardText, BuyNftButton, RewardTitle, BoxWrap, MyReward, DashedLine, GetReward, RightTitle, RightDescribe, RightBanner, RightButton, InputWrap, NumberBtn, Banner, RightWrap } from './index.styled';
import blindBox from '../../assets/img/nft/blindBox.png'
import addBtn from '../../assets/img/nft/addBtn.png'
import subBtn from '../../assets/img/nft/subBtn.png'
import rightBg from '../../assets/img/nft/right_bg.png'
import fangkuai from '../../assets/img/nft/fangkuai.png'
import { Decimal } from "decimal.js";
import Flex from '../../Components/Box/Flex';
import { Timer, countDown } from '../../utils/tools';
import rabbit from '../../assets/img/nft/rabbit.png'
import Column from '../../Components/Box/Column';
import rabbit1 from '../../assets/img/nft/rabbit1.png'
import rabbit2 from '../../assets/img/nft/rabbit2.png'
import rabbit3 from '../../assets/img/nft/rabbit3.png'
import Notice from '../../Components/Notification';
import { ModalContext } from '../../Components/ModalContext/ModalContext';
import NftModal, { NftModalProps } from './Modal/NftModal';
import useConnect from '../../hook/useConnect';
import { usePluginModel } from '../../hook/usePluginModel';
import useApprove from '../../hook/useApprove';
import { IResponseData } from '../../App';
import axios from 'axios';
import { useAppSelector } from '../../hook/hooks';
import { BigNumber } from 'ethers';
import abi from '../../abi/abi.json'
import NftRecordModa from '../../Components/Modal/NftRecordModa';

export interface IBuyType {
  fundraisingNo: string;
  decimals: number;
  r: string;
  s: string;
  v: number;
  deadline: number;
  salt: number;
  randNum: number;
}


let timer: any = null
let timer2: any = null // 查询剩余数量
export default function NFTBox() {
  const theme = useTheme();
  const [time, setTime] = useState<Timer>();
  const [endTime, setEndTime] = useState<number>(0);
  const [isOverTime, setIsOverTime] = useState<boolean>(true);
  const [iptVal, setIptVal] = useState<number>(1)
  const [tokenId, setTokenId] = useState<number>(0)
  const [remainNum, setRemainNum] = useState<number>() // 盲盒剩余数量
  const [myReward, setMyReward] = useState<BigNumber[]>([])
  const [priceObj, setPriceObj] = useState<{ ethPrice: string, tokenPrice: string }>()
  const { buyNft, getPrice, checkHashStatus, getEndTime, getMyReward, getReward, getCurrTokenId } = usePluginModel()
  const [isOpenAir, setIsOpenAir] = useState<boolean>(false);
  // 提取中
  const [isGetingRewrad, setIsGetingRewrad] = useState<boolean>(false)
  // 是否授权过
  const [isAppro, setIsAppro] = useState<boolean>(true)
  const store = useAppSelector((state) => state.App)
  const { checkApproveStatus, approveToken } = useApprove({
    tokenAddress: abi.contracts.RAIT.address,
    spenderAddress: abi.contracts.blindBox.address,
  })
  async function getPriceFn() {
    const price = await getPrice()
    setPriceObj(price)
  }
  async function getRemainingFn() {
    const rNum = await getCurrTokenId()
    setRemainNum(rNum)
  }

  useEffect(() => {
    timer2 = setInterval(() => {
      getRemainingFn()
    }, 1000 * 15)
    return () => {
      clearInterval(timer2)
    }
  }, [])

  useEffect(() => {
    getPriceFn()
    getRemainingFn()
    if(store.walletAddress && store.network === 'Ethereum') {
      getEndTimeFn()
      getMyRewardFn()
    } else {
      setMyReward([])
    }
  }, [store.walletAddress])



  async function getMyRewardFn() {
    const reward = await getMyReward(store.walletAddress)
    setMyReward(reward)
  }
  async function getEndTimeFn() {
    const time = await getEndTime()
    console.log(time)
    console.log(time.toString())
    // const testTime = new Date().getTime() + 1000 * 10
    setEndTime(new Decimal(time.toString()).times(1000).toNumber())
  }

  useEffect(() => {
    timer = setInterval(() => {
      if (endTime < (new Date().getTime())) {
        clearInterval(timer)
        setIsOverTime(true)
        return;
      }
      let result = countDown(endTime)
      setIsOverTime(false)
      // console.log(result)
      setTime(result)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [endTime, time])

  // banner輪播的配置
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const { openModal, destoryModal } = useContext(ModalContext)

  // 是否需要授权
  const needAppro = async (val: any) => {
    console.log('1111111111111',val)
    const approveStatus = await checkApproveStatus(val)

    setIsAppro(approveStatus || false)
    return approveStatus;
  }

  useEffect(() => {
    if(priceObj?.tokenPrice && store.walletAddress && store.network === 'Ethereum') {
      needAppro(priceObj?.tokenPrice)
    }
  }, [priceObj?.tokenPrice, store.walletAddress])

  // 获取是否开启空投
  const getIsOpenAir = async () => {
    try {
      const result = await axios.get<IResponseData<boolean>>('/dashboard/api/plg/ido/game/isopen')
      setIsOpenAir(result?.data?.data || false)
    }  catch (e: any) {
      Notice.Error({
        title: e.message || 'error'
      })
    }
    
  }
  useEffect(() => {
    getIsOpenAir()
  }, [])

  // 购买信息
  const getBuyInfo = (address: string, quantity: number) => {
    return new Promise(async (resolve, reject) => {
      axios.post<IResponseData<IBuyType>>(`/dashboard/api/plg/ido/game/buy`, {
        address,
        quantity,
      }).then((res) => {
        console.log('bbbb', res)
        resolve(res.data.data)
        // setUserRewards(res.data.data)
      }).catch((error: any) => {
        console.log(error)
      })
    });
  }

  // 抢购NFT
  const onBuyNft = async () => {
    console.log(isOverTime)
    if(!isOverTime) {
      Notice.Warning({ title: 'rush buying hasn’t started yet' })
      return
    }
    if (!priceObj) {
      getPriceFn()
      Notice.Warning({ title: 'Please try again' })
      return
    }
    // 判断网络
    if(store.network !== 'Ethereum') {
      Notice.Warning({ title: 'Please switch to the correct network' })
      return
    }
    // 判断是否连接钱包
    if(!store.walletAddress) {
      Notice.Warning({ title: 'Please connect the wallet first' })
      return
    }


    if (!iptVal) {
      Notice.Warning({ title: 'Please enter the purchase quantity' })
      return
    }
    const result: any = await getBuyInfo(store.walletAddress, iptVal)
    console.log(result)

    // 判断钱包 授权 支付  成功后弹出nft
    // approve({
    //   token: raitAddress,
    //   owner: currentHooks.address,
    //   spender: spender
    // })
    // const approveStatus = await checkApproveStatus(priceObj.tokenPrice)
    const isApprove = await needAppro(priceObj?.tokenPrice)
    if (!isApprove) {
      await approveToken();
      needAppro(priceObj?.tokenPrice)
      return;
    }

    const amount = new Decimal(iptVal).times(priceObj.tokenPrice).toString()
    const ethAmount = new Decimal(iptVal).times(priceObj.ethPrice).toString()
    const tokenId = (result.randNum - result.deadline) - 1000

    setTokenId(tokenId)
    const buyResult = await buyNft({
      amount: amount,
      quantity: iptVal,
      tokenId: tokenId,
      deadline: result.deadline,
      salt: result.salt,
      v: result.v,
      r: result.r,
      s: result.s
    }, ethAmount)

    Notice.Success({ title: 'The transaction has been submitted to the chain, please wait.' })


    const bool = await checkHashStatus(buyResult)


    if (bool) {
      openModal<NftModalProps>(NftModal, {
        tokenId
      })
      getMyRewardFn()
      getRemainingFn()
      console.log('111222')
    }

    console.log(buyResult)

  }
  // 我的nft 
  const openMyNft = () => {
    openModal(NftRecordModa)
  }
  // 提取收益
  const getRewardFn = async () => {
    // 
    if(myReward && new Decimal(myReward[1]?.toString() || '0').isZero()) {
      Notice.Info({ title: 'nothing to receive' })
      return
    }
    try {
      console.log('111231231')
      setIsGetingRewrad(true)
      const result = await getReward()
      Notice.Success({ title: 'Please wait' })
      const bool = await checkHashStatus(result)
      if(bool) {
        Notice.Success({ title: 'Extraction successful' })
        getMyRewardFn()
        setIsGetingRewrad(false)
      }
    } catch(e:any) {
      console.log(e)
    } finally {
      console.log('111231231')
      setIsGetingRewrad(false)
    }

  }
  
  return (
    <Wrap>
      <Banner />
      <Container>
        <Title><span>Unbox</span> the mystery box</Title>
        <RewardText>Limited edition mystery boxes available, offering the chance to obtain high-quality NFTs or rare NFT rewards</RewardText>
        <Box width={theme.isH5 ? "120px" : "240px"} height={theme.isH5 ? "150.5px" : "301px"}>
          <img width={theme.isH5 ? "120px" : "240px"} height={theme.isH5 ? "150.5px" : "301px"} src={blindBox} alt='' />
        </Box>
        <Box mt={theme.isH5 ? "25px" : "41px"}>
          <Column gap='20px' justifyContent={'center'} fontSize={theme.isH5 ? "11px" : "16px"}>
            <Flex gap='31px'>
              <Typography minWidth={theme.isH5 ? '110px' : '160px'}>Remaining Amount</Typography>
              <Typography textAlign={'left'} fontWeight={700} color='#D87319'>{remainNum || '-'}</Typography>
            </Flex>
            <Flex gap='31px'>
              <Typography minWidth={theme.isH5 ? '110px' : '160px'}>Purchase Price</Typography>
              <Typography textAlign={'left'} fontWeight={700} color='#D87319'>
                {/* {new Decimal(priceObj?.ethPrice || '0').div(Math.pow(10, 18)).toString()}个ETH+{new Decimal(priceObj?.tokenPrice || '0').div(Math.pow(10, 18)).toString()}RAIT */}
                {priceObj?.tokenPrice ? new Decimal(priceObj?.tokenPrice).div(Math.pow(10, 18)).toString() : '--'}RAIT
              </Typography>
            </Flex>
          </Column>
          {/* <Flex mt='18px' gap='11px'>
            <NumberBtn onClick={() => {setIptVal(prevVal => prevVal - 1)}}>
              <img src={subBtn} alt='' />
            </NumberBtn>
            <InputWrap >
              <input 
                value={iptVal}
                onChange={(e) => {
                  const val = e.target.value
                  setIptVal(Number(val))
                }}
              />
            </InputWrap>
            <NumberBtn onClick={() => {setIptVal(prevVal => prevVal + 1)}}>
              <img src={addBtn} alt='' />
            </NumberBtn>
          </Flex> */}
        </Box>
        <BuyNftButton onClick={onBuyNft}>
          {isAppro ? 'Buy NFT' : 'Approve'}
        </BuyNftButton>
        <Toggle vIf={!isOverTime}>

          <Flex fontSize={theme.isH5 ? '13px' : '20px'} mt={theme.isH5 ? '14px' : '44px'}>
            Countdown To Buying:
            {
              time && Object.values(time).map((item, index) => {
                return <Flex key={index}>
                  <Typography color={'#FF9231'}>{item.count}</Typography>
                  <Typography color={'#ffffff'}>{item.unit}</Typography>
                </Flex>
              })
            }

          </Flex>
        </Toggle>
        <Toggle vIf={isOpenAir}>
          <Box>
            <RewardTitle>Earn Income From Equity NFT Cards</RewardTitle>

            <BoxWrap>

              <Box
                position={'absolute'}
                bottom='0px'
                right={'-15px'}
              >
                <img style={{ width: theme.isH5 ? '85px' : 'initial', height: theme.isH5 ? '150px' : 'initial' }} src={rabbit} alt='' />
              </Box>

              <MyReward>My Earnings</MyReward>

              <Flex ml={theme.isH5 ? '50px' : '83px'} justifyContent={'space-between'} mt={theme.isH5 ? '13px' :'34px'} width={theme.isH5 ? '236px' :'500px'}>
                <Column gap='7px'>
                  <Typography fontSize={theme.isH5 ? '18px' : '35px'} fontWeight={700}>
                    {new Decimal(myReward[0]?.toString() || '0').div(Math.pow(10, 18)).toString()}
                  
                  </Typography>
                  <Typography fontSize={theme.isH5 ? '11px' : '16px'}>Total Reward RAIT</Typography>
                </Column>
                <Column gap='7px'>
                  <Typography fontSize={theme.isH5 ? '18px' : '35px'} fontWeight={700}>
                  {new Decimal(myReward[2]?.toString() || '0').div(Math.pow(10, 18)).toString()}
                  </Typography>
                  <Typography fontSize={theme.isH5 ? '11px' : '16px'}>RAIT To Be Released</Typography>
                </Column>
              </Flex>

              <DashedLine />

              <Flex ml={theme.isH5 ? '50px' : '83px'} alignItems={'center'} justifyContent={'space-between'} mt={theme.isH5 ? '18px' :'66px'} width={theme.isH5 ? '150px' :'500px'}>
                <Typography fontSize={theme.isH5 ? '11px' : '16px'}>Extractable RAIT</Typography>
                <Typography fontSize={theme.isH5 ? '18px' : '35px'} fontWeight={700}>
                {new Decimal(myReward[1]?.toString() || '0').div(Math.pow(10, 18)).toString()}
                </Typography>
              </Flex>

              <GetReward disabled={isGetingRewrad} isGetingRewrad={isGetingRewrad} onClick={getRewardFn}>

                {
                  isGetingRewrad
                  ? 'Extracting...'
                  : 'Withdraw Earnings'
                }
              </GetReward>
              <Flex cursor={'pointer'} color='#FF9231' onClick={openMyNft} mt={theme.isH5 ? '0' : '24px'} fontSize={ theme.isH5 ? '11px' :'20px'} alignSelf={'center'}>
                My NFT
              </Flex>
            </BoxWrap>
          </Box>
        </Toggle>
        <RightTitle>NFT Rights</RightTitle>
        {/* <RightDescribe>Holding NFT Will Get<span> RAIT Airdrop</span></RightDescribe> */}
        <Box  width={theme.isH5 ? "279px" : "558px"} height={theme.isH5 ? "102px" : "205px"}>
          <img  width={theme.isH5 ? "279px" : "558px"} height={theme.isH5 ? "102px" : "205px"} src={rightBg} alt='' />
        </Box>

        <RightWrap>
          <RightBanner>
            <Slider {...bannerSettings}>
              <div>
                <img src={rabbit1} alt='' />
              </div>
              <div>
                <img src={rabbit2} alt='' />
              </div>
              <div>

                <img src={rabbit3} alt='' />
              </div>
            </Slider>
          </RightBanner>

          <Column alignItems={theme.isH5 ? 'center' : 'flex-start'}>
            <RightButton>Rights</RightButton>
            <Column mt={theme.isH5 ? '25px' : '0'} width={theme.isH5 ? '319px' : '450px'} gap={theme.isH5 ? '15px' :'30px'}>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Flex>

                  <img src={fangkuai} alt='' />
                </Flex>
                <Typography>1. Hold NFT airdrop RAIT tokens</Typography>
              </Flex>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Flex>

                  <img src={fangkuai} alt='' />
                </Flex>
                <Typography> 2. Users who hold NFT enjoy voting rights in rabbitgame platform decisions, new feature additions, game entry, etc.</Typography>
              </Flex>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Flex>

                  <img src={fangkuai} alt='' />
                </Flex>
                <Typography> 3. Hold NFT and enjoy the right to receive dividends from the first block game</Typography>
              </Flex>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Flex>

                  <img src={fangkuai} alt='' />
                </Flex>
                <Typography> 4. Hold NFT and enjoy tokens and NFT airdrops for new games on the Rabbitgame platform</Typography>
              </Flex>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Flex>

                  <img src={fangkuai} alt='' />
                </Flex>
                <Typography> 5. Hold NFT and enjoy the airdrop of game token RAITS</Typography>
              </Flex>
              <Flex alignItems={'baseline'} gap={theme.isH5 ? "12px" : '14px'} fontSize={theme.isH5 ? "14px" : '20px'}>
                <Box width='32px' />

                  {/* <img src={fangkuai} alt='' /> */}
                
                {/* <Typography> 4. Hold NFT and enjoy tokens and NFT airdrops for new games on the Rabbitgame platform</Typography> */}
              <Typography fontSize={theme.isH5 ? "14px" : '20px'} color='#FF9231'>PS: NFT is transferred, and the airdrop and other rights enjoyed will be transferred with it.</Typography>
              </Flex>


            </Column>
          </Column>
        </RightWrap>
      </Container>
      <Toggle vIf={!theme.isH5}>
        <BottomBG />
      </Toggle>
      <Footer />
    </Wrap>
  )
}