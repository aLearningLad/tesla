import Link from "next/link";
import Header from "./Header";

const Landing = () => {
  return (
    <div className=" h-full w-full text-white lg:p-0 px-3 md:px-2">
      <video
        className="background-clip h-full w-full absolute left-0 right-0 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/promovid.mp4" type="video/mp4" />
      </video>
      <div className=" h-3/6 w-full flex items-center flex-col pt-[50px]">
        <h1 className=" w-full text-2xl md:text-3xl lg:text-[46px] flex justify-center items-center font-sans font-semibold tracking-wide">
          Experience Tesla
        </h1>
        <p className=" w-full text-[16px] flex justify-center items-center font-sans">
          Schedule a Demo Drive Today
        </p>
      </div>
      <div className=" w-full flex justify-center items-center h-fit lg:h-3/6 pt-[20px]">
        <Link
          className="border-[3px] border-white md:w-[70%] w-[60%] lg:w-[18%] rounded-[4px] flex justify-center bg-transparent text-white items-center font-[600] text-3xl lg:text-[14px] font-sans h-full lg:h-[12%]"
          href="/booking"
        >
          Demo Drive
        </Link>
      </div>
    </div>
  );
};

export default Landing;
