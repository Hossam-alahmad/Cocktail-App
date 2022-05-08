import React, { useState, useEffect, useContext } from "react";

const CocktailContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [cocktails, setCocktails] = useState([]);
    const [query, setQuery] = useState("");
    const [customCocktail, setCustomCocktail] = useState("");
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
            );
            const { drinks: data } = await response.json();
            setCocktails(data);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            setCocktails([]);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [query]);
    return (
        <CocktailContext.Provider
            value={{ cocktails, loading, query, setQuery, setCustomCocktail }}
        >
            {children}
        </CocktailContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(CocktailContext);
};
