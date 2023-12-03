import Discover from "@/app/Modalslides/Discover/Discover";

interface DSModalProps {
  modalInfo: () => JSX.Element;
}

const DSModal: React.FC<DSModalProps> = ({ modalInfo }) => {
  return (
    <div className=" pt-[10px] h-full w-full flex items-center bg-transparent justify-center">
      <div className=" flex w-[95%] bg-white h-4/6 rounded-[20px] z-10 justify-center">
        {modalInfo()}
      </div>
    </div>
  );
};

export default DSModal;
