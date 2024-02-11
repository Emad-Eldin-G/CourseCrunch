import {useEffect, useState} from 'react'
import { motion } from "framer-motion"
import {Route, Routes} from "react-router-dom";
import FilterBar from "../Components/Filter/FilterBar.jsx";
import MobileFilter from "../Components/MobileFilter.jsx";
import star from "../assets/star.svg";
import halfstar from "../assets/halfstar.svg";

import data from "../data/TestModules.json"

function ModulesPage() {

    const [modules, setModules] = useState(data);


    const mediumScreen = window.matchMedia("(max-width: 700px)");
    const [isMobile, setIsMobile] = useState(mediumScreen.matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(mediumScreen.matches);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [mediumScreen.matches]);


    return (
        <div id={"wrapper"} className={"w-full h-full"}>
            {isMobile ? <MobileFilter /> : <FilterBar />}
            <div id={"Module-Cards"}
                 className={"w-full h-full p-10 flex flex-row flex-wrap sm:flex-col gap-10 sm:gap-5 items-center justify-center text-gray-700"}>

                    {modules.map((module) => (
                        <div key={module.id} className={"flex flex-col w-96 h-96 sm:h-auto border-grey border-2 p-5 rounded-md"}>
                            <p className={"text-3xl text-gray-700 font-bold"}>{module.moduleCode}</p>
                            <img src={module.image} alt={"moduleImage"} className={"max-w-20 max-h-20"}/>
                            <br/>
                            <hr className={"w-full"}/>
                            <br/>
                            <p className={"font-bold"}>Lecturers: <span className={"font-normal"}>{
                                module.lecturers.map((lecturer, index) => (
                                    index === module.lecturers.length - 1 ?
                                        <span key={lecturer}>{lecturer}</span> : <span key={lecturer}>{lecturer + ", "}</span>
                                ))
                            }</span></p>
                            <p className={"font-bold"}>Department: <span className={"font-normal"}>{module.department}</span></p>
                            <p className={"font-bold"}>Year of Study: <span className={"font-normal"}>{module.yearOfStudy}</span></p>
                            <p className={"font-bold"}>Updated: <span className={"font-normal"} id={"last-updated"}>{module.lastUpdated}</span></p>
                            <div className={"flex flex-row gap-2"}>
                                <img src={star} alt={"star"} className={"w-5 h-5"}/>
                                <img src={star} alt={"star"} className={"w-5 h-5"}/>
                                <img src={star} alt={"star"} className={"w-5 h-5"}/>
                                <img src={star} alt={"star"} className={"w-5 h-5"}/>
                                <img src={halfstar} alt={"half star"} className={"w-5 h-5"} />
                            </div>
                            <button className={"w-36 rounded-md p-2 bg-gray-400 mt-auto"}>Find out more</button>
                        </div>
                    ))
                    }
            </div>
        </div>
    )
}

export default ModulesPage;
