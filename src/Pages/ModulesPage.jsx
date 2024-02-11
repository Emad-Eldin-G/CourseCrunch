import {useEffect, useState} from 'react'
import { motion } from "framer-motion"
import {Route, Routes} from "react-router-dom";
import FilterBar from "../Components/FilterBar.jsx";
import MobileFilter from "../Components/MobileFilter.jsx";
import star from "../assets/star.svg";
import halfstar from "../assets/halfstar.svg";

function ModulesPage() {

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

                <div className={"flex flex-col w-96 h-96 sm:h-auto border-grey border-2 p-5 rounded-md"}>
                    <p className={"text-3xl text-gray-700 font-bold"}>CO1107</p>
                    <img src={"https://via.placeholder.com/150"} alt={"moduleImage"} className={"max-w-20 max-h-20"}/>
                    <br/>
                    <hr className={"w-full"}/>
                    <br/>
                    <p className={"font-bold"}>Lecturers: <span className={"font-normal"}>John Doe, Emily Smith</span></p>
                    <p className={"font-bold"}>Department: <span className={"font-normal"}>Computing and Mathematical Sciences</span></p>
                    <p className={"font-bold"}>Year of Study: <span className={"font-normal"}>1</span></p>
                    <div className={"flex flex-row gap-2"}>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={halfstar} alt={"half star"} className={"w-5 h-5"} />
                    </div>
                    <button className={"w-36 rounded-md p-2 bg-gray-400 mt-auto"}>Find out more</button>
                </div>

                <div className={"flex flex-col w-96 h-96 border-grey border-2 p-5 rounded-md"}>
                    <p className={"text-3xl text-gray-700 font-bold"}>BFC101</p>
                    <img src={"https://via.placeholder.com/150"} alt={"moduleImage"} className={"max-w-20 max-h-20"}/>
                    <br/>
                    <hr className={"w-full"}/>
                    <br/>
                    <p className={"font-bold"}>Lecturers: <span
                        className={"font-normal"}>Richard Edwards, Samantha Gray</span></p>
                    <p className={"font-bold"}>Department: <span className={"font-normal"}>Computing and Mathematical Sciences</span>
                    </p>
                    <p className={"font-bold"}>Year of Study: <span className={"font-normal"}>1</span></p>
                    <div className={"flex flex-row gap-2"}>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={halfstar} alt={"half star"} className={"w-5 h-5"}/>
                    </div>
                    <button className={"w-36 rounded-md p-2 bg-gray-400 mt-auto"}>Find out more</button>
                </div>

                <div className={"flex flex-col w-96 h-96 border-grey border-2 p-5 rounded-md"}>
                    <p className={"text-3xl text-gray-700 font-bold"}>PF002</p>
                    <img src={"https://via.placeholder.com/150"} alt={"moduleImage"} className={"max-w-20 max-h-20"}/>
                    <br/>
                    <hr className={"w-full"}/>
                    <br/>
                    <p className={"font-bold"}>Lecturers: <span className={"font-normal"}>Emilia Stone, Yung Si</span>
                    </p>
                    <p className={"font-bold"}>Department: <span className={"font-normal"}>Computing and Mathematical Sciences</span>
                    </p>
                    <p className={"font-bold"}>Year of Study: <span className={"font-normal"}>1</span></p>
                    <div className={"flex flex-row gap-2"}>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                        <img src={star} alt={"star"} className={"w-5 h-5"}/>
                    </div>
                    <button className={"w-36 rounded-md p-2 bg-gray-400 mt-auto"}>Find out more</button>
                </div>

            </div>
        </div>
    )
}

export default ModulesPage;
