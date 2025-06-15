import React, { createContext, useContext, useState, ReactNode } from "react";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

type FavoritesContextType = {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) =>
      prev.find((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some((m) => m.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("FavoritesContext is missing");
  return context;
};
