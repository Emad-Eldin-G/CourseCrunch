import logo from "../assets/logo.png";
import { Link, Routes, Route } from "react-router-dom";
import profileIcon from "../assets/profileIcon.png";
import hamburger from "../assets/hamburger.png";
import {useEffect, useState} from "react";


const MobileNav = () => {

    const [showMenu, setShowMenu] = useState(false);

    // Check that a click outside the menu closes the menu

    return (
        <>
        <div className={"w-full h-16 flex flex-row items-center justify-between p-5 sticky"}>
            <Link to="/">
                <img src={logo} alt="logo" className={"h-10 w-10 hover:animate-pulse"}/>
            </Link>

            <div className={"w-8"}>
                <img src={hamburger} alt="profileIcon"
                className={"h-10 w-10"} id={"growHover"}
                onClick={() => setShowMenu(!showMenu)}
                />
            </div>
        </div>

            {showMenu ?
                <div className={"absolute w-10/12 h-full right-0 top-0 flex flex-col justify-between items-center align-middle text-center bg-black bg-opacity-75 backdrop-blur-sm"}>
                    <div className={"w-full hover:bg-opacity-80"}>
                        Home
                    </div>

                    <div>
                        Modules
                    </div>

                    <div>
                        Lecturers
                    </div>

                    <div>
                        Search
                    </div>
                </div>
                :
                null
            }

        </>
    );
}

export default MobileNav;