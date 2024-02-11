
function FilterBar() {
  return (
      <div id={"filterBar"} className={"w-full flex flex-col justify-center items-center mb-14"}>
          <div className={"flex flex-row items-center justify-center gap-12 lg:gap-5 p-5 transition-all ease-in-out"}>
              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Search:</p>
                  <input type="text" placeholder={"Module code"} className={"p-2 rounded-md text-white"}/>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Sort by:</p>
                  <select className={"p-2 rounded-md"}>
                      <option value={"Rating"}>Rating</option>
                      <option value={"Most Comments"}>Most Comments</option>
                      <option value={"Difficulty"}>Difficulty</option>
                      <option value={"newest"}>Newest</option>
                  </select>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Year of Study:</p>
                  <select className={"p-2 rounded-md"}>
                      <option value="rating">First Year</option>
                      <option value="popularity">Second Year</option>
                      <option value="difficulty">Third Year</option>
                      <option value="difficulty">Masters</option>
                  </select>
              </div>

              <div className={"flex flex-col gap-2"}>
                  <p className={"text-gray-700 font-bold"}>Last updated:</p>
                  <select className={"p-2 rounded-md"}>
                      <option value="rating">This semester</option>
                      <option value="popularity">This year</option>
                      <option value="difficulty">Last year</option>
                  </select>
              </div>

          </div>

          <hr className={"w-1/2 "}/>

      </div>
  );
}

export default FilterBar;