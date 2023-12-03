import { ReactNode } from "react";
import NavModalSlide from "./NavModalSlide";

interface VECModalProps {
  leftside: () => JSX.Element;
  rightsideList: () => JSX.Element;
}

const VECModal: React.FC<VECModalProps> = ({ leftside, rightsideList }) => {
  return (
    <div className=" pt-[10px] h-full w-full flex items-center bg-transparent justify-center">
      <div className="flex w-[95%] bg-white h-4/6 rounded-[20px] z-10">
        <div className=" w-10/12 h-full">{leftside()}</div>
        <div className="h-full w-2/12 text-black flex flex-col gap-2">
          {rightsideList()}
        </div>
      </div>
    </div>
  );
};

export default VECModal;

{
  /*<div className=" w-full h-/6">
            <NavModalSlide
              imageSrc=""
              learnRoute="/"
              learnText="Learn"
              orderRoute="/"
              orderText="Order"
            />
          </div>*/
}
