import React, {useEffect, useState} from "react";

function MobileFilter() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ButtonText, setButtonText] = useState("Filter");

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

    useEffect(() => {
        if (menuOpen) {
            setButtonText("Close");
        } else {
            setButtonText("Filter");
        }
    });

    return (
        <div id={"filterBar"} className={"w-full flex flex-col justify-center items-center mt-10 p-10"}>
            <button onClick={() => setMenuOpen(!menuOpen)} className={"w-96 bg-gray-700 p-2 rounded-md text-white"}>{ButtonText}</button>

            {menuOpen ?

                <div className={"flex flex-col gap-2"}>
                    <p className={"text-gray-700 font-bold"}>Search:</p>
                    <input type="text" placeholder={"CO1107 / John Doe"} className={"p-2 rounded-md text-white"}
                           value={ModuleCode} onChange={handleModuleCode}/>

                    <p className={"text-gray-700 font-bold"}>Department:</p>
                    <select className={"p-2 rounded-md text-white"} defaultValue={"Any"} value={"Any"}>
                        <option value={"Any"}>Any</option>
                        <option value={"Rating"}>Computing and Mathematical Sciences</option>
                        <option value={"Most Comments"}>Humanities and Arts</option>
                        <option value={"Difficulty"}>Life Sciences</option>
                        <option value={"Newest"}>Medicine</option>
                    </select>

                    <p className={"text-gray-700 font-bold"}>Gender:</p>
                    <select className={"p-2 rounded-md text-white"} defaultValue={"Any"} value={"Any"}>
                        onChange={handleYearOfStudy}>
                        <option value="any">Any</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                </div>
                : null
            }
        </div>
    );
}

export default MobileFilter;