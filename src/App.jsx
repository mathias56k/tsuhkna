import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage"
import ContactPage from "./ContactPage.jsx";
import LinksPage from "./LinksPage.jsx";
import Projects from "./Projects.jsx";
import OpenTrackFestival2024 from "./projects/OpenTrackFestival2024.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/projects/opentrackfestival2024" element={<OpenTrackFestival2024 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
