import data from "../data/data.json";

const BestServices = () => {
  return (
    <div
      style={{ backgroundImage: `url(${data.bestServices.bgContent})` }}
      className="relative bg-cover bg-center mx-auto px-6 py-12 min-h-screen flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mt-6 mb-10">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">{data.bestServices.title}
        <img src={data.bestServices.iconTitle} className="w-[35px] ms-2 h-[35px]" />
        </h1>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {data.bestServices.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-56 p-6 group hover:scale-105 transition duration-300 cursor-pointer rounded-lg bg-white shadow-lg"
          >
            <img className="w-16 h-16 mb-3" src={item.icon} alt={item.name} />
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestServices;
