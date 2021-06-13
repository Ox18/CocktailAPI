import instance from "../api";

export const getDrink = async (nameSearch) => {
  try {
    const response = await instance.get(`search.php?s=${nameSearch}`);
    const data = await response.data;
    let send = [];
    if(data.drinks !== null){
      send = data.drinks;
    }
    return send;
  } catch (ex) {
    console.log(ex);
    return [];
  }
};
