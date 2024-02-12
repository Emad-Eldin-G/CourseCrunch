import {useEffect, useState, useContext} from 'react'
import {ModulesFilterContext} from "./Context/ModulesFilter.jsx";

import './App.css'
import NavBar from './Components/Nav/navBar.jsx'
import Footer from './Components/footer.jsx'
import MobileNav from './Components/Nav/MobileNav.jsx'
import ActivityPage from './Pages/ActivityPage.jsx'
import ModulesPage from './Pages/ModulesPage.jsx'
import ModulePage from './Pages/ModulePage.jsx'
import LecturersPage from './Pages/LecturersPage.jsx'
import Lecturer from './Pages/Lecturer.jsx'
import Profile from './Pages/Profile.jsx'
import Error from './Pages/Error.jsx'


import {Route, Routes} from "react-router-dom";


function App() {

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
      <div className={"w-screen h-full"}>
        {isMobile ? <MobileNav/> : <NavBar />}

        <Routes>
            {/* Define other routes that you need*/}
            <Route path="" element={<ActivityPage />} />
            <Route path="/" element={<ActivityPage />} />

            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/modules/:moduleCode" element={<ModulePage />} />

            <Route path="/Lecturers" element={<LecturersPage />} />
            <Route path="/Lecturers/:Lecturer" element={<Lecturer />} />

            <Route path={"/profile"} element={<Profile />} />

            <Route path={"*"} element={<Error />} />

        </Routes>

        <Footer/>
      </div>
  )
}

export default App;
