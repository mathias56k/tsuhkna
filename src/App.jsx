import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage"
import ContactPage from "./ContactPage.jsx";
import LinksPage from "./LinksPage.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
