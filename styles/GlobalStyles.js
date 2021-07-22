import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        --header-height: 20px;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', sans-serif;
        background-color: #38413f;
        color: #ffffff;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: 'Roboto', sans-serif;
    }

    h1,
    h2 {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.5;
        letter-spacing: .75px;
        margin-top: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    img {
        position: static;
    }
    Section, section { margin-bottom: 150px };
`;
