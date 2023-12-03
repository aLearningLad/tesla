import Image from "next/image";

const ProductionPromo = () => {
  return (
    <div className=" w-full h-screen flex">
      <div className=" w-full h-[70vh] md:h-[75vh] lg:w-[28%] lg:h-full px-16 pt-0 lg:pt-20">
        <div className=" w-full h-full flex flex-col relative">
          <h4 className=" text-[19px] text-neutral-700">Efficieny</h4>
          <h2 className="text-3xl text-black mb-5">Maximum Solar Production</h2>
          <p className=" text-neutral-700 text-[17px]">
            Generate the most energy possible, even on roofs with complicated
            angles and intermittent sunlight. Glass solar tiles and
            architectural-grade steel tiles, vent covers and ridge caps come
            together to form a roof that is both durable and powerful. With
            Tesla Solar Inverter, your fully integrated system is safe, reliable
            and outage ready. And built-in connectivity ensures Tesla Solar
            Inverter continues to improve with each over-the-air software
            update.
          </p>
          <button className=" absolute bottom-7 w-fit h-fit px-20 hover:bg-black hover:text-white duration-500 transition ease-in-out py-2 text-[18px] border-[3px] rounded-[4px] border-black">
            Order Now
          </button>
        </div>
      </div>
      <div className=" w-0 lg:w-[72%] h-full relative">
        <Image
          src="/assets/inverter.png"
          fill
          objectFit="cover"
          className=" absolute"
          alt="inverterImg"
        />
      </div>
    </div>
  );
};

export default ProductionPromo;
