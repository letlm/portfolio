import { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

const backgroundTransaction = keyframes`
    0% {
            background-position: 0% 80%;
    }
    50% {
            background-position: 80% 100%;
    }
    100% {
            background-position: 0% 90%;
    }
`;

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --cream: #F6E7D8;
        --pink-1:  #F1D1D0;
        --pink-2: #FBACCC;
        --pink-3: #F875AA;
        --black: #000000;
        --white: #FFFFFF;
    }

    body {
        height: 100vh;
        width: 100%;
        //background: linear-gradient(-45deg, #F6E7D8, #F68989, #C65D7B, #874356);
        //background-size: 400% 400%;
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-family: 'Karma', serif;
        background-color: var(--cream);
        //animation: ${backgroundTransaction} 10s ease-in-out infinite;
    }


    body, input, button{
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    li{
        list-style:none
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;
