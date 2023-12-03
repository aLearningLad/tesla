import Image from "next/image";

const EnergyImage = () => {
  return (
    <div className=" bg-neutral-600 w-full h-screen md:h-[85vh] lg:h-[70vh] relative">
      <Image
        src="/assets/stockimage.png"
        fill
        objectFit="cover"
        className=" absolute top-0 bottom-0 left-0 right-0"
        alt="teslaImg"
      />
    </div>
  );
};

export default EnergyImage;
