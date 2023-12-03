"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import VECModal from "./VECModal";
import VehicleSlides from "@/app/Modalslides/Vehicles/Vehicles";
import NavModalList from "../../app/Modalslides/Vehicles/NavModalListVehicles";
import Energy from "@/app/Modalslides/Energy/Energy";
import NavModalListEnergy from "../../app/Modalslides/Energy/NavModalListEnergy";
import Charging from "@/app/Modalslides/Charging/Charging";
import NavModalListCharging from "../../app/Modalslides/Charging/NavModalListCharging";
import DSModal from "./DSModal";
import Discover from "@/app/Modalslides/Discover/Discover";
import Shop from "@/app/Modalslides/Shop/Shop";
const Header = () => {
  const [isVehiclesModalOpen, setIsVehiclesModalOpen] = useState(false);
  const [isEnergyModalOpen, setIsEnergyModalOpen] = useState(false);
  const [isChargingModalOpen, setIsChargingModalOpen] = useState(false);
  const [isShoppingModalOpen, setIsShoppingModalOpen] = useState(false);
  const [isDiscoverModalOpen, setIsDiscoverModalOpen] = useState(false);

  return (
    <div className=" z-5 h-full w-full text-white">
      <div className=" text-white bg-gradient-to-br from-blue-800 to-gray-900 w-full h-3/6 hidden lg:flex items-center justify-center">
        <h3 className="text-xl font-semibold font-sans">
          $7,500 Federal Tax Credit
        </h3>

        <span className=" font-sans mx-3 text-[16px]">
          Available for new Model 3 and Model Y. Reduction to tax credit likely
          after Dec 31
        </span>
        <button type="button" className=" underline font-sans text-lg ml-2">
          See Details
        </button>
      </div>
      <div className=" w-full p-4 md:p-3 lg:p-0 justify-between lg:justify-normal bg-transparent h-fit lg:h-3/6 flex">
        <div className=" w-2/12 h-full flex justify-center items-center">
          <Link
            href="/"
            className="flex items-center h-[40px] lg:h-[85%] hover:bg-white hover:translate-y-1 transition duration-300 justify-center w-fit px-4 py-1 lg:p-0 lg:w-8/12 bg-neutral-400 rounded-[12px]"
          >
            <Image
              src="/assets/logo.png"
              color="white"
              width={130}
              height={70}
              alt="logoimg"
              className=""
            />
          </Link>
        </div>

        <div className=" w-fit lg:w-8/12 hidden lg:flex justify-center pt-5 items-center gap-7 font-normal text-lg">
          <div className="">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsVehiclesModalOpen(true)}
            >
              <div className=" group group-hover:scale-95 transition duration-300 ease-in-out flex justify-center items-center flex-col">
                Vehicles
                <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex" />
              </div>
            </div>
            {isVehiclesModalOpen && (
              <div
                onClick={() => setIsVehiclesModalOpen(false)}
                className=" fixed inset-0 flex h-screen backdrop-blur transition duration-300 ease-in-out flex-col justify-center items-center"
              >
                <VECModal
                  leftside={VehicleSlides}
                  rightsideList={NavModalList}
                />
                <button className="w-full justify-center items-center text-2xl hover:scale-105 transition duration-300 ease-in-out">
                  X
                </button>
              </div>
            )}
          </div>

          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsEnergyModalOpen(true)}
            >
              <div className=" group-hover:scale-95 transition duration-300 ease-in-out flex justify-center items-center flex-col">
                Energy
                <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex   " />
              </div>
            </div>
            {isEnergyModalOpen && (
              <div
                onClick={() => setIsEnergyModalOpen(false)}
                className=" fixed w-screen inset-0 flex h-screen backdrop-blur transition duration-300 ease-in-out flex-col justify-center items-center"
              >
                <VECModal
                  leftside={Energy}
                  rightsideList={NavModalListEnergy}
                />
                <button className="w-full justify-center items-center text-2xl hover:scale-105 transition duration-300 ease-in-out">
                  X
                </button>
              </div>
            )}
          </div>

          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsChargingModalOpen(true)}
            >
              <div className=" group-hover:scale-95 transition duration-300 ease-in-out flex justify-center items-center flex-col">
                Charging
                <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex   " />
              </div>
            </div>
            {isChargingModalOpen && (
              <div
                onClick={() => setIsChargingModalOpen(false)}
                className=" fixed inset-0 flex h-screen backdrop-blur transition duration-300 ease-in-out flex-col justify-center items-center"
              >
                <VECModal
                  leftside={Charging}
                  rightsideList={NavModalListCharging}
                />
                <button className="w-full justify-center items-center text-2xl hover:scale-105 transition duration-300 ease-in-out">
                  X
                </button>
              </div>
            )}
          </div>

          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsDiscoverModalOpen(true)}
            >
              <div className=" group-hover:scale-95 transition duration-300 ease-in-out flex justify-center items-center flex-col">
                Discover
                <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex   " />
              </div>
            </div>
            {isDiscoverModalOpen && (
              <div
                onClick={() => setIsDiscoverModalOpen(false)}
                className=" fixed inset-0 flex h-screen backdrop-blur transition duration-300 ease-in-out flex-col justify-center items-center"
              >
                <DSModal modalInfo={Discover} />
                <button className="w-full justify-center items-center text-xl hover:scale-105 transition duration-300 ease-in-out">
                  X
                </button>
              </div>
            )}
          </div>

          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsShoppingModalOpen(true)}
            >
              <div className=" group-hover:scale-95 transition duration-300 ease-in-out flex justify-center items-center flex-col">
                Shop
                <div className=" w-[5px] h-[5px] rounded-full bg-white hidden group-hover:flex   " />
              </div>
            </div>
            {isShoppingModalOpen && (
              <div
                onClick={() => setIsShoppingModalOpen(false)}
                className=" fixed inset-0 flex h-screen backdrop-blur transition duration-300 ease-in-out flex-col justify-center items-center"
              >
                <DSModal modalInfo={Shop} />
                <button className="w-full justify-center items-center text-[40px] hover:scale-105 transition duration-300 ease-in-out">
                  X
                </button>
              </div>
            )}
          </div>

          <div className="group"></div>
          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsVehiclesModalOpen(true)}
            ></div>
          </div>

          <div className="group">
            <div
              className=" cursor-pointer group flex items-center justify-center flex-col"
              onClick={(e) => setIsVehiclesModalOpen(true)}
            ></div>
          </div>
        </div>
        <div className=" w-2/12 flex items-center justify-end gap-3 pr-4">
          <button type="button">
            <AiOutlineQuestionCircle size={24} />
          </button>
          <button type="button">
            <BsGlobe size={24} />
          </button>
          <button type="button">
            <CgProfile size={24} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
