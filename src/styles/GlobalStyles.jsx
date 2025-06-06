import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
}
a {
    text-decoration: none;
    color: inherit;
}
ul {
    list-style: none;
}
img {
    max-width: 100%;
    display: block;
}
button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    outline: none;
}
`;