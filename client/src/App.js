import { useEffect, useState } from "react";
import { getAllCards } from "./api/fetch";

const App = () => {
    const [cards, setCards] = useState([]);
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
        <div>
            {cards.map((card) => {
                return (
                    <h2
                        key={card.title}
                        style={{ border: "1px solid #000", padding: "5px" }}
                    >
                        {card.title}
                    </h2>
                );
            })}
        </div>
    );
};

export default App;
