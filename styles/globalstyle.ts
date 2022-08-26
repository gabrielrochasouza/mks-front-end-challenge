import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color: var(--bg-pri-color);
        color: var(--tx-color);
    }
    h1 ,h2 ,h3 ,p,span{
        color: var(--tx-color);
        font-family: 'Montserrat', sans-serif;
    }
    figcaption{
        display: none;
    }
    button{
        border: 0;
        outline: 0;
    }
    @keyframes scaleUp {
        from{
            opacity: 0;
            transform: scale(0);
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    }
    :root{
        --blue:#0F52BA;
        --grey:#373737;
        --white:#fff;
        --black:#000;
        --tx-color:#2C2C2C;
        --bg-pri-color:#f9f9f9;
        --bg-sec-color:#EEEEEE;
    }
`;
