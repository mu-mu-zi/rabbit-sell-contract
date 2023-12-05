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
    { img: charts1, text: 'Ecological'},
    { img: charts2, text: 'Liquidity'},
    { img: charts3, text: 'Mining'},
    { img: charts4, text: 'Team'},
    { img: charts5, text: 'Fair Launch'},
    { img: charts6, text: 'Angel Investment'},
  ]

  return (
    <div style={{background: '#000'}}>
      <HeaderNav />
      <About id="about">
        <ContentBox>
          <AboutFlex>
            <div className='text_right'>
              <div className='text_38'>
              Rabbit, a <span className='orig'>Bitcoin-based</span> gaming platform
              </div>

              <div className='text_26'>
              Rabbit is a revolutionary Bitcoin ecosystem gaming platform, striving to deliver our users a secure,  scalable, and exceptional online gaming experience. Our commitment is to craft an entertainment haven rooted in community and ownership, which encourages users to actively engage and revel in the joy of gaming. As a driving force in community development, we are pioneers who define and lead the new landscape of Web3 entertainment. Join us, unlock infinitive possibilities, and let's co-create a unique and exhilarating gaming universe!
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
             Rabbit is dedicated to constructing a blockchain-based ecosystem, with Rait as the utility token that is actively involved in the platform’s network governance. This token empowers users with the right to construct and own, facilitating the sale of their in-game models and items. The mechanism’s goal is to foster a more open, sustainable, and user-engaging gaming environment. With the convenience, our players are provided with more opportunities to create, own, and trade digital assets.
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
            <Title><span>Distribution</span> Modes</Title>
            <DistributionButton>
              Total: <span>10,000,000,000</span>
            </DistributionButton>

            <div className='distribution_charts'>
              {
                chartsList.map((item, index) => {
                  return    <Column 
                    width={theme.isH5 ? '74px' : '108px'}  
                    gap='24px'
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
                As a diversified gaming platform, Rabbit provides a superb gaming experience and innovative gameplay for the delectation of our vast player audience of varied entertainment preferences.
                <div className='line_right' />
              </div>
            </div>
          </DistributionFlex>
        </ContentBox>
      </Distribution>

      <Roadmap id="Roadmap">
        <ContentBox style={{maxWidth: '1300px'}}>
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
                  <div className='text'>Establish a robust blockchain infrastructure for enhanced security and scalability. 
Launch Rait tokens and introduce our network governance mechanisms, empowering users in platform decision-making.</div>
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
                  <div className='text'>Release games spanning various types and themes to cater to diverse player interests. 
Introduce innovative games featuring unique game elements and mechanisms, thus bringing players a real fresh gaming experience.</div>
                </div>
              </div>
              <div className='grid-3'>
                <div className='content-left'>
                  <div className='title'>Community Building and User Participation (Q1 2024)</div>
                  <div className='text'>Develop a powerful community platform to foster interaction and communication among players. Implement a community reward plan to motivate users to actively contribute to platform development as part of it, creating a lively and vibrant community collaboratively.</div>
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
                  <div className='text'>Introduce NFT technology to facilitate the creation, ownership, and trading of digital assets on the platform. </div>
                  <div className='text'>Launch a marketplace for models and props, providing players with an effective channel to trade unique digital items created by themselves.</div>
                </div>
              </div>
              <div className='grid-3'>
                <div></div>
                <div className='icons'>
                <span dangerouslySetInnerHTML={{ __html: LineIcon || '' }} />
                </div>
                <div className='content'>
                  <div className='title'>Global Expansion and Cooperation (Q2 2025)</div>
                  <div className='text'>Expand the scope of platform services, enter the global market, and provide localized gaming experiences. </div>
                  <div className='text'>Collaborate with other blockchain projects and gaming platforms to collectively drive the global development of the blockchain gaming industry. This roadmap showcases the development plans of the Rabbit for the coming years, aiming to continually enhance the user experience, expand the digital asset ecosystem, and ultimately create an innovative and prosperous blockchain gaming platform through tighter global cooperation.</div>
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
              Our vision is to become a global leading blockchain gaming platform with diversified products and community, connecting our players, inspiring shared passion, and unleashing creativity with innovative and diverse gaming experiences. We are committed to creating a digital entertainment paradise, bringing impetus to the growth of the blockchain gaming industry and offering players unparalleled joy and interactive experiences.
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
        Our ultimate mission is to help our players find a tailored entertainment paradise on the Rabbit platform after experiencing diverse game content and innovative gameplay. We strive to build a social and creative ecosystem that pushes the boundaries of the digital entertainment experience. We invite users to be part of the platform’s decision-making, working together to create a vibrant and thriving gaming community.
        </div>
        </MissionColumn>
      </ContentBox>
      </Mission>

      <Partner>

      <ContentBox>
        <PartnerColumn>
        <Title>Ecological <span>Partner</span></Title>
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
