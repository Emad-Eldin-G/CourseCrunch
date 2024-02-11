import {useEffect, useState} from "react";

function FilterBar() {

    const [ModuleCode, setModuleCode] = useState("");
    const [SortBy, setSortBy] = useState("All");
    const [YearOfStudy, setYearOfStudy] = useState("Any");
    const [LastUpdated, setLastUpdated] = useState("Any");

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
      <div id={"filterBar"} className={"w-full flex flex-col justify-center items-center mb-14"}>
          <div className={"flex flex-row items-center justify-center gap-12 lg:gap-5 p-5 transition-all ease-in-out"}>
              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Search:</p>
                  <input type="text" placeholder={"CO1107 / John Doe"} className={"p-2 rounded-md text-white"} value={ModuleCode} onChange={handleModuleCode}/>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Sort by:</p>
                  <select className={"p-2 rounded-md"} defaultValue={"All"} onChange={handleSortBy}>
                      <option value={"All"} selected={"selected"}>All</option>
                      <option value={"Rating"}>Rating</option>
                      <option value={"Most Comments"}>Most Comments</option>
                      <option value={"Difficulty"}>Difficulty</option>
                      <option value={"Newest"}>Newest</option>
                  </select>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Year of Study:</p>
                  <select className={"p-2 rounded-md"} defaultValue={0} onChange={handleYearOfStudy}>
                      <option value="0">Any</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Masters</option>
                  </select>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Last updated:</p>
                  <select className={"p-2 rounded-md"} defaultValue={"any"} onChange={handleLastUpdated}>
                      <option value="any">Any</option>
                      <option value="semester">This semester</option>
                      <option value="t-year">This year</option>
                      <option value="l-year">Last year</option>
                  </select>
              </div>

          </div>

          <hr className={"w-1/2 "}/>

      </div>
  );
}

export default FilterBar;