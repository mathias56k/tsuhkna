import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function Success() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

    return (
      <div className="">
        <div className="h-[65px] flex items-center justify-center bg-[#CFC0AE] w-full top-0 fixed z-10">
        <a href="/">
          <img
            src="../tsuhkna-website-logo.png"
            className="h-9"
            alt="Tsuhkna Website Logo"
          />
        </a>
      </div>
      <div className="pt-[65px] bg-[#CFC0AE] min-h-screen text-[#141414] flex flex-col items-center mt-8">
        <h2 className="font-BigBoy font-black text-2xl">Thank you for contacting!</h2>
        <p className="font-SmolBoy font-semibold text-lg w-[80%] mt-2 text-center">We will reach out to you as soon as possible so keep an eye on your email.</p>
        <div className="mt-10 w-[80%] flex flex-col items-center">
          <p className="font-SmolBoy font-semibold text-lg">In the meantime follow me on:</p>
          <div className="flex gap-4">
            <a href="https://www.tiktok.com/@carguyest" target="_blank" className='btn btn-ghost hover:bg-[#998e81] text-[#141414]'><FaTiktok className='text-3xl' /></a>
            <a href="https://www.instagram.com/tsuhkna" target="_blank" className='btn btn-ghost hover:bg-[#998e81] text-[#141414]'><GrInstagram className='text-3xl' /></a>
          </div>
          <div className="mt-8">
          <Link to={`/`} onClick={scrollToTop}><p className="font-BigBoy font-black text-xl btn btn-ghost hover:bg-[#998e81]">Go back to home page</p></Link>
          </div>
          <p className="font-SmolBoy font-bold mt-20">Us when we get good pics of your car:</p>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnhpeGU4M3lnZ21pd2hoajQ0bW90eTZ2b3p2Z3dzaXF3ZGhzYWpxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ErWnkLjegNB5LlC/giphy.gif" alt="" className="w-[40rem] px-2" />
        </div>
      </div>
      </div>
    )
  }
  
  export default Success;