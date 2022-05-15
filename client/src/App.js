import { useEffect, useState } from "react";
import { getAllCards } from "./api/fetch";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cards from "./components/page/Cards";
import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";

const App = () => {
    const [cards, setCards] = useState([]);
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const getData = async () => {
            {
                try {
                    const data = await getAllCards();
                    console.log(data);
                    setCards(data);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        getData();
    }, []);
    // cards.map((card) => {
    return (
        <Theme themeMode={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Cards allFranchise={cards} />} />
                    {/* <Route
                path="/catalog/:id"
                element={
                    <Catalog
                        folders={this.state.folders}
                        images={this.state.images}
                    />
                }
            /> */}
                </Routes>
            </BrowserRouter>
        </Theme>
    );
};

export default App;
