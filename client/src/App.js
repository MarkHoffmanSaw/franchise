import { useEffect, useState } from "react";
import { getAllCards } from "./api/fetch";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route path="/" element={<Cards allFranchise={cards} />} /> */}
                    <Route index element={<div>CARDS</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
