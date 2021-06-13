import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import MainScreen from "./Screen/Main";
import DrinkScreen from "./Screen/Drink";
import LoadingScreen from "./Screen/Loading";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={MainScreen}
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#5d00ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Drink"
        component={DrinkScreen}
        options={{
          title: "Detail",
          headerStyle: {
            backgroundColor: "#5d00ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
