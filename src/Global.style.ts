import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html body {
        margin: 0;
        min-width: 1200px;
        line-height: initial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*overflow-x: auto;*/
       /* overflow: hidden;*/
        ${({theme}) => theme.mediaWidth.sm`
           min-width: 375px;
        `}
    }
    html body,button,input,code{
        font-family: Inter Saira Condensed, Sair, PingFang SC, Microsoft YaHei, SourceHanSerifCN-Medium, robotoregular, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, Helvetica, Arial, monospace, serif;
    }
    body{
        font-size: 13px;
        letter-spacing: 0.02em;
        color: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
        outline: none;
        border: none;
    }
    .semi-modal {
        line-height: normal;
    }
    img {
        vertical-align: bottom;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    body p {
        margin-bottom: 0;
    }
    * {
    scrollbar-width: none; /* 隐藏滚动条 */
    -ms-overflow-style: none; /* 隐藏 IE 和 Edge 浏览器中的滚动条 */
  }
    /* 在 Firefox 中控制滚动条的样式 */
    *::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* 定义滚动条颜色为透明 */
  *::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* 隐藏滚动条按钮 */
  *::-webkit-scrollbar-button {
    display: none;
  }
  // -------
  ::-webkit-scrollbar-thumb {
    display: none !important;
    background-color: transparent !important;
  }

  ::-webkit-scrollbar-button {
    display: none !important;
  }

  ::-webkit-scrollbar {
    width: 0px !important;
    height: 0px !important;
  }
     /* Input type number hidden arrows (Chrome, Safari, Edge, Opera) */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
    :focus-visible {
        outline: none;
    }
  /* Input type number hidden arrows (Firefox) */
  input[type=number] {
    -moz-appearance: textfield;
  }
    
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    .ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.semi-notification-list {
    margin-top: 60px;
}
.semi-modal-content {
    background-color: transparent;
    padding: 0;
}
.loginShaBishejiAutoFill {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #383838 inset !important;
      -webkit-text-fill-color: #fff;
      align-self: center;
    }
  }
`;