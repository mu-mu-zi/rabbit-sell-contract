import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import HeaderNav, { SessionStorageKey } from '../../Components/Heder';
import { Content, AirdropTopBG, AirdropWrap, CardBox, Title, TopContent } from './Index.styled';
import { BottomBG } from '../Home/HomeIndex.styled';
import axios from 'axios';
import Paginate from '../../Components/Paginate';
import Toggle from '../../Components/Toggle/Toggle';
import { useTheme } from 'styled-components';
import Flex from '../../Components/Box/Flex';
import { airdropLine1SvgIcon, airdropLine2SvgIcon, airdropLine3SvgIcon, rewardArrowH5SvgIcon, rewardArrowSvgIcon, rewardSvgIcon } from '../../utils/svgManage';
import rewardAva from '../../assets/img/airdrop/rewardAva.png'
import { IOpenModal, ModalContext } from '../../Components/ModalContext/ModalContext';
import ConfirmModal, { ConfirmModalProps } from '../../Components/Modal/ConfirmModal';
import airdropTopBg from '../../assets/img/airdrop/airdrop_top_bg.png'
import line1 from '../../assets/img/airdrop/line1.png'
import line2 from '../../assets/img/airdrop/line2.png'
import line3 from '../../assets/img/airdrop/line3.png'
import line4 from '../../assets/img/airdrop/line4.png'
import line5 from '../../assets/img/airdrop/line5.png'
import line6 from '../../assets/img/airdrop/line6.png'
import Notice from '../../Components/Notification';
import { IList, IResponseData } from '../../App';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hook/hooks';
import { getQueryParams } from '../../utils/tools';
import { AccountInfo } from '../../store/typs';
import { setAccountInfo, setWalletAddress } from '../../store/app';
import Column from '../../Components/Box/Column';


export enum ModalType {
  Follow = 'Follow',
  Forward = 'Forward',
  Comment = 'Comment',
  Like = 'Like',
  Link = 'Link',
  Email = 'Email',
}

interface ConentList {
  text: string | JSX.Element;
  amount: number;
  title?: string;
  confirmText?: string;
  BtnTextUp?: string;
  BtnTextDown?: string;
  type?: ModalType;
  img: string;
  id: number;
}
// 转发评论文章说是写死
const twitterId = '1731538546283167900'
// 转发推特url
const rePostUrl = 'https://twitter.com/intent/retweet?tweet_id='
export default function AirdropIndex() {
  const theme = useTheme();
  const { openModal, destoryModal } = useContext(ModalContext)
  const [userRewards, setUserRewards] = useState<AccountInfo>()
  const dispatch = useAppDispatch()
  const store = useAppSelector((state) => state.App)

  // 各个弹窗的文字
  const contentList: ConentList[] = [
    {
      text: <Column alignItems={'flex-start'} gap='5px'>
        Link your wallet and X profile
        {/* <Flex fontSize={theme.isH5 ? '10px' : '16px'}>
          {'(More than 3 fans can participate in the task)'}
        </Flex> */}
      </Column>,
      amount: 10000,
      img: line1,
      type: ModalType.Link,
      id: 1,
    },
    {
      text: 'Follow @ Rait_ IO',
      title: 'Follow',
      amount: 20000,
      confirmText: 'Follow Rabbitgames Twitter for the latest updates',
      BtnTextUp: 'Follow Rabbitgames',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Follow,
      img: line2,
      id: 2,
    },
    {
      text: 'Forward this tweet',
      amount: 30000,
      title: 'Forward this tweet',
      confirmText: `Retweet Rabbitgames Twitter to get more rewards`,
      BtnTextUp: 'Forward tweet',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Forward,
      img: line3,
      id: 3,
    },
    {
      text: 'Comment on this tweet',
      amount: 10000,
      title: 'Comment on this tweet',
      confirmText: `How much do you like Rabbitgames to express your love`,
      BtnTextUp: 'Comment on X',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Comment,
      img: line4,
      id: 4,
    },
    {
      text: 'Like this tweet',
      amount: 10000,
      title: 'Like this tweet',
      confirmText: `If you like Rabbitgames, give them your blessings`,
      BtnTextUp: 'Like on X',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Like,
      img: line5,
      id: 5,
    },
    {
      text: 'Leave your email account',
      amount: 20000,
      title: 'Email',
      confirmText: `Leave your email to facilitate Rabbitgames airdrop distribution`,
      BtnTextUp: 'Like on X',
      BtnTextDown: 'Save and claim rewards',
      type: ModalType.Email,
      img: line6,
      id: 6,
    },
  ]
  // 监听退出
  useEffect(() => {
    console.log('1111')
    if (!store.walletAddress) {
      console.log('22222')
      setUserRewards(undefined)
      dispatch(setAccountInfo(undefined))
      localStorage.removeItem('accountInfo')
    }
  }, [store.walletAddress])

  useEffect(() => {
    console.log('aaaa', store.accountInfo)
    if(store.walletAddress) {

      getUserRewards()
    }
    // if (store.accountInfo?.id) {
    //   // 获取用户奖励详情


    // }
  }, [store.walletAddress])

  useEffect(() => {
    const urlParams = window.location.search;
    const keyValuePairs = getQueryParams(urlParams);
    console.log('aaaa', store.accountInfo)
    if (!store.accountInfo?.id && urlParams) {
      // 没有账户信息就去请求
      getAccountInfo(keyValuePairs.code, keyValuePairs.state)
    }
  }, [])

  const getUserRewards = () => {
    axios.get<IResponseData<AccountInfo>>(`/dashboard/api/plg/ido/game/user/${store.walletAddress}`).then((res) => {
      console.log('bbbb', res.data.data)
      setUserRewards(res.data.data)
    }).catch((error: any) => {
      console.log(error)
    })
  }

  // 获取账户信息---是否有账户信息---没有的话获取url上的state和code去请求账户信息
  const getAccountInfo = (code: string, state: string) => {
    axios.post<IResponseData<AccountInfo>>('/dashboard/api/plg/ido/game/callback', {
      address: localStorage.getItem(SessionStorageKey.WalletAuthorized),
      code,
      state
    }).then((res) => {
      if(res.data.code === 0 ) {

        console.log('aaaa', res)
        localStorage.setItem('accountInfo', JSON.stringify(res.data.data))
        dispatch(setAccountInfo(res.data.data))
        // 清空url参数
        window.history.replaceState({}, document.title, window.location.pathname);
      } else {
        localStorage.setItem(SessionStorageKey.WalletAuthorized, '')
        dispatch(setWalletAddress(''))
        // 清空url参数
        window.history.replaceState({}, document.title, window.location.pathname);
        Notice.Error({title: 'address or X account are bound'})
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }
  console.log(window.location)
  // 获取推特登录地址
  const getXaddress = async () => {
    axios.post<IResponseData<string>>('/dashboard/api/plg/ido/game/login', {
      "address": localStorage.getItem(SessionStorageKey.WalletAuthorized),
      "redirectUrl": window.location.href
    }).then((res) => {
      console.log(res)
      if (res.data.data) {
        window.location.href = res.data.data
      }
      return
    }).catch((error: any) => {
      Notice.Error({ title: 'error' })
      console.log(error)
    })
  }

  // 关注
  const FnFollow = (twitterUserId: string | undefined) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/clickFollow`, {
      twitterUserId
    }).then((res) => {
      window.open(store.accountInfo?.following)
    }).catch((error: any) => {
      console.log(error)
    })
  }
  // 关注奖励
  const FnFollowReward = (twitterUserId: string | undefined, id: any) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/following`, {
      twitterUserId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
        destoryModal(id)

      } else {
        Notice.Warning({ title: 'Failed to claim rewards' })
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }

  // 转发
  const FnForward = () => {
    if (store.accountInfo) {
      // window.open(`${rePostUrl + twitterId}`)
      axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/clickForward`, {
        twitterId: twitterId,
        twitterUserId: store.accountInfo?.twitterId
      }).then((res) => {
        window.open(`${rePostUrl + twitterId}`)
      }).catch((error: any) => {
        console.log(error)
      })
    }
  }
  // 转发奖励
  const FnForwardReward = (twitterUserId: string | undefined, id: any) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/share`, {
      twitterUserId,
      text: twitterId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
        destoryModal(id)

      } else {
        Notice.Warning({ title: 'Failed to claim rewards' })
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }
  // 评论
  const FnComment = (twitterUserId: string | undefined) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/clickComment`, {
      twitterId: twitterId,
      twitterUserId
    }).then((res) => {
      window.open((store.accountInfo?.replyUrl + twitterId) || '')
    }).catch((error: any) => {
      console.log(error)
    })
  }
  // 评论奖励
  const FnCommentReward = (twitterUserId: string | undefined, id: any) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/comment`, {
      twitterUserId,
      twitterId: twitterId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
        destoryModal(id)

      } else {
        Notice.Warning({ title: 'Failed to claim rewards' })
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }

  // 点赞
  const FnLike = () => {
    if (store.accountInfo) {
      // window.open(`${rePostUrl + twitterId}`)
      axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/clickLike`, {
        twitterId: twitterId,
        twitterUserId: store.accountInfo?.twitterId
      }).then((res) => {
        window.open(`https://twitter.com/intent/like?tweet_id=${twitterId}`)
      }).catch((error: any) => {
        console.log(error)
      })
    }
  }
  // 点赞奖励
  const FnLikeReward = (twitterUserId: string | undefined, id: any) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/like`, {
      twitterUserId,
      twitterId: twitterId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
        destoryModal(id)

      } else {
        Notice.Warning({ title: 'Failed to claim rewards' })
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }
  // 设置邮箱
  const setEmail = (email: string | undefined, id: any) => {
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/email`, {
      email,
      twitterId: store.accountInfo?.twitterId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
        destoryModal(id)

      } else {
        Notice.Warning({ title: 'Failed to claim rewards' })
      }
    }).catch((error: any) => {
      console.log(error)
    })
  }

  // 登录奖励
  const FnLinkReward = (twitterUserId: string | undefined) => {
    if(!store.accountInfo?.id) {
      return
    }
    axios.post<IResponseData<boolean>>(`/dashboard/api/plg/ido/game/loginReward `, {
      twitterUserId
    }).then((res) => {
      if (res.data.code === 0) {
        Notice.Success({ title: 'Received successfully' })
        getUserRewards()
      } else {
        Notice.Warning({ title: 'Not enough followers' })
      }

    }).catch((error: any) => {
      console.log(error)
      Notice.Success({ title: error.message || 'error' })
    })
  }

  const click = async (item: ConentList) => {

    if (!localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
      Notice.Warning({ title: 'Please connect the wallet first' })
      return;
    }
    if (!store.accountInfo?.id) {
      await getXaddress()
    }
    if (item.type === ModalType.Link) {
      // 判断是否超过5个粉丝 再领取奖励
      if (userRewards && !userRewards.tasks?.some(data => data.taskId === 1))
        FnLinkReward(store.accountInfo?.twitterId)
      return;
    };
    if (store.accountInfo?.id) {
      const id = openModal<ConfirmModalProps>(ConfirmModal, {
        title: item.title || '',
        confirmText: item.confirmText || '',
        BtnTextUp: item.BtnTextUp || '',
        BtnTextDown: item.BtnTextDown || '',
        type: item.type,
        onFnUp: () => {
          if (item.type === ModalType.Follow) {
            FnFollow(store.accountInfo?.twitterId)
          }
          if (item.type === ModalType.Forward) {
            FnForward()
          }
          if (item.type === ModalType.Comment) {
            FnComment(store.accountInfo?.twitterId)
          }
          if (item.type === ModalType.Like) {
            FnLike()
          }
          console.log('22321')
        },
        onFnDown: (e) => {
          if (item.type === ModalType.Follow) {
            FnFollowReward(store.accountInfo?.twitterId, id)
          }
          if (item.type === ModalType.Forward) {
            FnForwardReward(store.accountInfo?.twitterId, id)
          }
          if (item.type === ModalType.Comment) {
            FnCommentReward(store.accountInfo?.twitterId, id)
          }
          if (item.type === ModalType.Like) {
            FnLikeReward(store.accountInfo?.twitterId, id)
          }
          if (item.type === ModalType.Email) {
            setEmail(e, id)
          }

          destoryModal(id)
        }
      })
    }
  }

  return (
    <AirdropWrap>
      <HeaderNav />
      <AirdropTopBG>
        <TopContent>
          <div className='airRabbitBg'>
            <img src={airdropTopBg} alt='' />
          </div>
          <div className='leftDesc'>
            <Title><span>Receive free</span> airdrop rewards</Title>
            <Toggle vIf={theme.isH5}>
              <div className='line_chart'>
                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine1SvgIcon || '' }} /></div>
                  <div>1. Complete the task</div>
                </div>

                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine2SvgIcon || '' }} /></div>
                  <div>2. Earn points</div>
                </div>

                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine3SvgIcon || '' }} /></div>
                  <div>3. Claim airdrop</div>
                </div>
              </div>
              <div className='line_chart'>
                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine1SvgIcon || '' }} /></div>
                  <div>1. Complete the task</div>
                </div>
                <div className='dashedLine'></div>
                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine2SvgIcon || '' }} /></div>
                  <div>2. Earn points</div>
                </div>
                <div className='dashedLine'></div>
                <div className='flex_row'>
                  <div className='circle'><span dangerouslySetInnerHTML={{ __html: airdropLine3SvgIcon || '' }} /></div>
                  <div>3. Claim airdrop</div>
                </div>
              </div>


            </Toggle>
          </div>
          <div className="rightBox">
            <div className="title">My points</div>
            <div className="description">Claim airdrop rewards on December 16th</div>
            <div className="rewardAmount">{userRewards?.amount || '--'}</div>
            {/* <div className="button">Receive</div> */}
          </div>
        </TopContent>
      </AirdropTopBG>

      <Content>
        {
          contentList.map((item) => {
            return <CardBox
              onClick={() => {
                if (userRewards?.tasks?.some(data => data.taskId === item.id)) return
                click(item)
              }}
              className={userRewards?.tasks?.some(data => data.taskId === item.id) ? 'disabled' : ''}
            >
              <div className='left'>
                <div className='imgBox'>
                  <img src={item.img} alt='' />
                </div>
                <div className='textGroup'>
                  <div className="title">
                    {item.text}
                  </div>
                  <div className='takeAmount'>
                    <span dangerouslySetInnerHTML={{ __html: rewardSvgIcon || '' }} />
                    <span>{(item.amount).toLocaleString('en-US')}</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <span dangerouslySetInnerHTML={{ __html: rewardArrowSvgIcon || '' }} />
              </div>
            </CardBox>
          })
        }
      </Content>
      <Toggle vIf={!theme.isH5}>
        <BottomBG />
      </Toggle>
      <Footer />
    </AirdropWrap>
  )
}
