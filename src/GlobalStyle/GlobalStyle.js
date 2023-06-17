import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html,body{
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        background-color:${(props) => props.theme.colors.primary_primary_White};
        color:${(props) => props.theme.colors.primary_Dark};
        margin:10px;
    }
`;
export default GlobalStyle;
