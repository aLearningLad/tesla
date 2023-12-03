interface HomeSlideProps {
  Model: string;
  Description: React.ReactNode;
  LeftButtonText: string;
  RightButtonText: string;
  LeftButtonRoute: string;
  RightButtonRoute: string;
  ImageSource: string;
}

import Link from "next/link";

const HomeSlide: React.FC<HomeSlideProps> = ({
  Model,
  Description,
  LeftButtonRoute,
  RightButtonRoute,
  LeftButtonText,
  RightButtonText,
  ImageSource,
}) => {
  return (
    <div className=" w-full h-full pt-[120px] bg-transparent">
      <div className=" w-full h-3/6 flex flex-col">
        <h1 className=" w-full text-[46px] font-sans font-semibold flex justify-center items-center">
          {Model}
        </h1>
        <p className=" flex flex-col justify-center items-center text-center text-[16px]">
          {Description}
        </p>
      </div>
      <div className=" w-full relative h-3/6">
        <div className=" w-full flex lg:flex-row flex-col h-fit lg:h-[27%] items-center gap-6 justify-center absolute top-[54%]">
          <Link
            href={LeftButtonRoute}
            className="lg:h-3/6 h-fit py-3 lg:py-0 w-[60%] md:w-[50%] lg:w-[17%] flex justify-center items-center rounded-[5px] bg-neutral-400 bg-opacity-70 font-sans text-black font-[400] text-[18px]"
          >
            {LeftButtonText}
          </Link>
          <Link
            href={RightButtonRoute}
            className=" lg:w-[17%] w-[60%] md:w-[50%] flex justify-center items-center rounded-[5px] h-fit py-3 lg:py-0 lg:h-3/6 bg-neutral-600 text-white bg-opacity-70 text-[18px] font-sans"
          >
            {RightButtonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
