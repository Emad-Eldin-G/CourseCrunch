import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@radix-ui/themes/styles.css';

import './App.css'
import NavBar from './Components/navBar.jsx'
import Footer from './Components/footer.jsx'
import MobileNav from './Components/MobileNav.jsx'
import ActivityPage from './Pages/ActivityPage.jsx'
import ModulesPage from './Pages/ModulesPage.jsx'


import { motion } from "framer-motion"
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
            <Route path="/" element={<ActivityPage />} />
            <Route path="/modules" element={<ModulesPage />} />

        </Routes>

          <Footer/>
      </div>
  )
}

export default App;
