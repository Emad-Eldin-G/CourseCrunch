import {useEffect, useState} from 'react'
import {Link, Route, Routes} from "react-router-dom";
import FilterBarLec from "../Components/Filter/FilterBarLec.jsx";
import MobileFilterLec from "../Components/Filter/MobileFilterLec.jsx";
import star from "../assets/star.svg";
import halfstar from "../assets/halfstar.svg";
import JohnDoe from "../assets/Lecturers/John Doe.jpg";
import EmilySmith from "../assets/Lecturers/Emily Smith.jpg";
import YungSi from "../assets/Lecturers/Yung Si.jpeg";

import data from "../data/Lecturers.json"

function ModulesPage() {

    const [lecturers, setLecturers] = useState(data);


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
            {isMobile ? <MobileFilterLec /> : <FilterBarLec />}
            <div id={"Module-Cards"}
                 className={"w-full h-full p-10 mb-24 flex flex-row flex-wrap sm:flex-col gap-10 sm:gap-5 items-center justify-center text-gray-700"}>

                {lecturers.map((data, index) => (
                    <div id={"data"} key={index} className={"flex flex-col w-96 min-h-[755px] border-grey border-2 p-5 rounded-md"}>
                        <p className={"text-3xl text-gray-700 font-bold mb-5 select-none"}>{data.name}</p>
                        <img src={eval(data.name.replace(" ", ""))} alt={"dataImage"} className={"w-72 h-72 aspect-video rounded-md"}/>
                        <br/>

                        <hr className={"w-full"}/>
                        <br/>


                        <p className={"font-bold"}>Department: <span className={"font-normal"}>{data.department}</span></p>
                        <p className={"font-bold"}>Modules:
                            {data.modules.map((module, index) => (
                                <span key={index} className={"font-normal"}> {module}</span>
                            ))
                            }
                        </p>
                        <p className={"font-bold"}>Experience: <span className={"font-normal"} id={"last-updated"}>{data.experience} years</span></p>

                        <div className={"flex flex-row gap-2 mb-3 mt-2"}>
                            {/* Render stars based on rating, so 3.5 would render 3 stars and 1 halfstar */}
                            {data.rating.map((rating, index) => (
                                <img key={index} src={rating === 0.5 ? halfstar : star} alt={"star"} className={"w-6 h-6"}/>
                            ))
                            }
                        </div>

                        <Link to={`/datas/${data.title}`} className={"bottom-0 mt-auto"}>
                            <button className={"w-36 rounded-md p-2 bg-gray-400 mt-auto"} id={"growHover"}>Find out more</button>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ModulesPage;
