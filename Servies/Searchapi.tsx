import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import MovieCard from '../Components/movieCard';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y2YWQ4MzNjNzI3NDY2YzFkNjFmMTBlMWRjMjI4NiIsIm5iZiI6MTc0OTQ1NzI1MS4xNDEsInN1YiI6IjY4NDY5OTYzN2ExZGI5YzIxYTI5MmY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CScodTpFvqDa3fYtsw6uoZ3gUXytmgbSRhKDtAUjUno';

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async () => {
    const name = query.trim();
    if (name === '') return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(name)}&language=en-US`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const json = await res.json();

      if (!Array.isArray(json.results)) {
        setError('No valid data');
        setMovies([]);
      } else {
        setMovies(json.results);
      }
    } catch {
      setError('Fetch error - please try again later.');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const MovieItem = ({ item }: { item: Movie }) => (
    <MovieCard movie={{ ...item, poster_path: item.poster_path ?? '' }} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={search}
        placeholder="Search movies"
        style={styles.input}
      />

      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
      {error && <Text style={styles.error}>{error}</Text>}
      {!loading && movies.length === 0 && query !== '' && !error && (
        <Text style={styles.error}>No results</Text>
      )}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={MovieItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  error: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});
