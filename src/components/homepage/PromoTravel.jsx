
import { Star, User, Clock } from "lucide-react";
import data from "../data/data.json"
const PromoTravel = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h2 className="text-3xl flex items-center font-bold text-center mb-8">Current Travel Promo Packages <img src={data.travelPackages.icon} className="w-[35px] ms-2 h-[35px]" /></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.travelPackages.travel.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-xs font-semibold bg-gray-200 px-2 py-1 rounded">{data.category}</span>
              <h3 className="text-sm font-semibold mt-2">{data.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-orange-500 font-bold">{data.price}</span>
                <div className="flex items-center gap-1 text-gray-600 text-xs">
                  <Star className="text-yellow-500" size={14} /> {data.rating}
                  <User size={14} /> {data.travelers}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bagian Promo Utama */}
      <div className=" shadow-lg rounded-lg p-6 mt-10 mx-auto max-w-lg">
        <span className="text-xs font-semibold bg-blue-200 px-2 py-1 rounded">CITY TOUR</span>
        <h3 className="text-xl font-semibold mt-2">Tokyo Delight: 6 Days 5 Nights Exploration</h3>
        <p className="text-sm text-black mt-2">Experience the wonders of Tokyo</p>
        <div className="flex flex-wrap items-center gap-4 mt-2 text-black text-sm">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" size={14} /> 5.0 (2.3K travelers)
          </div>
          <div className="flex items-center gap-1">
            <User size={14} /> 2.3K travelers
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} /> 6 Days
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-bold">$799</span>
          <span className="text-gray-300 line-through">$999</span>
          <span className="text-red-500 bg-red-100 px-2 py-1 text-xs rounded">20% OFF</span>
        </div>
        <h4 className="text-lg font-semibold mt-4">Package Highlights</h4>
        <ul className="list-disc pl-4 text-sm text-black mt-2">
          <li>5-star accommodation included</li>
          <li>Guided city tours with local experts</li>
          <li>Exclusive access to cultural events</li>
        </ul>
        <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600">
          Book Now
        </button>
        <button className="w-full mt-2 bg-gray-200 py-2 rounded-lg font-semibold text-gray-800 hover:bg-gray-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PromoTravel;
