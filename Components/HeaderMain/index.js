import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function HeaderMain({ handleText, handleButton }) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      width: "100%",
    },
    subContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    search: {
      color: "#fff",
      fontWeight: 400,
      border: "none",
      backgroundColor: "transparent",
      fontSize: 22,
    },
    button: {
      backgroundColor: "#383b43",
      width: 40,
      height: 40,
      borderRadius: "100%",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      color: "#65666c",
      fontWeight: 500,
    },
    textButton: {
      color: "#fff",
    },
  });
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>You are looking for...</Text>
      <View style={styles.subContainer}>
        <TextInput
          onChangeText={handleText}
          style={styles.search}
          placeholder="Nothing"
          onKeyPress={handleKeyPress}
        />
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Feather name="search" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
