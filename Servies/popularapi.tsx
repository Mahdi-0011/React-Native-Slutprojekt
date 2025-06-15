/** @format */

import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Alert } from "react-native"
import MovieCard from "../Components/movieCard"; 

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y2YWQ4MzNjNzI3NDY2YzFkNjFmMTBlMWRjMjI4NiIsIm5iZiI6MTc0OTQ1NzI1MS4xNDEsInN1YiI6IjY4NDY5OTYzN2ExZGI5YzIxYTI5MmY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CScodTpFvqDa3fYtsw6uoZ3gUXytmgbSRhKDtAUjUno",
            },
          }
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        Alert.alert("Fetch Error", "Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };

    getPopularMovies();
  }, []);

  if (loading) {
    return <ActivityIndicator size='large' style={{ marginTop: 50 }} />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
    />
  );
};

export default MovieList;
