import NavModalSlide from "@/components/misc/NavModalSlide";
import { VehiclesModalInfoRight } from "@/utils/VehiclesNavModal";

const VehicleSlides = () => {
  return (
    <div className=" w-full h-full gap-2 flex">
      {VehiclesModalInfoRight.map((item) => (
        <NavModalSlide
          imageSrc={item.imageSrc}
          learnRoute={item.learnRoute}
          learnText={item.learnText}
          orderRoute={item.orderRoute}
          orderText={item.orderText}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default VehicleSlides;
