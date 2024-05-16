import { GrInstagram } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

import { Link, useNavigate } from "react-router-dom";

function Featured() {
    return (
      <div className="flex flex-col items-center justify-center w-full bg-[#141414] py-10 mt-12">
        <div className="flex justify-center h-10 mb-8 btn btn-ghost">
          <Link to={`/contact/`}><h2 className="font-BigBoy font-bold text-xl">LET'S CREATE SOMETHING</h2></Link>
        </div>
        <div className='flex justify-around text-[#A5ADBB] w-[90%] max-w-[500px] h-10'>
          <div className='btn btn-ghost'><GrInstagram className='text-2xl' /></div>
          <div className='btn btn-ghost'><FaTiktok className='text-2xl' /></div>
          <div className='btn btn-ghost'><GrYoutube className='text-2xl' /></div>
          <div className='btn btn-ghost'><GrFacebookOption className='text-2xl' /></div>
        </div>
      </div>
    )
  }
  
  export default Featured;