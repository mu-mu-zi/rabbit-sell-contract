import styled from "styled-components";
import BuyBtn from '../../assets/img/nft/buyBtn.png'
import RightBtn from '../../assets/img/nft/rightBtn.png'
import NftBG from '../../assets/img/nft/nftBg.png'
import test from './test.svg'
import h5Bg from './h5Bg.png'
import h5Bg1 from './h5Bg1.png'
export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc( 100vh - 80px );
  background: #000;
  ${({ theme }) => theme.mediaWidth.sm`
    min-height: initial;
    // height: calc( 100vh - 40px );
  `}
`

export const Banner = styled.div`
  position: absolute;
  pointer-events:none;
  top: 0;
  width: 100%;
  height: 1200px;
  background: url(${NftBG}) no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: -2px;
  ${({theme}) => theme.mediaWidth.sm`
      height: 600px;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.sm`
    max-width: 375px;
    overflow: auto;
  `}
`

export const Title = styled.div`
  margin-top: 138px;
  color: #FFF;
  font-size: 64px;
  font-weight: 700;
  & span {
    color: #FF9231;
  }
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 28px;
    font-weight: 700;
    margin-top: 50px;
  `}
`

export const RewardText = styled.div`
margin-top: 30px;
margin-bottom: 41px;
text-align: center;
color: #FFF;
font-size: 30px;
font-weight: 400;
${({ theme }) => theme.mediaWidth.sm`
margin-top: 15px;
margin-bottom: 35px;
    font-size: 14px;
    font-weight: 400;
  `}
`

export const InputWrap = styled.div`
flex: 1;
  input {
    text-align: center;
    color: #000;
    font-size: 48px;
    font-weight: 700;
    width: 234px;
    height: 60px;
    flex-shrink: 0;
  }
`

export const NumberBtn = styled.div`
  cursor: pointer;
`

export const BuyNftButton = styled.div`
margin-top: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: url(${BuyBtn}) no-repeat;
  min-width: 265px;
  height: 78px;
  background-size: 100% 100%;
  background-position: center;
  color: #2D2D2D;
  font-size: 32px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
    min-width: 132px;
    margin-top: 38px;
    height: 39px;
    font-size: 16px;
    font-weight: 700;
`}
`

export const RewardTitle = styled.div`
margin-top: 220px;
  color: #FFF;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 18px;
    font-weight: 700;
    margin-top: 150px;
  `}
`

export const BoxWrap = styled.div`
margin-top: 50px;
  position: relative;
  background: url("${test}");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 893px;
  min-height: 526px;
  padding: 53px 72px 78px;
  ${({ theme }) => theme.mediaWidth.sm`
    min-width: 320px;
    min-height: 268px;
    background: url("${h5Bg1}");
    background-size: 100% 100%;
    padding: 0;
    margin-top: 23.5px;
  `}

`

export const MyReward = styled.div`
  color: #FF9231;
  font-size: 35px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 18px;
    font-weight: 700;
    margin-left: 50px;
    margin-top: 19px;
  `}
`
export const RightTitle = styled.div`
  margin-top: 147px;
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 28px;
    font-weight: 700;
    margin-top: 68px;
  `}
`
export const RightDescribe = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: 400;
  padding: ;
  & span {
    color: #FF9231;
  }
  ${({ theme }) => theme.mediaWidth.sm`
    font-size: 15px;
    font-weight: 400;
  `}
`;

export const RightWrap = styled.div`
  display: flex;
  gap: 85px;
  ${({theme}) => theme.mediaWidth.sm`
    flex-direction: column;
    gap: 57px;
    margin-top: 20px;
    padding-bottom: 50px;
  `}
`;

export const DashedLine = styled.div`
  z-index: 1;
  margin-top: 67px;
  width: 771px;
  border: 1px dashed #E0E0E0;
  ${({ theme }) => theme.mediaWidth.sm`
    width: 290px;
    margin-top: 18px;
    margin-left: 25px;
  `}
`

export const GetReward = styled.button<{isGetingRewrad: boolean}>`
  margin-top: 43px;
  margin-left: 83px;
  white-space: nowrap;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  background: ${({isGetingRewrad}) => isGetingRewrad ? "#999999" : "#FF9231"};
  width: 500px;
  height: 56px;
  padding: 11px 181px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  ${({ theme }) => theme.mediaWidth.sm`
    width: 200px;
    height: 35px;
    font-size: 14px;
    margin-top: 17px;
    margin-left: 50px;
    padding: 7.5px 73.5px;
    margin-bottom: 18px;
  `}
`

export const RightBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  outline: none;
  .slick-initialized {
    width: 340px;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    .imgWrap {
      outline: none;

    }
    video, img {
     
      user-select: none;
      margin: auto;
      /* margin-top: 128px; */
      min-width: 330px;
      height: 481px;
      object-fit: cover;
      border: none;
      border: 0;
      outline: none;
      ${({ theme }) => theme.mediaWidth.sm`
          display: flex;
          min-width: 165px;
          height: 240px;
      `}
    }
  }
  .slick-dots {
    pointer-events: auto;
    position: absolute;
    bottom: -75px;
    ${({ theme }) => theme.mediaWidth.sm`
    bottom: -40px;
      `}
    & > li {
      width: 30px;
      height: 8px;
      background: #D9D9D966;
      border-radius: 100px;
      ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 4px;
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
      width: 25px;
      height: 4px;
      `}
    }
  }

`

export const RightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${RightBtn}) no-repeat;
  width: 220px;
  height: 105px;
  background-size: 100% 100%;
  /* background-size: 100% 100%; */
  background-position: center;
  color: #2D2D2D;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 42px 11px;
  ${({ theme }) => theme.mediaWidth.sm`
    width: 110px;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
`}
`

export const NFTSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .slick-arrow {
    width: 87px;
    height: 66px;
    z-index: 1;
    ::before {
      content: ''
    }
  }
  .slick-prev {
    left: -150px;

  }
  .slick-next {
    right: -150px;
  }
  .slick-initialized {
    width: 164px;
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
      min-width: 164px;
      height: 240px;
      object-fit: cover;
      border: none;
      border: 0;
      outline: none;
      ${({ theme }) => theme.mediaWidth.sm`
          display: flex;
          min-width: 165px;
          height: 240px;
      `}
    }
  }
  .slick-dots {
    pointer-events: auto;
    position: absolute;
    bottom: -75px;
    ${({ theme }) => theme.mediaWidth.sm`
    bottom: -40px;
      `}
    & > li {
      width: 30px;
      height: 8px;
      background: #D9D9D966;
      border-radius: 100px;
      ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 4px;
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
      width: 25px;
      height: 4px;
      `}
    }
  }

`
