import React from "react";
import { Link } from "react-router-dom";
import CocktailInfo from "./CocktailInfo";

const Cocktail = ({
    idDrink,
    strDrinkThumb,
    strDrink,
    strCategory,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
}) => {
    return (
        <div className="col-12 col-md-6">
            <Link
                to={`cocktail-details/${idDrink}`}
                className="text-decoration-none text-dark"
            >
                <div className="cocktail mt-2 mb-2 rounded ">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="img-box">
                                <img
                                    loading="lazy"
                                    src={strDrinkThumb}
                                    alt={strDrinkThumb}
                                    className="w-100"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-5 text-end">
                            <h3 className="title">{strDrink}</h3>
                            <CocktailInfo
                                className="category"
                                title="Category"
                                info={strCategory}
                            />
                            <CocktailInfo
                                className="glass"
                                title="Glass"
                                info={strGlass}
                            />
                            <CocktailInfo
                                className="gradient"
                                title="Gradient1"
                                info={strIngredient1}
                            />
                            <CocktailInfo
                                className="gradient"
                                title="Gradient2"
                                info={strIngredient2}
                            />
                            {strIngredient3 && (
                                <CocktailInfo
                                    className="gradient"
                                    title="Gradient3"
                                    info={strIngredient3}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cocktail;
