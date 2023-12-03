import { ResourcesInfo } from "@/utils/DiscoverModal";
import { LocationInfo } from "@/utils/LocationServicesModal";
import { CompanyModalInfo } from "@/utils/CompanyModal";
import Link from "next/link";

const Discover = () => {
  return (
    <div className=" w-[75%] h-full p-3 gap-4 flex items-center bg-white justify-center text-black">
      <div className=" w-full h-3/6 flex flex-col items-center text-center gap-1">
        <h1 className=" text-2xl">Resources</h1>
        {ResourcesInfo.map((item) => (
          <div className=" w-full flex flex-col justify-center items-center text-sm">
            <Link href={item.route}>{item.title}</Link>
          </div>
        ))}
      </div>
      <div className=" w-full h-full flex justify-center items-center text-center">
        <div className=" w-full h-3/6 flex flex-col items-center text-center gap-1">
          <h1 className=" text-2xl">Location Services</h1>
          {LocationInfo.map((item) => (
            <div className="w-full flex flex-col justify-center items-center text-sm">
              <Link href={item.route}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center text-center">
        <div className=" w-full h-3/6 flex flex-col items-center text-center gap-1">
          <h1 className=" text-2xl">Company Info</h1>

          {CompanyModalInfo.map((item) => (
            <div className="w-full flex flex-col justify-center items-center text-sm">
              <Link href={item.route}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
