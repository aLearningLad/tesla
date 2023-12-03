import Image from "next/image";
import Link from "next/link";

interface NavModalSlideProps {
  imageSrc: string;
  learnText: string;
  learnRoute: string;
  orderText: string;
  orderRoute: string;
  title: string;
}

const NavModalSlide: React.FC<NavModalSlideProps> = ({
  imageSrc,
  learnRoute,
  learnText,
  orderRoute,
  orderText,
  title,
}) => {
  return (
    <div className=" w-full justify-center text-center items-center mx-4 hover:scale-110 transition duration-300 h-full rounded-[14px] flex text-neutral-500">
      <div className=" h-[240px] hover:bg-neutral-400 rounded-[14px]">
        <div className=" w-full h-[240px] object-contain flex items-center justify-center">
          <Image
            src={imageSrc}
            width={240}
            height={320}
            alt="image"
            className=""
          />
        </div>
        <p className=" text-black text-lg h-[30px] w-full">{title}</p>
        <div className=" h-1/6 w-full flex justify-center items-center gap-4 text-[16px]">
          <Link
            className=" hover:scale-110 transition duration-300 hover:text-black"
            href={learnRoute}
          >
            {learnText}
          </Link>
          <Link
            className=" hover:scale-110 transition duration-300 hover:text-black"
            href={orderRoute}
          >
            {orderText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavModalSlide;
