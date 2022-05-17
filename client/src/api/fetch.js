const URL = "http://127.0.0.1:5000/api/v1";

export const getAllCards = async () => {
  try {
    const data = await fetch(`${URL}/cards`, { method: "GET" }); // json
    const result = await data.json(); // []
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCard = async (id) => {
  try {
    const data = await fetch(`${URL}/cards/:${id}`, { method: "GET" });
    const result = await data.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async () => {
  try {
    const data = await fetch(`${URL}/cards/category-stats`, { method: "GET" });
    const result = await data.json();
    return result.data; // [ { category: "name", numsCards: 100 }, {}, {} ]
  } catch (error) {
    console.log(error);
  }
};

export const getCardsByCategory = async (category) => {
  try {
    const data = await fetch(`${URL}/cards/category/${category}`, {
      method: "GET",
    });
    const result = await data.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
