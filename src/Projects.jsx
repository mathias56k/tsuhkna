import NavbarDark from './NavbarDark';
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
}

function Projects() {
  return (
    <div>
      <NavbarDark />
      <div className="bg-[#141414] min-h-screen pt-[90px] flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-[90%]">
          <Link to="/projects/opentrackfestival2024" onClick={scrollToTop} className="flex flex-col justify-start items-center cursor-pointer">
            <div className="relative w-[90%] rounded-2xl max-w-[750px] overflow-hidden group">
              <img
                src="https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/sign/images/opentrackfestival2024/DSC02015-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvb3BlbnRyYWNrZmVzdGl2YWwyMDI0L0RTQzAyMDE1LTIuanBnIiwiaWF0IjoxNzE2MzExMjAwLCJleHAiOjE3NDc4NDcyMDB9.-LIMg3mqm06KUfioggN6hYUUHvy4EoOFpATOpzHuovM&t=2024-05-21T17%3A06%3A40.906Z"
                alt="Open Track Festival 2024"
                className="rounded-2xl w-full h-auto opacity-30 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-BigBoy font-black text-3xl text-[#CFC0AE] cursor-pointer group-hover:opacity-0 transition-opacity duration-500 px-4 py-2 rounded">
                  Open Track Festival 2024
                </h2>
              </div>
            </div>
          </Link> 
          <Link to="/projects/stancest24" onClick={scrollToTop} className="flex flex-col justify-start items-center cursor-pointer mt-[-20rem] sm:mt-0">
            <div className="relative w-[90%] rounded-2xl max-w-[750px] overflow-hidden group">
              <img
                src="https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/public/images/stancest24/stancest24-cover.png"
                alt="Stancest24"
                className="rounded-2xl w-full h-auto opacity-30 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-BigBoy font-black text-3xl text-[#CFC0AE] cursor-pointer group-hover:opacity-0 transition-opacity duration-500 px-4 py-2 rounded">
                  Stancest24
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
