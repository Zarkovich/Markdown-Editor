import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root{
        color-scheme: light dark;
    }

    table, th, td{
        border: 1px solid;
    }

    li{
        margin-left: 25px;
    }

    code{
        font-family: 'Fira Code', monospace;
        color: crimson;
        padding: 2px;
        font-size: 105%;
    }

    pre{
        background-color: rgba(0,0,0,0.15);
    }

    img{
        max-width: 500px;
        max-height: 500px;
    }

`;
