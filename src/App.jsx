import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage"
import ContactPage from "./ContactPage.jsx";
import LinksPage from "./LinksPage.jsx";
import Projects from "./Projects.jsx";
import Success from "./Success.jsx";
import RollerTutorial from "./RollerTutorial.jsx";

import DriftFactoryMatsuri2024 from "./projects/drift-factory-matsuri-2024/DriftFactoryMatsuri2024.jsx";
import Stancest24 from "./projects/stancest24/Stancest24.jsx";

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

          <Route path="/projects/driftfactorymatsuri2024" element={<DriftFactoryMatsuri2024 />} />
          <Route path="/projects/stancest24" element={<Stancest24 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
