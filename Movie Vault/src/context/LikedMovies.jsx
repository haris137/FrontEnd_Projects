import { useContext, useState, useEffect, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const storedFavs = localStorage.getItem("favourites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addFav = (movie) => {
        setFavourites((prev) => [...prev, movie]);
        console.log("Updated Favourites (add):", favourites);
    };

    const removeFav = (movieID) => {
        setFavourites((prev) => prev.filter((m) => m.id !== movieID));
    };

    const isFav = (movieID) => {
        return favourites.some((m) => m.id === movieID);
    };

    const value = {
        favourites,
        addFav,
        removeFav,
        isFav,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};