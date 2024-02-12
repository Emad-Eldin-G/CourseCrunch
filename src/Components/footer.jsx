import logo from "../assets/logo.png";
import { Link, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";


const Footer = () => {
    const mediumScreen = window.matchMedia("(max-width: 450px)");
    const [isMobile, setIsMobile] = useState(mediumScreen.matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(mediumScreen.matches);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });



    return (
        <div className={"w-full h-14 fixed bottom-0 bg-gray-800 flex items-center justify-center p-2"}>
            {isMobile ?
                <p className={"text-white float-left mr-auto"}> © 2024 CourseCrunch <br/> Your unbiased academic partner 📚</p>
                :
                <p className={"text-white"}> © 2024 CourseCrunch | Your unbiased academic partner 📚</p>
            }
        </div>
    );
};

export default Footer;