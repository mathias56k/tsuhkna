import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function LinksPage() {
  return (
    <div className="bg-[#141414] min-h-screen">
      <div className="h-[65px] flex items-center justify-center bg-[#141414] w-full top-0 z-10 pt-6 mb-6">
        <a href="/">
          <img
            src="../tsuhkna-website-logo-light.png"
            className="h-9"
            alt="Tsuhkna Website Logo"
          />
        </a>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Link
          to="../contact/"
          className="w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px] relative overflow-hidden border-4"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('../bcg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              zIndex: 0,
            }}
          />
          <h2 className="font-BigBoy font-bold text-2xl text-[#fff] relative z-10">
            BOOK NOW
          </h2>
        </Link>
        <a
          href="https://www.instagram.com/tsuhkna"
          target="_blank"
          className="w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px] relative overflow-hidden border-4"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('../bcg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              zIndex: 0,
            }}
          />
          <GrInstagram className="text-[#fff] h-8 w-8 relative z-10" />
          <p className="font-BigBoy text-[#fff] font-bold text-2xl relative z-10">
            Instagram
          </p>
        </a>
        <a
          href="https://www.tiktok.com/@tsuhkna"
          target="_blank"
          className="w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px] relative overflow-hidden border-4"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('../bcg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              zIndex: 0,
            }}
          />
          <FaTiktok className="text-[#fff] h-8 w-8 relative z-10" />
          <p className="font-BigBoy text-[#fff] font-bold text-2xl relative z-10">
            TikTok
          </p>
        </a>
        <Link
          to="/"
          className="w-[80%] h-20 rounded-xl flex items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px] relative overflow-hidden border-4"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('../bcg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              zIndex: 0,
            }}
          />
          <h2 className="font-BigBoy font-bold text-2xl text-[#fff] relative z-10">
            WEBSITE
          </h2>
        </Link>
        <div
          className="hidden w-[80%] h-20 rounded-xl items-center justify-center gap-4 btn btn-ghost hover:bg-[#141414] max-w-[500px] relative overflow-hidden"
          style={{
            backgroundColor: "#2F3032",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url('../bcg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
              zIndex: 0,
            }}
          />
          <Link to="/roller-tutorial" className="relative z-10">
            <h2 className="font-BigBoy font-bold text-2xl text-[#CFC0AE]">
              ROLLER TUTORIAL
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
