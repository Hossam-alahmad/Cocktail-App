import React from "react";

const CocktailInfo = ({ className, title, info }) => {
    return (
        <div className={`${className} mb-2`}>
            <span className="bg-success text-white p-1 ms-2 rounded d-inline-block">
                {title}:
            </span>
            <span>{info}</span>
        </div>
    );
};

export default CocktailInfo;
