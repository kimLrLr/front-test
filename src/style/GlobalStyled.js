import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const deviceSize = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
    }

    ul, li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #333;
    }

    body{
        letter-spacing: -1px;
        word-break: keep-all;
    }

`;
