import React, { createContext, useState, useEffect } from "react";
import { games as initialGames } from "../data/gameData";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Load from local storage or fall back to initial data
        const storedGames = localStorage.getItem("samosa_games");
        if (storedGames) {
            setGames(JSON.parse(storedGames));
        } else {
            setGames(initialGames);
        }
    }, []);

    useEffect(() => {
        // Save to local storage whenever games change
        if (games.length > 0) {
            localStorage.setItem("samosa_games", JSON.stringify(games));
        }
    }, [games]);

    const addGame = (newGame) => {
        setGames((prev) => [...prev, newGame]);
    };

    const updateGame = (updatedGame, index) => {
        setGames((prev) => {
            const newGames = [...prev];
            newGames[index] = updatedGame;
            return newGames;
        });
    };

    const deleteGame = (index) => {
        setGames((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <GameContext.Provider value={{ games, addGame, updateGame, deleteGame }}>
            {children}
        </GameContext.Provider>
    );
};
