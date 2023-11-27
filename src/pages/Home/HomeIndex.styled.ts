import styled from 'styled-components';
import AbountBg from '../../assets/img/about_bg.png'
import LightningNetworkBg from '../../assets/img/LightningNetwork_bg.png'
import GameBg from '../../assets/img/Game_bg.png'
import DistributionBg from '../../assets/img/Distribution_bg.png'
import VisionBg from '../../assets/img/Vision_bg.png'
import SignPng from '../../assets/img/Sign_png.png'
import distributionButton from '../../assets/img/distributionButton.png'
import bottomBg from '../../assets/img/bottom_bg.png'
export const Layer = styled.div`
  max-width: 1200px;
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
  font-size: 13px;
    .nav-item {
    font-weight: 400;
    color: #999;
    text-decoration: none;
  }
  .active {
    font-weight: 700;
    color: #FF9231;
  }
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
  cursor: pointer;
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
  /* height: 852px; */
  background-size: cover;
  background-position: center;
  margin-bottom: -2px;
  padding: 150px 31px 130px 32px;
  ${({ theme }) => theme.mediaWidth.sm`
     padding-top: 37px;
  `}
`

export const BottomBG = styled.div`
  background: url(${bottomBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 262px;
  margin-bottom: -1px;
`

export const LightningNetwork = styled.div`
  background: url(${LightningNetworkBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 1771px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 415px;
`}
`
export const Game = styled.div`
  background: url(${GameBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 943px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 415px;
`}
`
export const Distribution = styled.div`
  background: url(${DistributionBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 1233px;
  ${({ theme }) => theme.mediaWidth.sm`
  height: 349px;
`}
`
export const Vision = styled.div`
  background: #000;
  padding-top: 138px;
  ${({ theme }) => theme.mediaWidth.sm`
  padding-top: 60px;
`}
`
export const Mission = styled.div`
  background: #000;
  padding-top: 110px;

`
export const Partner = styled.div`
  background: #000;
  padding-top: 212px;

`
export const Roadmap = styled.div`
  background: #000;
  padding-top: 138px;
  ${({ theme }) => theme.mediaWidth.sm`
  padding-top: 60px;
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
      color: #A3968C;
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
  font-weight: 800;
  & span {
    color: #FF9231;
  }
  ${({ theme }) => theme.mediaWidth.sm`
  font-size: 22px;
  font-weight: 700;
  `}
`

export const LightningNetworkColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 117px;
  align-items: center;
  height: 100%;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 845px;
    gap: 22px;
    color: #A3968C;
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

export const DistributionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${distributionButton}) no-repeat;
  min-width: 419px;
  height: 101px;
  background-size: 100% 100%;
  background-position: center;
  color: #FFF;
  font-size: 30px;
  font-weight: 700;
  margin-top: 79px;
  & span {
    margin-left: 5px;
    color: #FFEB3B;
  }
  ${({ theme }) => theme.mediaWidth.sm`
    min-width: 89px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
`}
`

export const DistributionFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 188px;
  ${({ theme }) => theme.mediaWidth.sm`
  gap: 31px;
  padding-top: 80px;

`}
  .distribution_png {
    margin-top: 42px;
    img {
      ${({ theme }) => theme.mediaWidth.sm`
     width: 150px;
     height: 130px;
     `}
    }
  }
  .text_row {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #A3968C;
    font-size: 24px;
    font-weight: 500;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 10px;
      color: #FFF;
      font-size: 17px;
      font-weight: 400;
    `}
    .text_box {
      background: rgba(35, 33, 33, 0.60);
      max-width: 675px;
      padding: 45px 28px 55px 55px;
      color: #A3968C;
      font-size: 24px;
      font-weight: 500;
    }
    span svg {
      ${({ theme }) => theme.mediaWidth.sm`
        width: 38px;
        height: 14px;
    `}
    }
  }
`

export const RoadmapColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .bg1 {
    position: absolute;
    top: 27px;
    right: 0;
  }
  .bg2 {
    position: absolute;
    top: 959px;
    left: 220px;
  }
  .bg3 {
    position: absolute;
    top: 704px;
    left: 46px;
  }
`

export const StoryLine = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 120px;
  gap: 50px;
  margin-top: 108px;
  .line {
    position: absolute;
    left: 50%;
    top: 8px;
    transform: translateX(-1px);
    width: 1px;
    height: 98%;
    background: #FF9231;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    .icons {
        text-align: center;
      }
    .content {
      display: flex;
      flex-direction: column;
      gap: 11px;
      .title {
        color: #FF9231;
        font-size: 18px;
        font-weight: 600;
      }
    
      .text {
        color: #A3968C;
        font-size: 14px;
        font-weight: 300;
      }
    }
    .content-left {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 11px;
      .title {
        color: #FF9231;
        font-size: 18px;
        font-weight: 600;
      }
      .text {
        color: #A3968C;
        font-size: 14px;
        font-weight: 300;
        text-align: right;
      }
    }
  }

`

export const VisionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    position: relative;
    width: 980px;
    height: 170px;
    margin-top: 54px;
    color: #A3968C;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    .float {
      position: absolute;
      bottom: -25px;
    }
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

export const MissionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .imgbg {
    align-self: flex-start;
    margin-top: 170px;
  }
  .floatBox {
    position: absolute;
    background: rgba(35, 33, 33, 0.60);
    top: 128px;
    right: 0;
    padding: 36px 53px 46px 44px;
    color: #FFF;
    font-size: 24px;
    width: 770px;
  }
`
export const PartnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 71px;
  padding: 0 223px;
  .flex-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 90px;
    row-gap: 48px;
    color: #D9D9D9;
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
    .row {
      display: flex;
      align-items: center;
      gap: 5px;
      & span {
        height: 30px;
      }
    }
  }
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
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding-top: 80px;
  padding-bottom: 162px;
  gap: 47px;

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
    bottom: -75px;
    ${({ theme }) => theme.mediaWidth.sm`
    bottom: -20px;
      `}
    & > li {
      width: 30px;
      height: 8px;
      background: #D9D9D966;
      border-radius: 100px;
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
      width: 50px;
      height: 8px;
      background: #FF9231;
      border-radius: 100px;
      ${({ theme }) => theme.mediaWidth.sm`
      width: 14px;
      height: 3px;
      `}
    }
  }

`

