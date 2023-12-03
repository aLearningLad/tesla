import Image from "next/image";

const EnergyPromo = () => {
  return (
    <div className=" w-full h-[130vh] flex flex-col ">
      {/* TOP SECTION  */}
      <div className=" w-full h-[25%] py-12 px-24 flex gap-5 ">
        {/* LEFT SIDE  */}
        <div className=" h-full w-full lg:w-5/12 lg:pl-6 flex flex-col items-center lg:items-start text-start relative">
          <p className=" text-neutral-600 md:text-lg text-[12px] lg:text-xl">
            Design
          </p>
          <h3 className=" lg:text-3xl md:text-2xl text-xl ">
            Complement Your {"Home's"} Aesthetic
          </h3>
          <button className=" text-[17px] hover:bg-black hover:text-white transition duration-500 font-semibold w-fit h-fit absolute md:bottom-4 bottom-7 lg:bottom-0 border-[3px] border-black rounded-[4px] px-12 py-2">
            Order Now
          </button>
        </div>

        {/* RIGHT SIDE  */}
        <div className=" h-full w-7/12 lg:flex hidden">
          <p className=" w-10/12 text-[17px] text-neutral-600">
            Install Solar Roof and power your home with a fully integrated solar
            and energy storage system. The glass solar tiles and steel roofing
            tiles look great up close and from the street, complementing your
            {"home’s"} natural styling. Schedule a virtual consultation with a
            Tesla Advisor to learn more.
          </p>
        </div>
      </div>

      {/* LOWER PORTION  */}
      <div className=" h-[75%] w-full flex pl-12 gap-12">
        {/* LEFT SIDE  */}
        <div className="h-full w-full px-3 md:px-2 lg:px-0 lg:w-[20%] flex flex-col relative">
          <h5 className=" text-[18px] text-neutral-700">Energy Storage</h5>
          <h3 className=" text-black text-3xl mb-5">
            Protection Against <br /> Outages
          </h3>
          <p className=" text-neutral-700 font-normal text-[17px]">
            Powerwall is a compact home battery that is bundled with Solar Roof,
            providing you with 24/7 energy security. It stores the energy you
            produce with Solar Roof so you can power your home anytime—at night
            or during an outage.
          </p>

          <div className=" w-full h-fit flex flex-col absolute bottom-8 gap-5">
            <button className="hover:bg-black hover:text-white duration-500 transition ease-in-out w-full text-[17px] h-fit py-2 border-[3px] border-black rounded-[4px]">
              Order Now
            </button>
            <button className="w-full text-[17px] text-neutral-700 h-fit py-2 bg-neutral-200/70 hover:bg-neutral-200 transition duration-500 ease-in-out rounded-[4px]">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className=" w-0 lg:w-[80%] h-full relative">
          <Image
            src="/assets/moreImg.png"
            fill
            alt="teslaImg"
            objectFit="cover"
            className=" absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default EnergyPromo;
