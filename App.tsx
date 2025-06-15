/** @format */
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import { StatusBar } from "react-native";
import { FavoritesProvider } from "./FavoritesContext/FavoritesContext";

export default function App() {
  return (
    <>
    <FavoritesProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar barStyle="default" />
    </FavoritesProvider>
    </>
  );
}
