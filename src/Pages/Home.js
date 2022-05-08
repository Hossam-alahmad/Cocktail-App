import React, { useState } from "react";
import Cocktail from "../Components/Cocktail";
import Loading from "../Components/Loading";

import { useGlobalContext } from "../Hooks/Context";

const Home = () => {
    const { cocktails, loading, query, setQuery } = useGlobalContext();

    console.log(cocktails);
    const checkLoading = () => {
        if (loading) {
            return <Loading />;
        }
        if (cocktails === null) {
            return (
                <p className="mt-5 alert-danger p-2 fs-4">
                    Oops!... Not found any cocktail
                </p>
            );
        }

        return (
            <div className="list row mt-4 justify-content-center">
                {cocktails.map(cocktail => (
                    <Cocktail key={cocktail.idDrink} {...cocktail} />
                ))}
            </div>
        );
    };

    return (
        <div className="home p-4">
            <div className="container">
                <div className="form">
                    <form className="w-50 m-auto d-flex align-items-center">
                        <label htmlFor="cocktail" className="d-block w-25 fs-4">
                            Search Cocktail
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="cocktail"
                            id="cocktail"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </form>
                    {checkLoading()}
                </div>
            </div>
        </div>
    );
};

export default Home;
