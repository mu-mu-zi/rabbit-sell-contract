import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import HeaderNav from '../../Components/Heder';
import { Content, AirdropTopBG, AirdropWrap, CardBox, Title, TopContent} from './Index.styled';
import { BottomBG } from '../Home/HomeIndex.styled';
import axios from 'axios';
import Paginate from '../../Components/Paginate';
import Toggle from '../../Components/Toggle/Toggle';
import { useTheme } from 'styled-components';
import Flex from '../../Components/Box/Flex';
import { airdropLine1SvgIcon, airdropLine2SvgIcon, airdropLine3SvgIcon, rewardArrowSvgIcon, rewardSvgIcon } from '../../utils/svgManage';
import rewardAva from '../../assets/img/airdrop/rewardAva.png'
import { IOpenModal, ModalContext } from '../../Components/ModalContext/ModalContext';
import ConfirmModal, { ConfirmModalProps } from '../../Components/Modal/ConfirmModal';
import airdropTopBg from '../../assets/img/airdrop/airdrop_top_bg.png'


export enum ModalType {
  Follow = 'Follow',
  Forward = 'Forward',
  Comment = 'Comment',
  Like = 'Like',
  Email = 'Email',
}

interface ConentList {
  text: string;
  amount: number;
  title?: string;
  confirmText?: string;
  BtnTextUp?: string;
  BtnTextDown?: string;
  type?: ModalType;
}

export default function AirdropIndex() {
  const theme = useTheme();
  const {openModal, destoryModal} = useContext(ModalContext)

  const contentList: ConentList[] = [
    {
      text: 'Link your wallet and X profile',
      amount: 10000,
    },
    {
      text: 'Follow @ Rait_ IO',
      title: 'Follow',
      amount: 20000,
      confirmText: 'Follow Rabbitgames Twitter for the latest updates',
      BtnTextUp: 'Follow Rabbitgames',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Follow
    },
    {
      text: 'Forward this tweet',
      amount: 30000,
      title: 'Forward this tweet',
      confirmText: `"You must go down to the heavens and spread the gospel to all things." (Mark 16:15) It may take us a minute to find your post. Please Elon accelerate the pace.

      Hi, my name is @ XXX and I am a # Rabbitgames (@ Rabbitgames) farmer.
      Go to the whole world and preach the gospel to all things created
      Hello everyone, my name is @ XXX, and I am # Rabbitgames (@ Rait1io) farmer
      I will do my best to fulfill my responsibilities and always cultivate # Rabbitgames, which is the best
      
      Join me together!`,
      BtnTextUp: 'Forward tweet',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Forward
    },
    {
      text: 'Comment on this tweet',
      amount: 10000,
      title: 'Comment on this tweet',
      confirmText: `How much do you like Rabbitgames to express your love`,
      BtnTextUp: 'Comment on X',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Comment
    },
    {
      text: 'Like this tweet',
      amount: 10000,
      title: 'Like this tweet',
      confirmText: `If you like Rabbitgames, give them your blessings`,
      BtnTextUp: 'Like on X',
      BtnTextDown: 'Claim rewards',
      type: ModalType.Like
    },
    {
      text: 'Leave your email account',
      amount: 10000,
      title: 'Email',
      confirmText: `Leave your email to facilitate Rabbitgames airdrop distribution`,
      BtnTextUp: 'Like on X',
      BtnTextDown: 'Save and claim rewards',
      type: ModalType.Email
    },
  ]

  const click = (item:ConentList) => {
    if(!item.type) return;
    const id = openModal<ConfirmModalProps>(ConfirmModal, {
      title: item.title || '',
      confirmText: item.confirmText || '',
      BtnTextUp: item.BtnTextUp || '',
      BtnTextDown: item.BtnTextDown || '',
      type: item.type,
      onFnDown: (e) => {
        console.log('321',e)
        destoryModal(id)
      },
      onFnUp: () => {
        console.log('22321')
        destoryModal(id)
      }
    })
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
          <div className="rewardAmount">100000000</div>
          <div className="button">Receive</div>
        </div>
        </TopContent>
      </AirdropTopBG>

      <Content>
        {
          contentList.map((item) => {
            return   <CardBox onClick={() => {click(item)}}>
            <div className='left'>
              <div className='imgBox'>
                <img src={rewardAva} alt='' />
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
