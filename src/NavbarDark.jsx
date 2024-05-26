import { useState, useEffect } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { Element, scroller } from 'react-scroll';

import { Link, useNavigate } from "react-router-dom";

function NavbarDark() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const scrollToAboutSection = () => {
    scroller.scrollTo('aboutSection', {
      duration: 1500,
      smooth: true,
      offset: -200,
    });
    if (isOpen == true) {
      setIsOpen(false)
    }
  };

  const scrollToProjectsSection = () => {
    scroller.scrollTo('projectsSection', {
      duration: 1500,
      smooth: true,
      offset: -50,
    });
    setIsOpen(false)
  };

  const scrollToFAQSection = () => {
    navigate("/");
    scroller.scrollTo('FAQSection', {
      duration: 1500,
      smooth: true,
      offset: -100,
    });
    setIsOpen(false)
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="navbar bg-[#141414] text-[#CFC0AE] fixed w-full px-[6%] z-10">
        <div className="w-[30%]">
          <a href="/"><img src="../tsuhkna-website-logo-light.svg" className='h-8' alt="Tsuhkna Website Logo" /></a>
        </div>
        <div className="sm:hidden flex items-end justify-end w-[70%]">
          <button className="btn btn-square btn-ghost hover:bg-[#2F3032]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose className='w-10 h-10 text-[#CFC0AE]' /> : <LuMenu className='w-10 h-10 text-[#CFC0AE]' />}
          </button>
        </div>
        <div className="h-full hidden sm:flex items-end justify-end w-[70%] gap-2">
          <a className="btn sm:px-2 md:px-4 btn-ghost hover:bg-[#998e81] text-lg text-[#CFC0AE] font-BigBoy font-black" href="#" onClick={() => scrollToAboutSection()}>About</a>
          <a className="btn sm:px-2 md:px-4 btn-ghost hover:bg-[#998e81] text-lg text-[#CFC0AE] font-BigBoy font-black" href="#" onClick={() => scrollToProjectsSection()}>Projects</a>
          <Link to={`/contact/`} onClick={scrollToTop}><a className="btn sm:px-2 md:px-4 btn-ghost hover:bg-[#998e81] text-lg text-[#CFC0AE] font-BigBoy font-black" onClick={() => setIsOpen(false)}>Book now</a></Link>
          <a className="btn sm:px-2 md:px-4 btn-ghost hover:bg-[#998e81] text-lg text-[#CFC0AE] font-BigBoy font-black" href="#" onClick={() => scrollToFAQSection()}>FAQ</a>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-16 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center sm:hidden">
          <div className="bg-[#141414] w-full h-full flex flex-col justify-between items-center">
            <div className='flex flex-col items-center justify-center gap-8 h-[80%] w-full'>
              <a className="block text-[#CFC0AE] hover:text-[#2F3032] font-BigBoy font-black text-5xl hover:cursor-pointer" onClick={() => scrollToAboutSection()}>About</a>
              <a className="block text-[#CFC0AE] hover:text-[#2F3032] font-BigBoy font-black text-5xl hover:cursor-pointer" onClick={() => scrollToProjectsSection()}>Projects</a>
              <Link to={`/contact/`} onClick={scrollToTop}><a className="block text-[#CFC0AE] hover:text-[#2F3032] font-BigBoy font-black text-5xl" onClick={() => setIsOpen(false)}>Book now</a></Link>
              <a className="block text-[#CFC0AE] hover:text-[#2F3032] font-BigBoy font-black text-5xl hover:cursor-pointer" onClick={() => scrollToFAQSection()}>FAQ</a>
            </div>
            <div className='w-full h-[20%] flex items-center justify-center'>
              <div className='flex justify-center gap-4 w-[90%] h-20 mb-20 text-[#CFC0AE]'>
                <a href="https://www.instagram.com/tsuhkna" target="_blank" className='btn btn-ghost hover:bg-[#2F3032]'><GrInstagram className='text-2xl' /></a>
                <a href="https://www.tiktok.com/@carguyest" target="_blank" className='btn btn-ghost hover:bg-[#2F3032]'><FaTiktok className='text-2xl' /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarDark;
