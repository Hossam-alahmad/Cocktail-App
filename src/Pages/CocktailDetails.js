import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailInfo from "../Components/CocktailInfo";

const CocktailDetails = () => {
    const { cocktailId } = useParams();
    const [cocktail, setCocktail] = useState({});
    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
            );
            const { drinks: drink } = await response.json();
            console.log(...drink);
            setCocktail(...drink);
        } catch (error) {
            setCocktail();
        }
    };
    useEffect(() => {
        fetchData();
    }, [cocktailId]);
    return (
        <div className="cocktailDetails pt-4 pb-4">
            <div className="container">
                <h2 className="mb-4">Cocktail Details</h2>
                {cocktail ? (
                    <div className="cocktail mt-2 mb-2 rounded ">
                        <div
                            className="d-flex w-75 m-auto"
                            style={{ backgroundColor: "#eee" }}
                        >
                            <div>
                                <div className="img-box">
                                    <img
                                        src={cocktail.strDrinkThumb}
                                        alt={cocktail.strDrinkThumb}
                                        className="w-100"
                                    />
                                </div>
                            </div>
                            <div className="text-end p-4">
                                <h3 className="title">{cocktail.strDrink}</h3>

                                <CocktailInfo
                                    className="category"
                                    title="Category"
                                    info={cocktail.strCategory}
                                />
                                <CocktailInfo
                                    className="glass"
                                    title="Glass"
                                    info={cocktail.strGlass}
                                />
                                <CocktailInfo
                                    className="gradient"
                                    title="Gradient1"
                                    info={cocktail.strIngredient1}
                                />
                                <CocktailInfo
                                    className="gradient"
                                    title="Gradient2"
                                    info={cocktail.strIngredient2}
                                />
                                {cocktail.strIngredient3 && (
                                    <CocktailInfo
                                        className="gradient"
                                        title="Gradient3"
                                        info={cocktail.strIngredient3}
                                    />
                                )}
                                <div className="description">
                                    <p>
                                        <span className="bg-success text-white p-1 ms-2 rounded d-inline-block">
                                            Description:
                                        </span>
                                        {cocktail.strInstructionsIT}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="alert-danger p-2">
                        <h4 className="m-0">Oops! This product not found...</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CocktailDetails;
