import styled from "styled-components";
import topBg from "../../assets/img/game/game_top_bg.png"

export const GameWrap = styled.div`
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
  margin-top: 20px;
  .paginate {
    margin-top: 20px;
    ${({ theme }) => theme.mediaWidth.sm`
      margin-top: 10px;
    `}
  }
  ${({ theme }) => theme.mediaWidth.sm`

    max-width: 375px;
    overflow: auto;
  `}
`

export const GameTopBG = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${topBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 186px;
  ${({ theme }) => theme.mediaWidth.sm`
  min-height: 106px;
  `}
`

export const Title = styled.div`
  color: #FFF;
  font-size: 45px;
  font-weight: 800;
  margin-bottom: 28px;
  & span {
    color: #FF9231;
  }
  ${({ theme }) => theme.mediaWidth.sm`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 17px;
  `}
`

export const CardDetails = styled.div`
  display: grid;
  grid-template-columns: 645px 512px;
  border-radius: 16px;
  background: #161616;
  gap: 22px;
  padding: 20px;
  margin-bottom: 20px;
  .img_bg {
    position: relative;
    width: 645px;
    height: 476px;
    ${({ theme }) => theme.mediaWidth.sm`
      width: 345px;
      height: 120px;
    `}
    .sign {
      position: absolute;
      top: 32px;
      left: 0;
      ${({ theme }) => theme.mediaWidth.sm`
        top: 10px;
      `}
    }
  }
  ${({ theme }) => theme.mediaWidth.sm`
    grid-template-columns: none;
    grid-template-rows: 120px 1fr;
    padding: 10px 5px;
    border-radius: 8px;
    gap: 8px;
    margin: 0 10px;
    margin-bottom: 10px;
  `}

  .name {
    color: #FFF;
    font-size: 30px;
    font-weight: 500;
    max-width: 490px;
    ${({ theme }) => theme.mediaWidth.sm`
      font-size: 15px;
      max-width: 250px;
    `}
  }
  .describe {
    color: #A3968C;
    font-size: 14px;
    font-weight: 500;
    margin-top: 14px;
    ${({ theme }) => theme.mediaWidth.sm`
      font-size: 10px;
      font-weight: 500;
      margin-top: 7px;
    `}
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 5px;
      margin-top: 14px;
    `}
    .flex-info {
      .left {
        display: inline-block;
        color: #A3968C;
        font-size: 16px;
        font-weight: 400;
        min-width: 145px;
        ${({ theme }) => theme.mediaWidth.sm`
          min-width: 80px;
          font-size: 11px;
        `}
      }
      .right {
        display: inline-block;
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
        max-width: 300px;
        ${({ theme }) => theme.mediaWidth.sm`
          font-size: 11px;
        `}
      }
    }
  }
  .partner {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 12px;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 17px;
    `}
  span, svg {
    ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 15px;
  `}
  }
  }
  .sign {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 24px;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 12px;
    `}
  span,svg {
    ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 15px;
  `}
  }
  }
`
