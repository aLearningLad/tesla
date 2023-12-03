import {
  EnergyImage,
  EnergyPromo,
  HammerPromo,
  InstallPromo,
  ProductionPromo,
  SolarRoof,
  TopSection,
} from "@/components/energycomps";

const EnergyPage = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col">
      <TopSection />
      <EnergyImage />
      <EnergyPromo />
      <HammerPromo />
      <InstallPromo />
      <ProductionPromo />
      <SolarRoof />
    </div>
  );
};

export default EnergyPage;
