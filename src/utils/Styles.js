import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    h1 {
        font-family: Helvetica;
        font-weight: 900;
        font-style: normal;
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    h2 {
        font-family: Helvetica;
        font-weight: 900;
        font-style: normal;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    h3 {
        font-family: Helvetica;
        font-weight: 900;
        font-style: normal;
        font-size: 0.75rem;
        margin: 0;
        text-transform: uppercase;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }

    a:hover {
        text-decoration: underline;
    }
`

export const Theme = {
    black: "#000000",
    white: "#FFFFFF",
    darkgray: "#6D6D6D",
    lightgray: "#B4B4B4",
    cream: "#FCFBF7",
    babyBlue: "#B5E0F7",
}