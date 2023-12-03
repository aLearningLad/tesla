import ExploreVehicleCard from "@/components/misc/ExploreVehicleCard";
import Model3Trim from "@/components/misc/Model3Trim";
import ModelStrim from "@/components/misc/ModelStrim";
import ModelXtrim from "@/components/misc/ModelXtrim";
import ModelYtrim from "@/components/misc/ModelYtrim";
import Image from "next/image";
import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
import { PiRowsDuotone } from "react-icons/pi";

const ExploreModels = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" w-full h-[310vh]">
      {/* HEADER SECTION */}
      <header className=" h-[20vh] w-full flex justify-start pl-[20px] pt-[20px]">
        <Link
          href="/"
          className="flex items-center h-[85%] hover:bg-white hover:translate-y-1 transition duration-300 justify-center w-2/12 bg-neutral-400 rounded-[12px]"
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
      {/* UPPER PART */}
      <div className=" w-full h-[20vh] flex ">
        <div className=" w-8/12 h-full flex justify-start items-center">
          <h1 className=" h-full w-8/12 flex items-center justify-start p-5 text-5xl font-sans font-semibold">
            Inventory
          </h1>
        </div>
        <div className=" w-4/12 h-full flex gap-3">
          <div className="w-6/12 flex justify-center items-center">
            <button>Relevence</button>
          </div>
          <div className=" w-6/12 flex justify-start items-center gap-4">
            <button>
              <BsFillGridFill size={20} />
            </button>
            <button>
              <PiRowsDuotone size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* CAR CATALOGUE */}
      <div className=" h-[280vh] bg-neutral-200 px-4 py-4 flex gap-3">
        {/* LEFT SIDE */}
        <div className=" w-4/12 h-[65%] bg-neutral-50 flex flex-col items-center py-[40px]">
          <div className=" w-10/12">
            <h3 className=" text-neutral-500 text-[16px] font-semibold font-sans">
              Registration Province
            </h3>
            <p className=" text-neutral-500 text-[14px] font-semibold font-sans">
              Where will you be registering the vehicle?
            </p>
            <input
              type="text"
              placeholder="eg. Gauteng"
              className=" w-10/12 px-2 outline-none h-[45px] rounded-md"
            />
          </div>
          <div className=" text-neutral-500 flex flex-col w-10/12">
            <h1>Search within</h1>
            <select
              name=""
              id=""
              className=" h-[40px] rounded-md w-10/12 px-2 outline-none"
            >
              <option value="">Select...</option>
              <option value="">Within Gauteng</option>
              <option value="">Within North West</option>
              <option value="">Within Limpopo</option>
              <option value="">Within Mpumalanga</option>
              <option value="">Within Free State</option>
              <option value="">Within Eastern Cape</option>
              <option value="">Within Northen Cape</option>
              <option value="">Within Western Cape</option>
              <option value="">Within KZN</option>
            </select>
          </div>
          <div className="flex justify-center w-10/12 h-[35vh] pt-6">
            <div className="w-1/2">
              <h3 className=" font-sans text-[16px] text-neutral-500 font-semibold">
                Models
              </h3>
              <div className=" h-full w-full py-1">
                <div className=" flex font-sans text-[16px] text-neutral-500 h-1/4 w-full items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Model S</label>
                </div>
                <div className=" flex font-sans text-[16px] text-neutral-500 h-1/4 items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Model Y</label>
                </div>
                <div className=" flex font-sans text-[16px] text-neutral-500 h-1/4 items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Model X</label>
                </div>
                <div className=" flex font-sans text-[16px] text-neutral-500 h-1/4 items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Model 3</label>
                </div>
              </div>
              {/* FUNCTION TO DISPLAY TRIM OPTIONS ACC. TO SELECTED MODEL, HERE!! */}

              {/* COLOR OPTIONS */}
              <div className=" w-full h-[100px] flex flex-col gap-1">
                <h1 className="font-sans text-[16px] text-neutral-500 font-semibold">
                  Exterior Paint
                </h1>
                <div className=" flex justify-between h-2/6 ">
                  <button className=" w-[30px] h-[30px] bg-neutral-300 rounded-full"></button>
                  <button className="w-[30px] h-[30px] bg-red-500 rounded-full"></button>
                  <button className=" w-[30px] h-[30px] bg-blue-600 rounded-full"></button>
                  <button className="w-[30px] h-[30px] bg-black rounded-full "></button>
                </div>
              </div>
              <div className=" w-full h-[100px] flex flex-col gap-1 ">
                <h1 className="font-sans text-[16px] text-neutral-500 font-semibold">
                  Interior Color
                </h1>
                <div className=" flex justify-start gap-2 h-2/6 ">
                  <button className=" w-[30px] h-[30px] bg-neutral-300 rounded-full"></button>
                  <button className="w-[30px] h-[30px] bg-black rounded-full "></button>
                </div>
              </div>
              <div>
                <h1 className="font-sans text-[16px] text-neutral-500 font-semibold">
                  Wheels
                </h1>
                <div className=" w-full h-[130px] flex flex-col gap-1">
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">19" Wheels</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">20" Wheels</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">21" Wheels</label>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=" font-sans text-[16px] text-neutral-500 font-semibold">
                  Autopilot
                </h1>
                <div className=" w-full h-[130px] flex flex-col gap-1">
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Autopilot</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Advanced Autopilot</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Full Self-Driving</label>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-sans text-[16px] text-neutral-500 font-semibold">
                  Seat Layout
                </h1>
                <div className=" w-full h-[130px] flex flex-col gap-1">
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Five Seat Interior</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Seven Seat Interior </label>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-sans text-[16px] text-neutral-500 font-semibold">
                  Additional Options
                </h1>
                <div className=" w-full h-[130px] flex flex-col gap-1">
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Performance Upgrade</label>
                  </div>
                  <div className=" flex gap-1 items-center font-sans text-[16px] text-neutral-500">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Tow Hitch</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <h3 className="font-sans text-[16px] text-neutral-500 font-semibold">
                Inventory Type
              </h3>
              <div className="h-full w-full pt-[18px] gap-3">
                <div className="flex font-sans text-[16px] text-neutral-500 items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">New</label>
                </div>
                <div className="flex font-sans text-[16px] text-neutral-500 items-center">
                  <input type="radio" name="" id="" />
                  <label htmlFor="">Used</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE WITH VEHICLES */}
        <div className=" w-8/12 h-full bg-neutral-100 flex flex-wrap justify-center gap-4">
          {cards.map((card) => (
            <ExploreVehicleCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreModels;
