import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col items-center justify-center xl:flex-row aboutSection xl:items-start xl:pt-20 pb-10 xl:pb-20 bg-[#CFC0AE]">
      <div className="flex flex-col items-center justify-center xl:w-[50%]">
        <div className="w-[80%] mb-2 max-w-[40rem]">
          <h2 className="font-BigBoy font-black text-[#141414] text-3xl">
            ABOUT ME
          </h2>
        </div>
        <div className="w-[80%] max-w-[40rem]">
          <p className="text-[#141414] font-SmolBoy font-medium text-xl">
            Fueled by a passion for cars, I have embarked on a journey to
            capture the essence and beauty of automotive design through my lens.
            My photography highlights the intricate details and powerful
            presence of each vehicle.
          </p>
        </div>
      </div>
      <div className="w-[80%] xl:w-[40%] pt-6 flex flex-col items-center justify-center text-[#141414]">
        <p className="font-BigBoy font-bold text-xl text-center">
          Want to follow me on this journey?
        </p>
        <div className="flex gap-8 mt-4">
          <a
            href="https://www.instagram.com/tsuhkna"
            target="_blank"
            className="btn btn-ghost hover:bg-[#998e81]"
          >
            <GrInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.tiktok.com/@carguyest"
            target="_blank"
            className="btn btn-ghost hover:bg-[#998e81]"
          >
            <FaTiktok className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
