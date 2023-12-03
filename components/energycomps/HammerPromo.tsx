const HammerPromo: React.FC = () => {
  return (
    <div className=" w-full h-[100vh] flex">
      <div className=" h-full w-0 lg:w-[70%]  ">
        <video
          src="/assets/homepromovid.mp4"
          loop
          muted
          autoPlay
          className=" w-full h-full object-cover"
        ></video>
      </div>
      <div className="h-full w-full lg:w-[30%] flex flex-col px-8 pt-12 relative">
        <h4 className=" text-neutral-700 text-[19px]">Durability</h4>
        <h2 className=" text-black text-[34px]">Take on the Elements</h2>
        <p className=" text-[17px] text-neutral-700">
          Solar Roof is comprised of both glass solar tiles and steel roofing
          tiles. Glass solar tiles produce energy, while architectural-grade
          steel tiles add longevity and corrosion resistance to your roof. Both
          are durable, strong and engineered for all-weather protection. With a
          25-year warranty, Solar Roof will continue to produce clean energy and
          protect your home for decades to come.
        </p>
        <button className="hover:bg-black hover:text-white transition duration-500 ease-in-out absolute bottom-12 border-[3px] border-black rounded-[4px] text-[17px] px-12 py-2">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default HammerPromo;
