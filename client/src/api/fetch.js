const URL = "http://127.0.0.1:5000/api/v1/cards";

export const getAllCards = async () => {
    try {
        const data = await fetch(URL, { method: "GET" }); //json
        const result = await data.json(); // []

        return result.data;
    } catch (error) {
        console.error(error);
    }
};
