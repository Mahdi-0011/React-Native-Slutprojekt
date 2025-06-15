import React from "react";
import { View, FlatList } from "react-native";
import { useFavorites } from "../FavoritesContext/FavoritesContext";
import MovieCard from "../Components/movieCard";
import Layout from "../Layout/Layout";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <Layout>
    <View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
    </Layout>
  );
};

export default FavoritesPage;
