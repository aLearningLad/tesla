import { roofspecsinfo1, roofspecsinfo2 } from "@/data/roofspecsinfo";
import Footer from "../misc/Footer";
import Image from "next/image";

const SolarRoof = () => {
  return (
    <div className=" w-full h-[140vh] lg:h-[210vh] lg:bg-black bg-black/70 md:bg-black/80  flex flex-col px-4 md:px-7 lg:px-0">
      {/* SPECS PART  */}
      <div className=" w-full h-[100vh] flex justify-center items-center">
        <div className="  w-full h-full flex">
          {/* LEFT SIDE  */}
          <span className="lg:w-1/2 w-0 h-full flex justify-start items-center">
            <Image
              src="/assets/solarroof.png"
              width={700}
              height={380}
              className=" object-cover"
              alt="roofImg"
            />
          </span>
          {/* RIGHT SIDE  */}
          <span className=" w-full lg:w-1/2 h-full flex-col flex items-center lg:items-start justify-center">
            <span className=" w-full h-full lg:h-4/6 flex flex-col justify-center items-center lg:items-start">
              <span className=" flex gap-3 mb-5">
                <h3 className=" text-[32px] font-semibold text-white">
                  Solar Roof
                </h3>
                <h3 className=" text-[32px] text-neutral-200">Specs</h3>
              </span>

              <span className="w-full h-fit flex gap-5">
                <span className=" flex flex-col gap-2 lg:gap-3 lg:w-fit w-1/2">
                  {roofspecsinfo1.map((item) => (
                    <span className=" flex flex-col w-full lg:w-fit h-fit px-2 py-3 text-start">
                      <div className=" h-[1px] w-[40px] bg-neutral-500" />
                      <p className=" text-white text-[17px] font-[600]">
                        {item.title}
                      </p>
                      <p className=" text-neutral-300">{item.desc}</p>
                    </span>
                  ))}
                </span>
                <span className="flex flex-col gap-2 lg:gap-3 w-1/2">
                  {roofspecsinfo2.map((item) => (
                    <span className=" flex flex-col w-full lg:w-fit h-fit px-2 py-3 text-start">
                      <div className=" h-[1px] w-[40px] bg-neutral-500" />
                      <p className=" text-white text-[17px] font-[600]">
                        {item.title}
                      </p>
                      <p className=" text-white">{item.desc}</p>
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>

      {/* BOOKING PART  */}
      <div className=" w-full h-[100vh] flex justify-center items-center">
        <div className=" w-6/12 h-fit text-center">
          <h1 className=" text-white text-3xl mb-7">Transform Your Roof</h1>
          <button className=" text-white w-fit px-20 mb-12 text-[17px] h-fit py-2 border-[3px] border-white rounded-[4px]">
            Order Now
          </button>
          <p className=" text-[17px] mb-16 text-neutral-300 font-[600]">
            Schedule a Virtual Consultation
          </p>
          <p className=" text-white underline font-[500]">Get Updates</p>
        </div>
      </div>
      {/* FOOTER PART  */}
      <Footer />
    </div>
  );
};

export default SolarRoof;
