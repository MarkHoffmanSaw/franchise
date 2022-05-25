import { useEffect, useState } from "react";
import { getAllCards } from "./api/fetch";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Layout } from "./components/Layout";

const App = () => {
    const [cards, setCards] = useState([]);
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const getData = async () => {
            {
                try {
                    const data = await getAllCards();
                    setCards(data);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        getData();
    }, []);

    return (
        <Theme themeMode={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* <Route path="/" element={<Cards allFranchise={cards} />} /> */}
                        <Route index element={<div>CARDS</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Theme>
    );
};

export default App;
