import Link from "next/link";
import { ChargingInfoRight } from "@/utils/ChargingNavModal";

const NavModalListCharging = () => {
  return (
    <div className=" h-full w-full flex flex-col gap-1 items-center justify-center pl-[16px] py-[20px] text-sm ">
      {ChargingInfoRight.map((item) => (
        <div className=" h-1/6 w-full rounded-[14px] flex items-center justify-center gap-1">
          <Link
            className=" hover:underline text-center hover:text-xl text-neutral-700 transition duration-600 ease-in-out"
            href={item.route}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavModalListCharging;
