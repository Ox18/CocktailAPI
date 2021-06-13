import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ItemImage({ url }) {
  const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 260,
    },
    background: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
  });
  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "rgba(2,0,36,0)",
            "rgba(10,10,10,0.1)",
            "rgba(14,14,14,0.9)",
          ]}
          style={styles.background}
        />
      </View>
    </>
  );
}
export default function app({ route, navigation }) {
  const { drink } = route.params;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#292e3c",
      height: "100%",
    },
    name: {
      fontSize: 25,
      color: "#fff",
      fontWeight: 500,
      letterSpacing: 2,
    },
    content: {
      padding: 20,
      gap: 14
    },
    label: {
      color: "#fff"
    }
  });
  console.log(drink);
  const getIngredients = () => {
    return Object.entries(drink)
      .filter((a) => a[0].includes("strIngredient") && a[1] != null)
      .map((a) => a[1])
      .join(", ");
  };
  return (
    <View style={styles.container}>
      <ItemImage url={drink.strDrinkThumb} />
      <View style={styles.content}>
        <Text style={styles.name}>{drink.strDrink}</Text>
        <Text style={styles.label}>Ingredients: {getIngredients()}</Text>
        <Text style={styles.label}>Instructions: {drink.strInstructions}</Text>
      </View>
    </View>
  );
}
