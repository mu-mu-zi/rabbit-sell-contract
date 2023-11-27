import styled from "styled-components";
import topBg from "../../assets/img/game/game_top_bg.png"

export const GameWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #000;
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
  }
`

export const GameTopBG = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url(${topBg}) no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 186px;

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
  font-size: 22px;
  font-weight: 700;
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

  .name {
    color: #FFF;
    font-size: 30px;
    font-weight: 500;
    max-width: 490px;
  }
  .describe {
    color: #A3968C;
    font-size: 14px;
    font-weight: 500;
    margin-top: 14px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    .flex-info {
      .left {
        display: inline-block;
        color: #A3968C;
        font-size: 16px;
        font-weight: 400;
        min-width: 145px;
      }
      .right {
        display: inline-block;
        color: #FFF;
        font-size: 16px;
        font-weight: 400;
        max-width: 300px;
      }
    }
  }
  .partner {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 12px;
    ${({ theme }) => theme.mediaWidth.sm`
      gap: 12px;

    `}
  span svg {
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
  span svg {
    ${({ theme }) => theme.mediaWidth.sm`
      width: 15px;
      height: 15px;
  `}
  }
  }
`
