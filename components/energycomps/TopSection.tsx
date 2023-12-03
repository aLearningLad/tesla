import { smalltabsinfo } from "@/data/smalltabinfo";
import Image from "next/image";
import Link from "next/link";
import { SmallTabs } from ".";

const TopSection = () => {
  return (
    <div className=" h-[100vh] w-full relative">
      {/* HOME BUTTON  */}
      <div className=" w-fit px-4 lg:px-1 lg:w-2/12 h-[8vh] pt-3 flex justify-center items-center">
        <Link
          href="/"
          className="flex items-center h-[85%] hover:bg-neutral-300 hover:scale-90 hover:translate-y-1 transition duration-500 ease-in-out justify-center w-fit px-2 lg:px-0 lg:w-8/12 bg-neutral-100 rounded-[12px]"
        >
          <Image
            src="/assets/logo.png"
            color="white"
            width={130}
            height={70}
            alt="logoimg"
            className=""
          />
        </Link>
      </div>

      {/* HEADING  */}
      <div className=" w-full h-[30vh] flex justify-center items-center">
        <h2 className=" text-5xl text-white font-semibold">Solar Roof</h2>
      </div>

      {/* Bottom section  */}
      <div className="w-full h-[30vh] absolute bottom-[50%] top-[50%] lg:bottom-0 lg:top-[70%] flex lg:flex-row flex-col justify-center items-center">
        {smalltabsinfo.map((card) => (
          <SmallTabs
            key={card.title}
            desc={card.desc}
            img={card?.img}
            title={card?.title}
          />
        ))}
        <button className="border-[3px] hover:bg-white hover:text-black transition duration-500 ease-in-out font-semibold border-white h-fit w-fit py-2 px-14 rounded-[4px] lg:mt-0 mt-9 text-white text-[17px]">
          Order now
        </button>
      </div>

      {/* BG IMAGE  */}
      <Image
        src="/assets/energybg2.png"
        alt="energyscreenbg"
        fill
        className=" absolute -z-10 brightness-50"
        objectFit="cover"
      />
    </div>
  );
};

export default TopSection;
