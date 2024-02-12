import {useEffect, useState} from "react";

function FilterBar() {

    const [ModuleCode, setModuleCode] = useState("");
    const [Dep, setDep] = useState("All");
    const [Gender, setGender] = useState("Any");

    const handleModuleCode = (e) => {
        setModuleCode(e.target.value);
    }

    const handleDepChange = (e) => {
        setDep(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }


  return (
      <div id={"filterBar"} className={"w-full flex flex-col justify-center items-center mb-14"}>
          <div className={"flex flex-row items-center text-white justify-center gap-12 lg:gap-5 p-5 transition-all ease-in-out"}>
              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Search:</p>
                  <input type="text" placeholder={"CO1107 / John Doe"} className={"p-2 rounded-md text-white"}
                         value={ModuleCode} onChange={handleModuleCode}/>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Department:</p>
                  <select className={"p-2 rounded-md"} defaultValue={"Any"} onChange={handleDepChange}>
                      <option value={"Any"} selected={"selected"}>Any</option>
                      <option value={"Rating"}>Computing and Mathematical Sciences</option>
                      <option value={"Most Comments"}>Humanities and Arts</option>
                      <option value={"Difficulty"}>Life Sciences</option>
                      <option value={"Newest"}>Medicine</option>
                  </select>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Gender:</p>
                  <select className={"p-2 rounded-md"} defaultValue={"any"} onChange={handleGenderChange}>
                      <option value="any">Any</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </select>
              </div>

          </div>

          <hr className={"w-1/2 "}/>

      </div>
  );
}

export default FilterBar;