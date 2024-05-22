import { Link } from "react-router-dom";

function Featured() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#141414] py-10 mt-12 projectsSection">
      <div className="flex flex-col items-center">
        <h2 className="font-BigBoy font-black text-4xl text-[#CFC0AE]">FEATURED</h2>
        <h2 className="font-BigBoy font-black text-4xl text-[#CFC0AE]">PROJECT</h2>
      </div>
      <div className="flex flex-col items-center w-full h-full my-8 gap-4">
        <div className="relative w-[90%] rounded-2xl max-w-[750px] overflow-hidden group">
          <img
            src="https://acooyzmblukojemgsehv.supabase.co/storage/v1/object/sign/images/opentrackfestival2024/DSC02015-2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvb3BlbnRyYWNrZmVzdGl2YWwyMDI0L0RTQzAyMDE1LTIuanBnIiwiaWF0IjoxNzE2MzExMjAwLCJleHAiOjE3NDc4NDcyMDB9.-LIMg3mqm06KUfioggN6hYUUHvy4EoOFpATOpzHuovM&t=2024-05-21T17%3A06%3A40.906Z"
            alt="Open Track Festival 2024"
            className="rounded-2xl w-full h-auto opacity-30 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-BigBoy font-black text-3xl text-[#CFC0AE] hover:cursor-default group-hover:opacity-0 transition-opacity duration-500 px-4 py-2 rounded">
              Open Track Festival 2024
            </h2>
          </div>
        </div>
        {/* <div className="w-[90%] h-[9rem] rounded-2xl max-w-[750px] hidden"></div>
        <div className="w-[90%] h-[9rem] rounded-2xl max-w-[750px] hidden"></div> */}
      </div>
      <div className="w-[60%] max-w-[400px]">
        <Link to="/projects">
          <div className="btn btn-ghost border-solid border-4 border-[#2F3032] w-full h-[5rem] rounded-2xl text-[#CFC0AE] font-BigBoy font-black text-2xl">
            VIEW ALL
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
