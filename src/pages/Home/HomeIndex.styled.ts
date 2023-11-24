import styled from 'styled-components';
import AbountBg from '../../assets/img/about_bg.png'
import LightningNetworkBg from '../../assets/img/LightningNetwork_bg.png'
import GameBg from '../../assets/img/Game_bg.png'
import NFTBg from '../../assets/img/NFT_bg.png'
import VisionBg from '../../assets/img/Vision_bg.png'
import SignPng from '../../assets/img/Sign_png.png'
export const Layer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  height: 100%;
  ${({ theme }) => theme.mediaWidth.sm`
     max-width: 480px;
  `}
`

export const NavWrap = styled.div`
  width: 100%
  height: 80px;
  background: #161616;
  ${({ theme }) => theme.mediaWidth.sm`
    height: 40px;
  `}
`

export const NavTop = styled(Layer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${({ theme }) => theme.mediaWidth.sm`
    height: 40px;
    padding: 0 20px;
  `}
`

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #FFF;
  font-size: 13px;
  ${({ theme }) => theme.mediaWidth.sm`
  gap: 5px;

  `}
`
export const UlHref = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
  ${({ theme }) => theme.mediaWidth.sm`
  gap: 22px;

`}
`
export const ButtonGrounp = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${({ theme }) => theme.mediaWidth.sm`
    gap: 12px;

  `}
  span svg {
    ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 15px;
  `}
  }
`
export const RightUl = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${({ theme }) => theme.mediaWidth.sm`
  gap: 12px;

`}
`

export const ConnectWalletButton = styled.div`
  display: flex;
  width: 138px;
  height: 28px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: #FF9231;
  color: #FFF;
  font-size: 13px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 6.5px;
    width: 69px;
    border-radius: 50px;
    height: 14px;
`}
`

export const ContentBox = styled(Layer)`

`

export const About = styled.div`
  background: url(${AbountBg}) no-repeat;
  height: 863px;
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.mediaWidth.sm`
     height: 523px;
     padding-top: 37px;
  `}
`

export const LightningNetwork = styled.div`
  background: url(${LightningNetworkBg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 829px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 415px;
`}
`
export const Game = styled.div`
  background: url(${GameBg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 829px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 415px;
`}
`
export const Nft = styled.div`
  background: url(${NFTBg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 698px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 349px;
`}
`
export const Vision = styled.div`
  background: url(${VisionBg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 896px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 448px;
`}
`

export const AboutFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 89px;
  height: 100%;
  ${({ theme }) => theme.mediaWidth.sm`
      flex-direction: column;
      gap: 19px;
    `}
  .text_right {
    display: flex;
    flex-direction: column;
    gap: 88px;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 16px;
    `}
    .text_38 {
      color: #FFF;
      font-size: 38px;
      font-weight: 700;
      .orig {
        color: #FF9231;
      }
      ${({ theme }) => theme.mediaWidth.sm`
          text-align: center;
          font-weight: 700;
          font-size: 18px;
          margin: 0 30px;
      `}
    }
    .text_26 {
      color: #FFF;
      font-size: 26px;
      ${({ theme }) => theme.mediaWidth.sm`
      font-size: 13px;
          text-align: center;
          margin: 0 34px;
      `}
    }
  }
`
export const Title = styled.div`
  color: #FFF;
  font-size: 45px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
  font-size: 22px;
  font-weight: 700;
  `}
`

export const LightningNetworkColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 133px;
  align-items: center;
  height: 100%;
  gap: 72px;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    gap: 30px;
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    ${({ theme }) => theme.mediaWidth.sm`
      font-size: 12px;
      gap: 15px;
       max-width: 275px;
       margin: 0 34px;
  `}
  }
  ${({ theme }) => theme.mediaWidth.sm`
    gap: 27px;
    padding-top: 50px;
  `}
`

export const NftFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 62px;
  padding-top: 188px;
  ${({ theme }) => theme.mediaWidth.sm`
  gap: 31px;
  padding-top: 80px;

`}
  .nfg_png {
    img {

      ${({ theme }) => theme.mediaWidth.sm`
     width: 150px;
     height: 130px;
     `}
    }
  }
  .text_column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #FFF;
    font-size: 34px;
    font-weight: 500;
  ${({ theme }) => theme.mediaWidth.sm`
    gap: 10px;
    color: #FFF;
    font-size: 17px;
    font-weight: 400;
  `}
  span svg {
    ${({ theme }) => theme.mediaWidth.sm`
      width: 38px;
      height: 14px;
  `}
  }
  }
`

export const VisionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 95px;
  ${({ theme }) => theme.mediaWidth.sm`
  padding-top: 50px;
`}
  .flex-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 85px;
    width: 100%;
    gap: 17px;
    padding: 0 90px;
    ${({ theme }) => theme.mediaWidth.sm`
    margin-top: 40px;
    gap: 6px;
    padding: 0 10px;
  `}
  }
`

export const VisionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 42px 65px;
  gap: 26px;
  background: rgba(0, 0, 0, 0.50);
  margin-top: 125px;
  color: #999;
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  ${({ theme }) => theme.mediaWidth.sm`
    padding: 25px 22px 30px;
    margin: 0 19px;
    font-size: 13px;
    gap: 13px;
  `}
`

export const SignButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${SignPng}) no-repeat;
  min-width: 189px;
  height: 64px;
  background-size: 100% 100%;
  background-position: center;
  color: #D9D9D9;
  font-size: 28px;
  font-weight: 500;
  ${({ theme }) => theme.mediaWidth.sm`
    min-width: 89px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
`}
`

export const GameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .slick-initialized {
    width: 100%;
  }
.slick-track {
  display: flex;
}
  .slick-slide {
    .imgWrap {
      outline: none;
    }
    video, img {
      margin: auto;
      /* margin-top: 128px; */
      min-width: 854px;
      height: 600px;
      object-fit: cover;
      border: none;
      border: 0;
      outline: none;
      ${({ theme }) => theme.mediaWidth.sm`
      min-width: 346px;
      height: 244px;
      `}
    }
  }
  .slick-dots {
    pointer-events: auto;
    position: absolute;
    bottom: -40px;
    ${({ theme }) => theme.mediaWidth.sm`
    bottom: -20px;
      `}
    & > li {
      width: 6px;
      height: 6px;
      background: #FF9231;
      border-radius: 50%;
      ${({ theme }) => theme.mediaWidth.sm`
      width: 3px;
      height: 3px;
      `}
      button {
        &::before {
          content: ''
        }
      }
    }
    .slick-active {
      width: 27px;
      height: 6px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 12px;
      ${({ theme }) => theme.mediaWidth.sm`
      width: 14px;
      height: 3px;
      `}
    }
  }

`

