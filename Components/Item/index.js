import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

function ItemName({ label }) {
  const styles = StyleSheet.create({
    Text: {
      whiteSpace: "nowrap",
      width: "90%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#fff",
      letterSpacing: 1,
      fontWeight: 400,
    },
  });
  return <Text style={styles.Text}>{label}</Text>;
}
function ItemCategory({ label }) {
  const styles = StyleSheet.create({
    Text: {
      fontSize: 14,
      color: "#656565",
      fontWeight: 500,
    },
  });
  return <Text style={styles.Text}>{label}</Text>;
}
function ItemTag({ label }) {
  const styles = StyleSheet.create({
    Text: {
      color: "#fff",
      backgroundColor: "#5d00ff",
      fontWeight: 500,
      textAlign: "center",
      marginTop: 10,
      width: 100,
      height: "auto",
      padding: 3,
      borderRadius: 7,
    },
  });
  return <Text style={styles.Text}>{label}</Text>;
}
function ItemImage({ url }) {
  const styles = StyleSheet.create({
    image: {
      width: 80,
      height: 80,
      borderRadius: "100%",
      objectFit: "cover",
      objectPosition: "50% 50%",
    },
  });
  return (
    <Image
      style={styles.image}
      source={{
        uri: url,
      }}
    />
  );
}
export default function Item({ name, category, tag, url, onClick }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#292e3c",
      width: "100%",
      height: 110,
      borderRadius: 15,
      padding: 15,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "flex-start",
    },
  });
  return (
    <View style={styles.container} onClick={onClick}>
      <ItemImage url={url} />
      <View>
        <ItemName label={name} />
        <ItemCategory label={category} />
        <ItemTag label={tag} />
      </View>
    </View>
  );
}
