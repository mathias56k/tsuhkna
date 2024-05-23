import Navbar from "../Navbar";

import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function OpenTrackFestival2024() {
  return (
    <div>
      <Navbar />
      <div className="text-sm breadcrumbs pt-[65px] text-[#141414] font-SmolBoy pl-2">
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={scrollToTop}>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <p>Open Track Festival 2024</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OpenTrackFestival2024;
