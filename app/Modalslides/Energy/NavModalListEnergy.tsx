import { EnergyModalInfoRight } from "@/utils/EnergyNavModal";
import Link from "next/link";

const NavModalListEnergy = () => {
  return (
    <div className=" h-full w-full flex flex-col gap-1 items-center justify-center pl-[16px] py-[20px] text-sm ">
      {EnergyModalInfoRight.map((item) => (
        <div className=" h-full w-full rounded-[14px] flex items-center justify-start gap-2 group">
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

export default NavModalListEnergy;
