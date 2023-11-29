import styled from "styled-components";

export const AirdropWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #000;
  ${({ theme }) => theme.mediaWidth.sm`
    min-height: initial;
    height: 100vh;
  `}
@supports (-webkit-touch-callout: none) {
  height: -webkit-fill-available;
}
  `
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 56px;
  gap: 20px;
  overflow: hidden;
  ${({ theme }) => theme.mediaWidth.sm`
    max-width: 375px;
    overflow: auto;
  `}
`
export const Title = styled.div`
  color: #FFF;
  font-size: 32px;
  font-weight: 700;
  white-space: nowrap;
  & span {
    color: #FF9231;
  }
  ${({ theme }) => theme.mediaWidth.sm`
  font-size: 22px;
  font-weight: 700;
  `}
`

export const TopContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  ${({ theme }) => theme.mediaWidth.sm`
    flex-direction: column;
    max-width: 375px;
  `}
  .airRabbitBg {
    position: absolute; 
    right: 0;
    top: 0;
    ${({ theme }) => theme.mediaWidth.sm`
      top: initial;
      bottom: 0;
      right: 0;
    `}
    img {
      ${({ theme }) => theme.mediaWidth.sm`
        width: 190px;
        height: 194px;
      `}
    }
  }
  .leftDesc {
    display: flex;
    flex-direction: column;
    gap: 41px;
    margin-top: 107px;
    margin-left: 33px;
    ${({ theme }) => theme.mediaWidth.sm`
      align-items: center;
      margin-top: 22px;
      margin-left: 0;
      gap: 27px;
    `}
    .line_chart {
      display: flex;
      flex-direction: column;
      gap: 6px;
      .dashedLine {
        width: 0px;
        height: 13px;
        border: 1px dashed #FF9231;
        margin-left: 10px;
      }
      .flex_row {
        display: flex;
        gap: 22px;
        color: #A3968C;
        font-size: 16px;
        .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255, 146, 49, 0.10) 0%, rgba(231, 99, 3, 0.10) 100%);
        }
      }
    }
  }
  .rightBox {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 89px;
    margin-right: 280px;
    border-radius: 10px;
    border: 1px solid #FF9231;
    background: #0B0503;
    padding: 20px;
    z-index: 1;
    .title {
      color: #FFF;
      font-size: 24px;
      font-weight: 700;
    }
    .description {
      margin-top: 5px;
      color: #A3968C;
      font-size: 14px;
      font-weight: 500;
    }
    .rewardAmount {
      margin-top: 23px;
      color: #FF9231;
      font-size: 50px;
      font-weight: 700;
    }
    .button {
      width: fit-content;
      cursor: pointer;
      border-radius: 100px;
      background: linear-gradient(180deg, #FF9231 0%, #E4710A 100%);
      margin-top: 23px;
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      padding: 6px 22px;
    }
  }
`

export const AirdropTopBG = styled.div`
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 388px;

  ${({ theme }) => theme.mediaWidth.sm`
  min-height: 106px;
  `}
`

export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  padding: 20px 32px 20px 20px;
  border-radius: 16px;
  background: #161616;
  cursor: pointer;
  .left {
    display: flex;
    align-items: center;
    gap: 30px;

    .imgBox {
      width: 90px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .textGroup {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .title {
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
      }
      .takeAmount {
        display: flex;
        align-items: center;
        gap: 8.75px;
        color: #A3968C;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`
