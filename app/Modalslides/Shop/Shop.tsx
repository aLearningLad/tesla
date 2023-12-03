import { ShopNavInfo } from "@/utils/ShopNavModal";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  return (
    <div className=" h-full w-[80%] flex justify-center items-center bg-white text-black text-center">
      {ShopNavInfo.map((item) => (
        <div className=" w-[80%] h-[80%] flex justify-center items-center flex-col">
          <Image src={item.image} height={340} width={320} alt="shopimage" />
          <Link
            className=" hover:scale-90 hover:text-neutral-500 transition duration-300"
            href={item.route}
          >
            {item.title}{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;
