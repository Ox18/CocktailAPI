import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import Item from "../../Components/Item";
import HeaderMain from "../../Components/HeaderMain";
import { getDrink } from "../../Services/data";

export default function App({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const handleText = (a) => setNameSearch(a);

  const handleButton = async () => {
    setCocktails([]);
    const response = await getDrink(nameSearch);
    setCocktails(response);
  };
  useEffect(() => {
    let r = true;
    return () => {
      r = false;
    };
  }, [handleButton]);
  return (
    <View style={styles.container}>
      <HeaderMain handleText={handleText} handleButton={handleButton} />
      <View style={styles.containerList}>
        <Text style={styles.textList}>List of drinks</Text>
        <View style={styles.barList} />
      </View>
      {cocktails.map((drink) => {
        const { idDrink, strDrink, strCategory, strAlcoholic, strDrinkThumb } =
          drink;
        return (
          <Item
            onClick={() => {
              navigation.navigate("Drink", {
                drink: drink,
              });
            }}
            key={idDrink}
            name={strDrink}
            category={strCategory}
            tag={strAlcoholic}
            url={strDrinkThumb}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1e2026",
    alignItems: "start",
    justifyContent: "start",
    gap: 14,
  },
  containerList: {
    marginTop: 10,
    marginBottom: 10,
    width: "auto"
  },
  barList: {
    backgroundColor: "#5d00ff",
    width: "100%",
    height: 5
  },
  textList: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 600,
    letterSpacing: 2
  }
});
