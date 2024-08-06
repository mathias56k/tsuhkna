import React from "react";
import { useNavigate } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));
  };

  return (
    <div className="pb-20 bg-[#CFC0AE] pt-20 mt-[-80px]">
      <div className="h-[65px] flex items-center justify-center bg-[#CFC0AE] w-full top-0 fixed z-10">
        <a href="/">
          <img
            src="../tsuhkna-website-logo.png"
            className="h-9"
            alt="Tsuhkna Website Logo"
          />
        </a>
      </div>
      <div className="mt-[65px] flex flex-col items-center justify-center">
        <form
          name="contact"
          method="POST"
          netlify
          onSubmit={handleSubmit}
          className="bg-[#141414] w-[90%] rounded-2xl flex items-center justify-center flex-col py-8 max-w-[40rem]"
        >
          <h2 className="font-BigBoy font-black text-5xl text-[#CFC0AE]">
            CONTACT
          </h2>
          <h2 className="font-BigBoy font-black text-5xl text-[#CFC0AE]">
            FORM
          </h2>
          <input type="hidden" name="form-name" value="contact" />
          <div className="w-[70%] flex flex-col gap-4 pt-4 pb-6">
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="name"
                className="font-MediumBoy font-black text-xl text-[#CFC0AE] mb-[0.15rem]"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-[#2F3032] w-full rounded-md ml-2 h-10 px-2 font-SmolBoy text-[#A5ADBB] input"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="email"
                className="font-MediumBoy font-black text-xl text-[#CFC0AE] mb-[0.15rem]"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-[#2F3032] w-full rounded-md ml-2 h-10 px-2 font-SmolBoy text-[#A5ADBB] input"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="message"
                className="font-MediumBoy font-black text-xl text-[#CFC0AE] mb-[0.15rem]"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-[#2F3032] w-full rounded-md ml-2 h-24 pt-1 px-2 font-SmolBoy text-[#A5ADBB] input"
                placeholder="Describe your idea, location, time and budget."
              ></textarea>
            </div>
            <div className="w-full ml-2 mt-2 flex">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox mr-3 mt-[.1rem] bg-[#2F3032] border-none"
                id="newsletter"
                name="newsletter"
              />
              <div>
                <label
                  htmlFor="newsletter"
                  className="font-MediumBoy font-black text-lg text-[#CFC0AE]"
                >
                  Subscribe to the newsletter?
                </label>
                <p className="font-SmolBoy text-[#A5ADBB]">
                  No spam, I will only send you good offers on shoots
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="border-solid border-4 border-[#2F3032] rounded-md font-BogBoy font-black text-3xl text-[#CFC0AE] btn btn-ghost h-[4rem] px-12"
          >
            SEND
          </button>
        </form>
        <div className="w-full h-20 flex items-center justify-center mt-4">
          <h2 className="font-BigBoy font-black text-[#141414] text-2xl">OR</h2>
        </div>
        <div>
          <h2 className="font-BigBoy font-black text-[#141414] text-3xl">
            MESSAGE ME ON
          </h2>
        </div>
        <div className="flex items-center gap-4 mt-4 flex-col">
          <img src="/arrows.svg" className="w-[16rem]" alt="" />
          <div className="flex items-center gap-20">
            <a href="https://www.instagram.com/tsuhkna" target="_blank" className='btn btn-ghost hover:bg-[#998e81] text-[#141414] mt-[-4rem]'><GrInstagram className='text-3xl' /></a>
            <a href="mailto:mathias@tsuhkna.com" className='btn btn-ghost hover:bg-[#998e81] text-[#141414]'><MdOutlineEmail className='text-[2.6rem]' /></a>
            <a href="https://www.tiktok.com/@tsuhkna" target="_blank" className='btn btn-ghost hover:bg-[#998e81] text-[#141414] mt-[-4rem]'><FaTiktok className='text-3xl' /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
