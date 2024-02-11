import { useState } from 'react'
import { motion } from "framer-motion"
import {Route, Routes} from "react-router-dom";

import upArrow from "../assets/upArrow.png"
import downArrow from "../assets/downArrow.png"


function ActivityPage() {
    const [moduleRating, setModuleRating] = useState(0)

    return (
        <div id={"wrapper"} className={"w-full h-full flex items-center justify-center"}>
            <div
                className={"pl-5 pr-5 flex flex-col gap-10 items-center"}>

                <div className={"flex flex-row items-center gap-6 min-w-full"}>
                    <div id={"imageWrapper"} className={"basis-1/4"}>
                        <img src={upArrow} alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                    </div>

                    <div className={"basis-3/4 flex flex-col"}>
                        <p className={"text-gray-700 "}>CO117 rating gone up by 5% since last week</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Department:</span> Computing and
                            Mathematical Sciences</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Year of Study:</span> 1</p>

                        <button className={"rounded-md bg-gray-700 p-2 max-w-28 text-sm mt-2"} id={"growHover"}>More
                            details
                        </button>
                    </div>
                </div>

                <hr className={"w-full"}/>

                <div className={"flex flex-row items-center gap-6 min-w-full"}>
                    <div id={"imageWrapper"} className={"basis-1/4"}>
                        <img src={upArrow} alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                    </div>

                    <div className={"basis-3/4 flex flex-col"}>
                        <p className={"text-gray-700 "}>Dr. John Doe's popularity has gone up by 36% since Monday</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Department:</span> Arts and
                            Humanities</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Modules:</span> AR001, HU901</p>

                        <button className={"rounded-md bg-gray-700 p-2 max-w-28 text-sm mt-2"} id={"growHover"}>More
                            details
                        </button>
                    </div>
                </div>

                <hr className={"w-full"}/>


                <div className={"flex flex-row items-center gap-6 min-w-full"}>
                    <div id={"imageWrapper"} className={"basis-1/4"}>
                        <img src={downArrow
                        } alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                    </div>

                    <div className={"flex flex-col"}>
                        <p className={"text-gray-700 "}>C206 rating have fallen by 16% since last week</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Department:</span> Computing and
                            Mathematical Sciences</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Year of Study:</span> 1</p>

                        <button className={"rounded-md bg-gray-700 p-2 max-w-28 text-sm mt-2"} id={"growHover"}>More
                            details
                        </button>
                    </div>
                </div>

                <hr className={"w-full"}/>

                <div className={"flex flex-row items-center gap-6 min-w-full"}>
                    <div id={"imageWrapper"} className={"basis-1/4"}>
                        <img src={upArrow} alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                    </div>

                    <div className={"flex flex-col"}>
                        <p className={"text-gray-700 "}>CO117 rating gone up by 5% since last week</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Department:</span> Computing and
                            Mathematical Sciences</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Year of Study:</span> 1</p>

                        <button className={"rounded-md bg-gray-700 p-2 max-w-28 text-sm mt-2"} id={"growHover"}>More
                            details
                        </button>
                    </div>
                </div>

                <hr className={"w-full"}/>

                <div className={"flex flex-row items-center gap-6 min-w-full"}>
                    <div id={"imageWrapper"} className={"basis-1/4"}>
                        <img src={upArrow} alt={"upArrow"} className={"max-w-20 max-h-20"}/>
                    </div>

                    <div className={"basis-3/4 flex flex-col"}>
                        <p className={"text-gray-700 "}>CO117 rating gone up by 5% since last week</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Department:</span> Computing and
                            Mathematical Sciences</p>
                        <p className={"text-gray-700 "}><span className={"font-bold"}>Year of Study:</span> 1</p>

                        <button className={"rounded-md bg-gray-700 p-2 max-w-28 text-sm mt-2"} id={"growHover"}>More
                            details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityPage;
