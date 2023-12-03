"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { demoImages } from "@/utils/DemoBooking";
import { BiSearchAlt2 } from "react-icons/bi";

const DemoDrive = () => {
  const [selectedImg, setSelectedImg] = useState(demoImages[0]);

  const chooseModel3 = () => {
    setSelectedImg(demoImages[3]);
  };

  const chooseModelS = () => {
    setSelectedImg(demoImages[2]);
  };

  const chooseModelY = () => {
    setSelectedImg(demoImages[1]);
  };

  const chooseModelX = () => {
    setSelectedImg(demoImages[0]);
  };

  return (
    <div className="w-full h-fit lg:h-[210vh] flex items-center flex-col">
      <header className=" h-[10%] w-full pt-3 pl-4 flex justify-start lg:pl-[20px] lg:pt-[20px]">
        <Link
          href="/"
          className="flex lg:p-1 p-2 items-center h-[40px] lg:h-[85%] hover:bg-white hover:translate-y-1 transition duration-300 justify-center w-fit lg:w-2/12 bg-neutral-400 rounded-[12px]"
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
      </header>

      <div className=" w-full lg:w-7/12 flex items-center pt-[50px] md:pt-[60px] lg:pt-[70px] flex-col">
        <div className=" w-full">
          <h1 className=" w-full lg:w-7/12 text-2xl md:text-3xl flex lg:text-[44px] lg:justify-normal justify-center font-sans font-semibold">
            Schedule a Demo Drive
          </h1>
          <p className="w-full text-[14px] flex lg:justify-start justify-center px-24 lg:px-0 lg:text-[18px]">
            Demo Drive a tesla at a store nearest to you. Drivers must be 18
            years of age <br /> or older.
          </p>
        </div>
        <div className=" w-full h-[50vh] flex">
          <div className=" flex flex-col w-4/12 h-full gap-3 items-center justify-center">
            <button
              onClick={chooseModelY}
              className="rounded-md h-[60px] w-8/12 hover:scale-90 hover:bg-neutral-300 duration-300 transition bg-neutral-400"
            >
              Model Y
            </button>
            <button
              onClick={chooseModelX}
              className=" hover:bg-neutral-300 duration-300 hover:scale-90 transition bg-neutral-400 rounded-md h-[60px] w-8/12"
            >
              Model X
            </button>
            <button
              onClick={chooseModel3}
              className=" hover:bg-neutral-300 hover:scale-90 duration-300 transition bg-neutral-400 rounded-md h-[60px] w-8/12"
            >
              Model 3
            </button>
            <button
              onClick={chooseModelS}
              className=" hover:bg-neutral-300 duration-300 transition hover:scale-90 bg-neutral-400 rounded-md h-[60px] w-8/12"
            >
              Model S
            </button>
          </div>
          <div className=" w-8/12 h-full flex justify-center items-center">
            <Image
              src={selectedImg}
              width={500}
              height={550}
              alt="demodriveimg"
              className=""
            />
          </div>
        </div>
        <div className=" w-full justify-center pl-[50px]">
          <h1 className=" text-[30px] font-semibold font-sans">
            Find Time and Location
          </h1>
          <div className=" font-sans text-[18px] text-neutral-600">
            <h3 className="">
              Input your zip code to search for Tesla Showrooms and schedule a
              Test Drive
            </h3>
            <div className="flex w-7/12 h-[40px] items-center bg-neutral-300 gap-2 rounded-[7px] pl-2">
              <BiSearchAlt2 size={28} />
              <input
                type="text"
                placeholder="Find a location"
                className=" rounded-[7px] w-full lg:w-7/12 h-[90%] bg-neutral-300 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full text-neutral-600 text-lg px-5 md:px-3 lg:px-0 lg:pl-[50px] pt-[70px]">
          <h1 className=" text-2xl lg:text-[32px] text-black font-sans font-semibold">
            Contact Information
          </h1>

          <div className="flex w-full gap-[20px] mb-[30px] pt-[25px]">
            <div className="flex flex-col text-start w-full h-[70px]">
              <label
                className=" font-semibold font-sans text-neutral-500"
                htmlFor=""
              >
                First Name
              </label>
              <input
                type="text"
                className=" bg-neutral-300 w-full lg:w-9/12 h-5/6 rounded-md outline-none p-2"
              />
            </div>
            <div className="flex flex-col text-start w-full h-[70px]">
              <label
                className="font-semibold font-sans text-neutral-500"
                htmlFor=""
              >
                Last Name
              </label>
              <input
                type="text"
                className=" bg-neutral-300 w-full lg:w-9/12 h-5/6 rounded-md outline-none p-2"
              />
            </div>
          </div>
          <div className="flex gap-[24px] w-full">
            <div className="flex flex-col  text-start w-full h-[70px]">
              <label
                className="font-semibold font-sans text-neutral-500"
                htmlFor=""
              >
                Email Address
              </label>
              <input
                type="text"
                className="  bg-neutral-300 w-full lg:w-9/12 h-5/6 rounded-md outline-none p-2"
              />
            </div>
            <div className="flex flex-col text-start w-full h-[70px]">
              <label
                className="font-semibold font-sans text-neutral-500"
                htmlFor=""
              >
                Phone Number
              </label>
              <input
                type="text"
                className="  bg-neutral-300 w-full lg:w-9/12 h-5/6 rounded-md outline-none p-2"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col w-full">
          <div className=" h-[90px] items-center text-xl mt-[38px] pl-[48px] flex w-full justify-start gap-[10px] h">
            <input
              type="checkbox"
              className=" w-[40px] h-3/6 outline-none p-2"
            />
            <label
              className="font-semibold font-sans text-neutral-500"
              htmlFor=""
            >
              I'm interested in Solar and Powerwall
            </label>
          </div>
          <div className=" h-[200px] w-10/12 flex justify-center">
            <p className=" w-full  text-[13px] md:text-[14px] lg:w-11/12 pl-[16px] text-neutral-500">
              By clicking "Schedule Demo Drive", I authorize Tesla to contact me
              about this request as well as with more information about Tesla
              products, services and regional events via the contact information
              I provide. I understand calls or texts may use automatic or
              computer-assisted dialing or pre-recorded messages. Normal message
              and data rates apply. I can opt out at any time in the Tesla app
              or by unsubscribing. This is not required for purchase.
            </p>
          </div>
        </div>
        <div className="w-full items-center lg:items-start flex justify-between flex-col h-[120px] px-4 lg:px-0 lg:pl-[30px]">
          <button className=" h-fit py-3 lg:p-0 lg:h-[40%] text-white hover:scale-105 transition duration-300 text-[13px] md:text-[14px] lg:text-[16px] font-sans font-semibold rounded-[4px] bg-blue-600 w-full lg:w-4/12">
            Schedule Demo Drive
          </button>
          <footer className=" w-full flex justify-center items-center py-7 md:py-5 lg:py-2">
            <div className=" w-full lg:w-9/12 h-full flex justify-center gap-2 md:gap-3 lg:gap-0 lg:justify-between text-neutral-500">
              <div>Tesla &copy; 2023</div>
              <div>Privacy & Legal</div>
              <div>Contact</div>
              <div className="lg:flex hidden">Careers</div>
              <div className="lg:flex hidden">Get Newsletter</div>
              <div className=" lg:flex hidden">Locations</div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DemoDrive;
