function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 FAQSection">
      <div className="w-[90%] py-10 flex flex-col items-center justify-center xl:flex-row xl:gap-4 xl:items-start">
      <div className="collapse collapse-arrow bg-[#141414] mb-4 p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">Hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#141414] mb-4 p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">Hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#141414] p-4 max-w-[550px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-MediumBoy text-xl font-bold">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p className="font-SmolBoy text-lg">Hello</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FAQ;
