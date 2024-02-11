import logo from "../../assets/logo.png";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import profileIcon from "../../assets/profileIcon.png";

const NavBar = () => {

    return (
        <div className={"sticky top-0 z-50"}>
            <ul className={"w-full h-24 inline-flex list-none p-5 items-center mb-10"}>
                <li className={"text-gray-700"}>
                    <img src={logo} alt="logo" className={"h-10 w-10 hover:animate-pulse"}/>
                </li>

                <div
                    className={"flex flex-row ml-auto align-middle items-center w-1/2 lg:w-full justify-end gap-10"}>
                    <li className={"text-gray-700 font-bold"}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className={"text-gray-700 font-bold"}>
                        <Link to="/modules">Modules</Link>
                    </li>

                    <li className={"text-gray-700 font-bold"}>
                        <Link to="/Lecturers">Lecturers</Link>
                    </li>

                    <li className={"text-gray-700 font-bold"}>

                    </li>

                </div>

                <div className={"flex flex-row align-middle items-center"}>
                    <li className={"h-full"}>
                        <div className={"w-8"}>
                            <Link to={"/profile"}>
                                <img src={profileIcon} alt="profileIcon" className={"w-auto h-full"} id={"growHover"}/>
                            </Link>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
);
};

export default NavBar;