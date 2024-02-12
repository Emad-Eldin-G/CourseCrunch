import { useState } from 'react'
import {Route, Routes} from "react-router-dom";

import increase from "../assets/upArrow.png"
import decrease from "../assets/downArrow.png"

import activity from "../data/Activity.json"


function ActivityPage() {
    const [moduleRating, setModuleRating] = useState(0)

    return (
        <div id={"wrapper"} className={"w-full h-full flex items-center justify-center"}>
            <div className={"pl-5 pr-5 flex flex-col gap-10 items-center mb-44"}>

                {activity.map((activity, index) => (
                    <>
                    <div key={index} className={"flex flex-row items-center gap-6 min-w-full"}>
                        <div id={"imageWrapper"} className={"basis-1/4"}>
                            <img src={eval(activity.pic)} alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                        </div>

                        <div className={"basis-3/4 flex flex-col gap-1"}>
                            <p className={"text-gray-700 "}>{activity.text}</p>
                            <p className={"text-gray-700 "}>
                                <span className={"font-bold"}>Department:</span> {activity.department}</p>

                            {/* A funky solution as there is no backend for this prototype yet */}
                            {typeof activity.row3 === "number" ?
                                <p className={"text-gray-700 "}>
                                    <span className={"font-bold"}>Year of Study:</span> {activity.row3}
                                </p>
                                :
                                <p className={"text-gray-700 "}>
                                    <span className={"font-bold"}>Modules:</span> {activity.row3}
                                </p>
                            }

                            <button className={"rounded-md bg-gray-700 text-white p-2 max-w-28 text-sm mt-2"}
                                    id={"growHover"}>More
                                details
                            </button>

                        </div>

                    </div>

                    <hr className={"w-full"}/>
                    </>
            ))}

            </div>
        </div>
    )
}

export default ActivityPage;
