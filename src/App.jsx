import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage"
import ContactPage from "./ContactPage.jsx";
import LinksPage from "./LinksPage.jsx";
import Projects from "./Projects.jsx";
import Success from "./Success.jsx";
import RollerTutorial from "./RollerTutorial.jsx";

import OpenTrackFestival2024 from "./projects/open-track-festival-2024/OpenTrackFestival2024.jsx";
import CarsAndCastle2024 from "./projects/trf44carsandcastle2024/CarsAndCastle2024.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/success" element={<Success />} />
          <Route path="/roller-tutorial" element={<RollerTutorial />} />

          <Route path="/projects/opentrackfestival2024" element={<OpenTrackFestival2024 />} />
          <Route path="/projects/carsandcastle2024" element={<CarsAndCastle2024 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
