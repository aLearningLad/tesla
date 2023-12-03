const InstallPromo = () => {
  return (
    <div className=" w-full h-[100vh] lg:h-[35vh] hidden lg:flex px-24 py-16">
      <div className=" h-full w-full lg:w-5/12 flex justify-center lg:justify-end lg:pl-28">
        <div className="flex-col items-start w-8/12 relative">
          <h4 className=" text-[18px] text-neutral-700">Installation</h4>
          <h2 className=" text-black text-3xl">Trusted Expertise</h2>
          <button className=" absolute bottom-1 text-[17px] border-[3px] border-black rounded-[4px] px-12 py-1 hover:bg-black hover:text-white duration-500 transition ease-in-out ">
            Order Now
          </button>
        </div>
      </div>
      <div className=" h-full w-0 lg:w-7/12">
        <p className=" w-11/12 text-[17px] text-neutral-600">
          Our in-house team of energy professionals has installed nearly 4.0 GW
          of solar across approximately 480,000 roofs—cumulatively generating
          over 25.0 TWhs of clean energy. From design to power on, we take care
          of everything. Chat with a Tesla Advisor to ask any questions about
          Solar Roof.
        </p>
      </div>
    </div>
  );
};

export default InstallPromo;
