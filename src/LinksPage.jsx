import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function LinksPage() {
  return (
    <div className="">
      <div className="h-[65px] flex items-center justify-center bg-[#CFC0AE] w-full top-0 z-10 my-6">
        <a href="/">
          <img
            src="../tsuhkna-website-logo.png"
            className="h-9"
            alt="Tsuhkna Website Logo"
          />
        </a>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="bg-[#2F3032] w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px]">
          <Link to={`/contact/`}>
            <h2 className="font-BigBoy font-bold text-2xl text-[#CFC0AE]">
              BOOK NOW
            </h2>
          </Link>
        </div>
        <a
          href="https://www.instagram.com/tsuhkna"
          target="_blank"
          className="bg-[#2F3032] w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px]"
        >
          <GrInstagram className="text-[#CFC0AE] h-8 w-8" />
          <p className="font-BigBoy text-[#CFC0AE] font-bold text-2xl">
            Instagram
          </p>
        </a>
        <a
          href="https://www.tiktok.com/@carguyest"
          target="_blank"
          className="bg-[#2F3032] w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px]"
        >
          <FaTiktok className="text-[#CFC0AE] h-8 w-8" />
          <p className="font-BigBoy text-[#CFC0AE] font-bold text-2xl">
            TikTok
          </p>
        </a>
        <div className="bg-[#2F3032] w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px]">
          <Link to={`/`}>
            <h2 className="font-BigBoy font-bold text-2xl text-[#CFC0AE]">
              WEBSITE
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
