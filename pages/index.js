
import React from "react";
import { useRouter } from "next/router";
import hotels from "../data/hotels";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 bg-[#2C3E50] text-white text-3xl font-bold text-center">
        UrbanStay Hotels
      </header>

      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory">
          {hotels.map((hotel, index) => (
            <div key={index} className="snap-center flex-shrink-0 w-full h-96 relative">
              <img src={hotel.images[0]} alt={hotel.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <p>{hotel.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="shadow-lg hover:scale-105 transition cursor-pointer" onClick={() => router.push(`/hotels/${hotel.slug}`)}>
            <img src={hotel.images[0]} alt={hotel.name} className="rounded-t-2xl w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <p className="text-sm mb-2">{hotel.location}</p>
              <p className="mb-4">{hotel.description}</p>
              <p className="font-bold text-[#1ABC9C] mb-4">{hotel.price} / night</p>
              <button className="bg-[#1ABC9C] text-white py-2 px-4 rounded-lg">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="p-4 bg-[#2C3E50] text-white text-center mt-10">
        &copy; 2025 UrbanStay Hotels. All rights reserved.
      </footer>
    </div>
  );
}
