"use client";

import { useState } from "react"; // Import useState hook
import Link from "next/link";
function YourComponent() {
  // State variables for each modal
  const [isVehiclesModalOpen, setIsVehiclesModalOpen] = useState(false);
  const [isEnergyModalOpen, setIsEnergyModalOpen] = useState(false);
  const [isChargingModalOpen, setIsChargingModalOpen] = useState(false);
  // ... add more state variables for other modals

  return (
    <div className="w-8/12 flex justify-center items-center gap-7 font-normal text-lg relative">
      {/* Vehicles */}
      <div className="group">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsVehiclesModalOpen(true)} // Open Vehicles modal on hover
          onMouseLeave={() => setIsVehiclesModalOpen(false)} // Close Vehicles modal on hover exit
        >
          <Link href="/vehicles">Vehicles</Link>
        </div>
        {/* Use the state to conditionally render the Vehicles modal */}
        {isVehiclesModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
            {/* Replace this with your actual Vehicles modal content */}
            <div className="bg-white p-4 rounded-lg">
              <h2>Vehicles Modal Content</h2>
              <p>More details about vehicles...</p>
            </div>
          </div>
        )}
      </div>

      {/* Energy */}
      <div className="group">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsEnergyModalOpen(true)} // Open Energy modal on hover
          onMouseLeave={() => setIsEnergyModalOpen(false)} // Close Energy modal on hover exit
        >
          <Link href="/energy">Energy</Link>
        </div>
        {/* Use the state to conditionally render the Energy modal */}
        {isEnergyModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
            {/* Replace this with your actual Energy modal content */}
            <div className="bg-white p-4 rounded-lg">
              <h2>Energy Modal Content</h2>
              <p>More details about energy...</p>
            </div>
          </div>
        )}
      </div>

      {/* Add similar blocks for other menu items (Charging, Discover, Shop) */}
    </div>
  );
}
