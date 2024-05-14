function Featured() {
    return (
      <div className="flex flex-col items-center justify-center w-full bg-[#141414] py-10 mt-12 projectsSection">
        <div className="flex flex-col items-center">
            <h2 className="font-BigBoy font-black text-4xl text-[#CFC0AE]">FEATURED</h2>
            <h2 className="font-BigBoy font-black text-4xl text-[#CFC0AE]">PROJECTS</h2>
        </div>
        <div className="flex flex-col items-center w-full h-full my-8 gap-4">
            <div className="w-[90%] h-[9rem] rounded-2xl bg-red-200 max-w-[750px]"></div>
            <div className="w-[90%] h-[9rem] rounded-2xl bg-red-200 max-w-[750px]"></div>
            <div className="w-[90%] h-[9rem] rounded-2xl bg-red-200 max-w-[750px]"></div>
        </div>
        <div className="w-[60%] max-w-[400px]">
          <div className="btn btn-ghost border-solid border-4 border-[#2F3032] w-full h-[5rem] rounded-2xl text-[#CFC0AE] font-BigBoy font-black text-2xl">VIEW ALL</div>
        </div>
      </div>
    )
  }
  
  export default Featured;