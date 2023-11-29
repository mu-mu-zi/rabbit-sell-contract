import React from 'react';
import {
  About, ButtonGrounp, ConnectWalletButton, ContentBox,
  Game, LightningNetwork, LogoGroup, NavTop,
  NavWrap, RightUl, UlHref, Vision, AboutFlex, LightningNetworkColumn, Title, VisionColumn, SignButton, VisionBox, GameBox, Distribution, DistributionFlex, DistributionButton, Roadmap, RoadmapColumn, StoryLine, Mission, MissionColumn, PartnerColumn, Partner, BottomBG, PartnerButton
} from './HomeIndex.styled';
import logo from '../../assets/img/logo.png'
import { TgSvgIcon, XSvgIcon, RdSvgIcon, LineIcon, AXLE, BINAIcon, BTCIcon, ETHIcon, GALAIcon, OKXIcon, ORDIIcon } from '../../utils/svgManage';
import Rabbit from '../../assets/img/Rabbit.png'
import SMRabbit from '../../assets/img/SMRabbit.png'
import nft from '../../assets/img/nft.png'
import { useTheme } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import rabbit_icon from '../../assets/img/rabbit_icon.png'
import distributionCharts from '../../assets/img/distribution_charts.png'
import distributionPng from '../../assets/img/distribution_png.png'
import lineBg1 from '../../assets/img/line_bg1.png'
import lineBg2 from '../../assets/img/line_bg2.png'
import lineRabbit from '../../assets/img/line_rabbit.png'
import visionBg from '../../assets/img/vision_bg.png'
import missionBg from '../../assets/img/Mission.png'
import banner1 from '../../assets/img/banner_1.png'
import banner2 from '../../assets/img/banner_2.png'
import banner3 from '../../assets/img/banner_3.png'
import banner4 from '../../assets/img/banner_4.png'
import HeaderNav from '../../Components/Heder';
import Footer from '../../Components/Footer';
import ORDI from './ORDI.svg'
import GALA from './GALA.png'
import OKX from './OKX.png'
import AXLE1 from './AXLE.png'
import UNISAT from './UNISAT.png'
import TUR from './TUR.png'
import PORT from './PORT.png'
import BISO from './BISO.png'
import Toggle from '../../Components/Toggle/Toggle';
import Column from '../../Components/Box/Column';
import charts1 from '../../assets/img/home/charts1.png'
import charts2 from '../../assets/img/home/charts2.png'
import charts3 from '../../assets/img/home/charts3.png'
import charts4 from '../../assets/img/home/charts4.png'
import charts5 from '../../assets/img/home/charts5.png'
import charts6 from '../../assets/img/home/charts6.png'
import partnerBg from '../../assets/img/home/partner_bg.png'

export default function HomeIndex() {

  const theme = useTheme();
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

  // 饼图列表
  const chartsList = [
    { img: charts1, text: 'Ecological construction'},
    { img: charts2, text: 'Market value management'},
    { img: charts3, text: 'Game mining'},
    { img: charts4, text: 'Team'},
    { img: charts5, text: 'Air drop'},
    { img: charts6, text: 'Whitelist'},
  ]

  return (
    <div style={{background: '#000'}}>
      <HeaderNav />
      <About id="about">
        <ContentBox>
          <AboutFlex>
            <div className='text_right'>
              <div className='text_38'>
              Rait is a game platform based on the <span className='orig'>Bitcoin ecosystem</span>.
              </div>

              <div className='text_26'>
              Rabbit is an innovative Bitcoin ecosystem gaming platform, providing Rabbitgames users with an excellent, scalable, and secure online gaming experience. We are committed to creating an entertainment experience centered around community and ownership, encouraging users to actively participate and share the joy brought by games. As a driving force in community development, we define and lead the new frontier of Web3 entertainment. Join us, explore endless possibilities, and together, let's create a unique and exciting gaming world!
              </div>

            </div>

            <img src={theme.isH5 ? SMRabbit : Rabbit} alt='' />



          </AboutFlex>
        </ContentBox>
      </About>

      <LightningNetwork id="network">
        <ContentBox>
          <LightningNetworkColumn>
            <Title>
              What is <span>Rabbitgames</span>?
            </Title>
            <Toggle vIf={theme.isH5}>
              <img width={'240px'} height={'43px'} src={rabbit_icon} alt='' />
              <img src={rabbit_icon} alt='' />
            </Toggle>

            <div className='text'>
             <div>
             Rait is dedicated to building a blockchain-based ecosystem, with Rait serving as the utility token of the platform actively involved in network governance. It provides users with the rights to construct and own, supporting the sale of in-game models and items. This ecosystem aims to create a more open, sustainable, and user-engaging gaming environment, offering players more opportunities to create, own, and trade digital assets.
             </div>
            </div>

          </LightningNetworkColumn>
        </ContentBox>
      </LightningNetwork>

      <Game id="game">
        <ContentBox>
          <GameBox>
            <Title>
              <span>Video </span>
              Introduction
            </Title>
            <Slider {...bannerSettings}>
              <div>
                <video src={'https://rabbitgames.org/oss/video.mp4'} loop controls autoPlay>

                </video>
              </div>
              <div>
                <img src={banner1} />
              </div>
              <div>

                <img src={banner2} />
              </div>
              <div>

                <img src={banner3} />
              </div>
              <div>

                <img src={banner4} />
              </div>
            </Slider>
          </GameBox>
        </ContentBox>
      </Game>

      <Distribution id="distribution">
        <ContentBox>
          <DistributionFlex>
            <Title><span>Distribution</span> modes</Title>
            <DistributionButton>
              Total: <span>100</span>Billion
            </DistributionButton>

            <div className='distribution_charts'>
              {
                chartsList.map(item => {
                  return    <Column 
                    width={theme.isH5 ? '74px' : '105px'}  
                    gap='30px'
                    alignItems={'center'}
                  >
                  <div className='charts_circle'><img src={item.img} alt='' /></div>
                  <div className='charts_text'>{item.text}</div>
                </Column>
                })
              }
            </div>
            <div className='text_row'>
              <img src={distributionPng} />

              <div className='text_box'>
                <div className='line_left' />
                Rabbit is a diversified gaming platform that provides a rich and diverse gaming experience and innovative gameplay to meet the entertainment needs of a large audience of players
                <div className='line_right' />
              </div>
            </div>
          </DistributionFlex>
        </ContentBox>
      </Distribution>

      <Roadmap id="Roadmap">
        <ContentBox>
          <RoadmapColumn>
            <Title>Rabbit Platform <span>Roadmap</span></Title>
            <div className='bg1'>
              <img src={lineBg1} alt='' />
            </div>
            <div className='bg2'>
              <img src={lineBg2} alt='' />
            </div>
            <div className='bg3'>
              <img src={lineRabbit} alt='' />
            </div>
            <StoryLine>
              <div className='line'></div>

              <div className='grid-3'>
                <div className='content-left'>
                  <div className='title'>Infrastructure Construction (Q2 2022)</div>
                  <div className='text'>Build a comprehensive blockchain infrastructure to ensure security and scalability.
                    Launch Rait tokens and introduce network governance mechanisms to empower users to participate in platform decision-making.</div>
                </div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div></div>
              </div>
              <div className='grid-3'>
                <div></div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div className='content'>
                  <div className='title'>Game Diversity and Innovation (Q3 2023)</div>
                  <div className='text'>Publish diverse games covering various types and themes to meet the interests of different players.
Promote innovative games, introduce unique game elements and mechanisms, and bring players a brand new gaming experience.</div>
                </div>
              </div>
              <div className='grid-3'>
                <div className='content-left'>
                  <div className='title'>Community Building and User Participation (Q1 2024)</div>
                  <div className='text'>Create a powerful community platform to promote interaction and communication between players.
Launch a community reward plan to motivate users to actively participate in platform development and jointly create a lively and vibrant community.</div>
                </div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div></div>
              </div>
              <div className='grid-3'>
                <div></div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div className='content'>
                  <div className='title'>Digital Asset Ecology (Q4 2024)</div>
                  <div className='text'>Introduce NFT technology to support the creation, ownership, and trading of digital assets on the platform.
Launch a modeling and props market, providing players with a platform to create and trade unique digital items.</div>
                </div>
              </div>
              <div className='grid-3'>
                <div></div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div className='content'>
                  <div className='title'>Global Expansion and Cooperation (Q2 2025)</div>
                  <div className='text'>Expand the scope of platform services, enter the global market, and provide localized gaming experiences.
Collaborate with other blockchain projects and gaming platforms to jointly promote the global development of the blockchain gaming industry.
This roadmap aims to showcase the development plans of the Rabbit platform in the coming years, in order to continuously improve user experience, expand the digital asset ecosystem, promote global cooperation, and create an innovative and prosperous blockchain gaming platform.</div>
                </div>
              </div>
              <div className='grid-3'>
                <div></div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div className='content'>
                </div>
              </div>
            </StoryLine>
          </RoadmapColumn>
        </ContentBox>
      </Roadmap>


      <Vision id="vision">
        <ContentBox>
          <VisionColumn>
            <Title>Vision</Title>
            <div className='text'>
              <div className='float'>
                Become a globally leading diversified gaming platform, connecting and inspiring players' shared passion and creativity with innovative and diverse gaming experiences. We are committed to creating a digital entertainment paradise, promoting the development of the gaming industry, and bringing players unprecedented fun and interactive experiences.
              </div>
            </div>
            <div>
              <img src={visionBg} alt='' />
            </div>
          </VisionColumn>
        </ContentBox>
      </Vision>

      <Mission>
      <ContentBox>
        <MissionColumn>
        <Title>Mission</Title>
        <div className='imgbg'>
          <img src={missionBg} alt='' />
        </div>
        <div className='floatBox'>
        Our mission is to enable every player to find their own entertainment paradise on the Rabbit platform by providing diverse game content and innovative gameplay. We strive to build a social and creative ecosystem that expands the boundaries of entertainment experiences in a digital way. We encourage users to participate in platform decision-making and work together to create a thriving and vibrant gaming community.
        </div>
        </MissionColumn>
      </ContentBox>
      </Mission>

      <Partner>

      <ContentBox>
        <PartnerColumn>
        <Title>Ecological <span>partner</span></Title>
        <div className='flex-row'>
          <PartnerButton className='row'>
            {/* <span dangerouslySetInnerHTML={{ __html: BTCIcon || '' }} />
            <p>OKX WALLET</p> */}
            <img src={OKX} alt='' />
            <p>OKX WALLET</p>
          </PartnerButton>
          <PartnerButton className='row'>
            <img src={GALA} alt='' />
            <p>GALA</p>
          </PartnerButton>
          <PartnerButton className='row'>
            {/* <span dangerouslySetInnerHTML={{ __html: ORDI || '' }} /> */}
            <img src={AXLE1} alt='' />
            <p>AXLE</p>
          </PartnerButton>
          <PartnerButton className='row'>
            <img src={UNISAT} alt='' />
            <p>UNISAT</p>
          </PartnerButton>
          <PartnerButton className='row'>
            {/* <span dangerouslySetInnerHTML={{ __html: OKXIcon || '' }} /> */}
            <img src={TUR} alt='' />
            <p>TURTSAT</p>
          </PartnerButton>
          <PartnerButton className='row'>
            {/* <span dangerouslySetInnerHTML={{ __html: GALAIcon || '' }} /> */}
            <img src={PORT} alt='' />
            <p>PORT3</p>
          </PartnerButton>
          <PartnerButton className='row'>
            {/* <span dangerouslySetInnerHTML={{ __html: AXLE || '' }} /> */}
            <img src={BISO} alt='' />
            <p>BISO SWAP</p>
          </PartnerButton>
        </div>
        </PartnerColumn>
      </ContentBox>
      <div className='partner_bg'>
        <img src={partnerBg} alt='' />
      </div>
      <BottomBG />
      </Partner>
    <Footer />
    </div>
  )
}
