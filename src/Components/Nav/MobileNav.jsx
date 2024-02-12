import { Link, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";


import profileIcon from "../../assets/profileIcon.png";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
import closeX from "../../assets/closeX.svg";

const MobileNav = () => {

    const [showMenu, setShowMenu] = useState(false);

    // Check that a click outside the menu closes the menu

    return (
        <>
        <div className={"w-full h-16 flex flex-row items-center justify-between p-5 sticky"}>
            <Link to="/">
                <img src={logo} alt="logo" className={"h-10 w-10"}/>
            </Link>

            <div className={"w-8"}>
                <img src={hamburger} alt="profileIcon"
                className={"h-10 w-10"} id={"growHover"}
                onClick={() => setShowMenu(!showMenu)}
                />
            </div>
        </div>

            {showMenu ?
                <div className={"fixed w-1/2 h-full z-50 right-0 top-0 flex flex-col justify-between items-center align-middle text-center bg-black bg-opacity-20 backdrop-blur-sm"}>
                    <div className={"flex flex-row justify-end items-end ml-auto p-2"}>
                        <img alt={"close"} src={closeX} className={"w-8 h-8"} onClick={() => setShowMenu(!showMenu)}/>
                    </div>

                    <div className={"w-full basis-1/4 flex justify-center items-center"}>
                        <Link to="/">
                            <button className={"w-36 rounded-md p-2 bg-gray-400"}
                            onClick={() => setShowMenu(!showMenu)}>
                                Home
                            </button>
                        </Link>
                    </div>

                    <div className={"w-full basis-1/4 flex justify-center items-center"}>
                        <Link to="/modules">
                            <button className={"w-36 rounded-md p-2 bg-gray-400"}
                            onClick={() => setShowMenu(!showMenu)}>
                                Modules
                            </button>
                        </Link>
                    </div>

                    <div className={"w-full basis-1/4 flex justify-center items-center"}>
                        <Link to="/Lecturers">
                            <button className={"w-36 rounded-md p-2 bg-gray-400"}
                            onClick={() => setShowMenu(!showMenu)}>
                                Lecturers
                            </button>
                        </Link>
                    </div>

                    <div className={"w-full basis-1/4 flex justify-center items-center"}>
                        <Link to={"/profile"}>
                            <button className={"w-36 rounded-md p-2 bg-gray-400"}
                            onClick={() => setShowMenu(!showMenu)}>
                                Profile
                            </button>
                        </Link>
                    </div>
                </div>
                :
                null
            }

        </>
    );
}

export default MobileNav;