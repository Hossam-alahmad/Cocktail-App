import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar" style={{ backgroundColor: "#DDD" }}>
            <div className="container">
                <div className="content w-100 d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a
                            href="/"
                            className="text-decoration-none fs-1 text-success"
                        >
                            <span>Panda</span>
                        </a>
                    </div>
                    <div className="nav">
                        <ul className=" fs-4 d-flex list-unstyled justify-content-between m-0 p-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className="text-decoration-none"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className="text-decoration-none me-4"
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
