import logo from "../assets/logo.png";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";


const Error = () => {

    return (
        <div className={"absolute top-0 w-full h-full z-0 flex flex-col items-center justify-center"}>
                <p className={"font-bold text-gray-700 text-7xl md:text-6xl"}>
                    Error 404
                </p>

                <p className={"font-bold text-gray-700 text-4xl md:text-3xl"}>
                    Page Not Found
                </p>
        </div>
    );
};

export default Error;