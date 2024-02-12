import {Link, Routes, Route, useParams} from "react-router-dom";
import { useState } from "react";


const ModulePage = () => {
    const { moduleCode } = useParams();

    return (
        <div className={"w-full h-full flex items-center"}>
            <h1 className={"text-gray-700"}>{moduleCode}</h1>
        </div>
    );
};

export default ModulePage;