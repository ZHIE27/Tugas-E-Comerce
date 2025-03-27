
import { Star } from "lucide-react";
import data from "../data/data.json"




const TopDestination = () => {
  return (
    <section className="bg-[#FFFFFF] border border-[#E9EAF0] px-8 py-8">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{data.topDestination.title}</h2>

        {/* Grid Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.topDestination.destination.map((data, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md border border-[#E9EAF0]">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text text-start font-semibold">{data.name}</h3>
                <div className="flex justify-center items-center text-gray-600 mt-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="ml-1 font-semibold">{data.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">{data.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* footer */}
        <p className="text-gray-500 text-sm mt-8">
          {data.topDestination.title}{" "}
          <span className="text-red-500 font-medium cursor-pointer">{data.topDestination.footer}</span>
        </p>
      </div>
    </section>
  );
};

export default TopDestination;
