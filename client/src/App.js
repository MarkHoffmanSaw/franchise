import { useEffect, useState } from "react";
import { getAllCards } from "./api/fetch";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Cards from "./components/Cards/Cards";
import FranchiseDescription from "./components/FranchiseDescription/FranchiseDescription";

function App() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllCards();
                setCards(data);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Cards allFranchise={cards} />} />
                    <Route path=":id" element={<FranchiseDescription />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
