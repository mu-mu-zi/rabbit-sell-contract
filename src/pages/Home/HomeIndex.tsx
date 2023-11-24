import React from 'react';
import { About, ButtonGrounp, ConnectWalletButton, ContentBox,
   Game, LightningNetwork, LogoGroup, Nft, NavTop,
    NavWrap, RightUl, UlHref, Vision, AboutFlex, LightningNetworkColumn, Title, NftFlex, VisionColumn, SignButton, VisionBox, GameBox } from './HomeIndex.styled';
import logo from '../../assets/img/logo.png'
import { TgSvgIcon, XSvgIcon, RdSvgIcon, NftArrowSvgIcon } from '../../utils/svgManage';
import Rabbit from '../../assets/img/Rabbit.png'
import SMRabbit from '../../assets/img/SMRabbit.png'
import nft from '../../assets/img/nft.png'
import { useTheme } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../assets/img/banner_1.png'
import banner2 from '../../assets/img/banner_2.png'
import banner3 from '../../assets/img/banner_3.png'
import banner4 from '../../assets/img/banner_4.png'

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

  return (
    <div>
    <NavWrap>
      <NavTop>
        <LogoGroup>
          <img  style={{width: theme.isH5 ? '21px' : '', height: theme.isH5 ? '21px' : '' }} src={logo} />
          <span>Rabbitgames </span>
        </LogoGroup>
        <RightUl>

          <UlHref style={{display: theme.isH5 ? 'none' : ''}}>
            <a href="#about">About</a>
            <a href="#network">Lightning network</a>
            <a href="#game">Game</a>
            <a href="#nft">NFT</a>
            <a href="#vision">Vision and Mission</a>
          </UlHref>


          <ButtonGrounp>
            <span dangerouslySetInnerHTML={{__html: TgSvgIcon || ''}} />
            <span dangerouslySetInnerHTML={{__html: XSvgIcon || ''}} />
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
          </ButtonGrounp>
        </RightUl>

      </NavTop>
      </NavWrap>
      <About id="about">
        <ContentBox>
          <AboutFlex>
            <div className='text_right'>
              <div className='text_38'>
                Rait is a virtual gaming and NFT
                platform on the <span className='orig'>Lightning Network</span>
              </div>

              <div className='text_26'>
              Establish an ecosystem dedicated to blockchain, with Rait as the platform
Functional tokens that participate in network governance, allowing users to construct and own,
Selling in-game modeling and props
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
                What is Rait?
              </Title>

              <div className='text'>
                <div>
                  Lightning network to provide asset transfer within the Rabbitgames ecosystem. The settlement and security of assets are handled by Lightning Network, providing Rabbitgames users with better scalability and security in the on chain gaming experience, An experience built around the fun of community and ownership.
                </div>
                <div>
                Together, we have become a powerful force driving community development,
 defining a new field of Web3 entertainment.
                </div>
              </div>

           </LightningNetworkColumn>
        </ContentBox>
      </LightningNetwork>

      <Game id="game">
        <ContentBox>
          <GameBox>
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

      <Nft id="nft">
        <ContentBox>
           <NftFlex>
              <div className='nfg_png'>
                <img src={nft} />
              </div>
              <div className='text_column'>
                <Title>NFT</Title>
                <div>This is the metaverse of our iconic IP digital collection</div>
                <span dangerouslySetInnerHTML={{__html: NftArrowSvgIcon || ''}} />
              </div>
           </NftFlex>
        </ContentBox>
      </Nft>

      <Vision id="vision">
        <ContentBox>
           <VisionColumn>
              <Title>Ecological partner</Title>
              <div className='flex-row'>
                <SignButton>BTC</SignButton>
                <SignButton>ETH</SignButton>
                <SignButton>ORDI</SignButton>
                <SignButton>BINANCE</SignButton>
                <SignButton>OKX</SignButton>
                <SignButton>GALA</SignButton>
                <SignButton>AXLE</SignButton>
              </div>
              <VisionBox>
                  <Title>Vision and mission</Title>
                  <div>
                    Rabbitgames is a lightning online gaming platform that actively transforms the world we shape, collaborating with some of the most influential organizations to drive the future of the Ordinals protocol and Bitcoin ecosystem
                  </div>
              </VisionBox>
           </VisionColumn>
        </ContentBox>
      </Vision>

      <NavWrap>
      <NavTop>
        <LogoGroup>
          <img style={{width: theme.isH5 ? '21px' : '', height: theme.isH5 ? '21px' : '' }} src={logo} />
          <span>Rabbitgames </span>
        </LogoGroup>

          <ButtonGrounp>
            <span dangerouslySetInnerHTML={{__html: TgSvgIcon || ''}} />
            <span dangerouslySetInnerHTML={{__html: XSvgIcon || ''}} />
            <span dangerouslySetInnerHTML={{__html: RdSvgIcon || ''}} />
          </ButtonGrounp>

      </NavTop>
      </NavWrap>
    
    </div>
  )
}
