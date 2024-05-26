function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-10 pb-10 FAQSection bg-[#CFC0AE]">
      <h2 className="font-BigBoy font-black text-[#141414] text-4xl">FAQ</h2>
      <div className="w-[90%] py-10 flex flex-col items-center justify-center xl:flex-row xl:gap-4 xl:items-start">
      <div className="collapse collapse-arrow bg-[#141414] mb-4 p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          How is your pricing?
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">I tend to not give out exact numbers because every shoot is different.<br />When booking we will discuss your budget and settle on a price fitting for both sides.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#141414] mb-4 p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          What services do you offer?
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">I offer professional car photography services, including individual car shoots, dealership photography, event coverage, and custom photo sessions.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#141414] p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          Where are you located?
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">I mainly do work in southern Estonia but on request I can come out to all parts of the world.<br/>PS! Keep an eye on my social media to get shoots outside of southern Estonia without travel fees ;)</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FAQ;
