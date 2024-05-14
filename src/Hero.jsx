function Hero() {
    return (
      <div className="pt-[65px] flex items-center justify-center"> 
          <div className="px-4 pb-4 w-[90%] bg-[#141414] rounded-[20px] min-[1000px]:px-6 min-[1000px]:pb-6">
              <div className="flex flex-col items-center text-[#CFC0AE] min-[560px]:mb-4">
                  <h2 className="font-BigBoy text-[3rem] font-black mb-[-1.7rem] min-[460px]:text-[3.7rem] min-[460px]:mb-[-2rem] min-[560px]:text-[4.6rem] min-[560px]:mb-[-2.5rem] min-[700px]:text-[5rem] min-[700px]:mb-[-2.8rem]">CAPTURING</h2>
                  <h2 className="font-MediumBoy text-[1.47rem] font-bold min-[460px]:text-[1.8rem] min-[560px]:text-[2.24rem] min-[700px]:text-[2.45rem]">AUTOMOTIVE EXCELLENCE</h2>
              </div>
              <div className="overflow-hidden">
                  <div className="grid grid-cols-5 grid-rows-1 w-full gap-2 min-[1000px]:grid-cols-12">
                    <div className="row-span-1 col-span-3 flex">
                        <img src="./gt3rs-3.jpg" className="rounded-xl min-[1000px]:rounded-2xl" alt="" />
                    </div>
                    <div className="col-start-4 row-span-1 col-span-2 flex min-[1000px]:col-span-2 min-[1000px]:col-start-11">
                        <img src="./gt3rs-1.jpg" className="rounded-xl min-[1000px]:rounded-2xl" alt="" />
                    </div>
                    <div className="row-span-1 col-span-5 flex min-[1000px]:col-span-7 min-[1000px]:col-start-4 min-[1000px]:row-start-1">
                        <img src="./gt3rs-2.jpg" className="rounded-xl min-[1000px]:rounded-2xl" alt="" />
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Hero;
  