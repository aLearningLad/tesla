import { EnergyModalInfoLeft } from "@/utils/EnergyNavModal";
import NavModalSlide from "@/components/misc/NavModalSlide";

const Energy = () => {
  return (
    <div className=" w-full h-full gap-2 flex">
      {EnergyModalInfoLeft.map((item) => (
        <NavModalSlide
          imageSrc={item.image}
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

export default Energy;
