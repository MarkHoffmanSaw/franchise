import React from "react";
import { ThemeProvider } from "styled-components";
/* TODO: 
- Подобрать цветовую палитру
- Настроить объект для двух тем

*/
const theme = {
    dark: {
        app: {
            background: "#202225",
            color: "#deebe6",
            border: "#4f545c",
            underImage: "#40444b",
            iconBackgound: "#b0ab96",
        },
        button: {
            background: "#202225",
            color: "#deebe6",
            border: "#b9bbbe",
            active: "#3ba55d",
            hoverColor: "#deebe6",
            hoverBackground: "#3ba55d",
        },
        scroll: {
            trackBackground: "grey",
            thumbBackground: "#2f3136",
            thumbBorder: "grey",
        },
        taskGradient:
            "linear-gradient(270deg,rgba(32, 34, 37, 1),rgba(32, 34, 37, 0.75), rgba(32, 34, 37, 0.5), rgba(32, 34, 37, 0.25),rgba(32, 34, 37, 0))",
    },

    light: {
        app: {
            background: "",
            color: "",
            border: "",
            underImage: "",
            iconBackgound: "",
        },
        button: {
            background: "",
            color: "",
            active: "",
            border: "",
            hoverColor: "",
            hoverBackground: "",
        },
        scroll: {
            trackBackground: "",
            thumbBackground: "",
            thumbBorder: "",
        },
        taskGradient:
            "linear-gradient(270deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0))",
    },
};

const Theme = ({ children, themeMode }) => {
    if (themeMode === "dark") {
        return <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>;
    }

    if (themeMode === "light") {
        return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
    } else return <ThemeProvider theme={theme.dark}>{children}</ThemeProvider>;
};

export default Theme;
