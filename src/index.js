import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { ThemeProvider } from "styled-components";
import ResetStyle from "./GlobalStyle/resetStyle.js";
import GlobalStyle from "./GlobalStyle/GlobalStyle.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const theme = {
    colors: {
        primary_Dark: "#1c1c1c",
        primary_Grey: "#404040",
        primary_Lightgrey: "#A6A6A6",
        primary_White: "#f2f2f2",
        highLight: "#F2B705",
        Error: "#aa0000",
    },
};

createRoot(document.querySelector("#root")).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>
);
