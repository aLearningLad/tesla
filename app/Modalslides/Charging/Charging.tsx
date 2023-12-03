import NavModalSlide from "@/components/misc/NavModalSlide";
import { ChargingInfoLeft } from "@/utils/ChargingNavModal";

const Charging = () => {
  return (
    <div className=" w-full h-full gap-2 flex">
      {ChargingInfoLeft.map((item) => (
        <NavModalSlide
          imageSrc={item.image}
          learnRoute={item.learnRoute}
          learnText={item.learnText}
          orderRoute={item.shopRoute}
          orderText={item.shopText}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Charging;
