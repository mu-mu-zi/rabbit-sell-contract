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
        font-family: Saira Condensed, Sair, PingFang SC, Microsoft YaHei, SourceHanSerifCN-Medium, robotoregular, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, Helvetica, Arial, monospace, serif;
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
    
     /* Input type number hidden arrows (Chrome, Safari, Edge, Opera) */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    
   
    /* @media screen and (max-width: 900px){
        html body{
            min-width: 375px;
            width: 100%;
        }
        .borderRadius{
            border-radius: 8px;
        }
        .font12 {
            font-size: 10px;
        }
    
        .font14 {
            font-size: 12px;
        }
    } */
`;