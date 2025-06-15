import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../FavoritesContext/FavoritesContext";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(movie)} style={styles.heartButton}>
        <Ionicons
          name={isFavorite(movie.id) ? "heart" : "heart-outline"}
          size={24}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 15,
  },
  overview: {
    fontSize: 12,
    color: "#444",
  },
  heartButton: {
    padding: 10,
    marginBottom: 90,
    marginRight: 10,
  },
});

export default MovieCard;
