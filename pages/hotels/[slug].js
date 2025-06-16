
import React from "react";
import { useRouter } from "next/router";
import hotels from "../../data/hotels";

export default function HotelPage() {
  const router = useRouter();
  const { slug } = router.query;
  const hotel = hotels.find((h) => h.slug === slug);

  if (!hotel) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 bg-[#2C3E50] text-white text-3xl font-bold text-center cursor-pointer" onClick={() => router.push("/")}>UrbanStay Hotels</header>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotel.images.map((img, index) => (
            <img key={index} src={img} alt={hotel.name} className="rounded-xl object-cover w-full h-80" />
          ))}
        </div>

        <h1 className="text-3xl font-bold mt-6 mb-2">{hotel.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{hotel.location}</p>
        <p className="mb-4">{hotel.fullDescription}</p>
        <p className="font-bold text-[#1ABC9C] text-xl mb-6">{hotel.price} / night</p>

        <h2 className="text-xl font-semibold mb-2">Amenities:</h2>
        <ul className="list-disc list-inside mb-6">
          {hotel.amenities.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </div>

      <footer className="p-4 bg-[#2C3E50] text-white text-center mt-10">
        &copy; 2025 UrbanStay Hotels. All rights reserved.
      </footer>
    </div>
  );
}
