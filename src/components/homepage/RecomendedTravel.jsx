
import data from "../data/data.json";


const ReccTravel = () => {
  return (
    <section className="bg-[#F5F7FA] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
          <div className="bg-gradient-to-br from-[#009688] p-4 to-[#26A69A] shadow-md px-6 flex items-center">
            <div className="w-2/3 text-white">
              <h2 className="text-2xl font-bold mb-2">{data.travel.title}</h2>
              <p className="text-sm">{data.travel.subTitle}</p>
              <button className="mt-4 mb-2 cursor-pointer hover:bg-slate-300 px-4 py-2 bg-white text-[#009688] font-semibold rounded-md">{data.travel.button} →</button>
            </div>
          </div>
          <div className="bg-white p-5 shadow-md">
            <h2 className="text-lg font-semibold mb-4">{data.travel.listTitle}</h2>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {data.travel.listcontent.map((data, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-7 h-9 flex items-center justify-center bg-blue-200 text-blue-600 font-bold rounded-full">
                    {data.id}
                  </span>
                  <span className="ml-2">{data.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*Recomendend Destinations */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mb-2">{data.travel.tilte2}</h1>
          <img className="w-[30px] h-[30px]" src={data.travel.icon} alt="icon" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.travel.recDestination.map((data, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <img src={data.imgUrl} alt={data.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{data.name}</h3>
              <p className="text-sm text-gray-600">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReccTravel;
