import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Fonts */
    @font-face {
    font-family: "Wotfard";
    src: url("/fonts/wotfard-regular.woff2");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    }

    /* Root Variables */
    html {
        --header-height: 20px;
    }
    
    /* Page Defaults */
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Wotfard', sans-serif;
        background-color: #38413f;
        color: #ffffff;
    }

    /* Typography */
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-family: 'Roboto', sans-serif;
        margin-top: 0;
    }

    h1,
    h2 {
        font-weight: 700;
    }

    h1 {
        font-size: 2.25rem;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 2rem;
        color: #48F9CA;
        letter-spacing: 1px;
        margin-bottom: 20px;
        margin-top: 0;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
        margin-top: 0;
        letter-spacing: 0;
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

    /* Bottom Paddings */
    Section,
    section { 
        margin-bottom: 150px; 
    }

    main { padding-bottom: 150px; }

    /* Breakpoints - Tablet */
    @media (min-width: 768px) and (max-width: 991.98px) {
        h1,
        h2 {
            font-size: 2.5rem;
        }
        p { font-size: 1.125rem; }
    }

    @media (min-width: 992px) {
        Section, section {
            margin-bottom: 100px;
        }
    }
`;
