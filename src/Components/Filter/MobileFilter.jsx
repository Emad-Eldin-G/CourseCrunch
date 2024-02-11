import React, { useState } from "react";

function MobileFilter() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [ModuleCode, setModuleCode] = useState("");
    const [SortBy, setSortBy] = useState("");
    const [YearOfStudy, setYearOfStudy] = useState("");
    const [LastUpdated, setLastUpdated] = useState("");

    const handleSortBy = (e) => {
        setSortBy(e.target.value);
    }

    const handleModuleCode = (e) => {
        setModuleCode(e.target.value);
    }

    const handleYearOfStudy = (e) => {
        setYearOfStudy(e.target.value);
    }

    const handleLastUpdated = (e) => {
        setLastUpdated(e.target.value);
    }

    return (
        <div id={"filterBar"} className={"w-full flex flex-col justify-center items-center mt-10 p-10"}>
            <button onClick={() => setMenuOpen(!menuOpen)} className={"w-96 bg-gray-700 p-2 rounded-md text-white"}>Filter</button>

            {menuOpen ?

                <div className={"flex flex-col gap-2"}>
                <p className={"text-gray-700 font-bold"}>Search:</p>
                <input type="text" placeholder={"CO1107 / John Doe"} className={"p-2 rounded-md text-white"} value={ModuleCode} onChange={handleModuleCode}/>

                <p className={"text-gray-700 font-bold"}>Sort by:</p>
                    <select className={"p-2 rounded-md"} defaultValue={"All"} value={SortBy} onChange={handleSortBy}>
                        <option value={"All"}>All</option>
                        <option value={"Rating"}>Rating</option>
                        <option value={"Most Comments"}>Most Comments</option>
                        <option value={"Difficulty"}>Difficulty</option>
                        <option value={"newest"}>Newest</option>
                    </select>

                <p className={"text-gray-700 font-bold"}>Year of Study:</p>
                    <select className={"p-2 rounded-md"} defaultValue={"Any"} value={YearOfStudy} onChange={handleYearOfStudy}>
                        <option value="Any">Any</option>
                        <option value="rating">First Year</option>
                        <option value="popularity">Second Year</option>
                        <option value="difficulty">Third Year</option>
                        <option value="difficulty">Masters</option>
                    </select>

                <p className={"text-gray-700 font-bold"}>Last updated:</p>
                    <select className={"p-2 rounded-md"} defaultValue={"any"} value={LastUpdated} onChange={handleLastUpdated}>
                        <option value="any">Any</option>
                        <option value="rating">This semester</option>
                        <option value="popularity">This year</option>
                        <option value="difficulty">Last year</option>
                    </select>
            </div>
            : null
            }
        </div>
    );
}

export default MobileFilter;