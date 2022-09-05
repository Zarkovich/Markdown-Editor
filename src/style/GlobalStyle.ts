import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
`;
