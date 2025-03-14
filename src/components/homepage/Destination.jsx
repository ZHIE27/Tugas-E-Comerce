import data from "../data/data.json";
import Icon from "/assets/destination/location.svg";

const Destination = () => {
  return (
    <div className="container bg-[#F2EFE7] shadow-lg w-full lg:p-4 min-h-[50vh] h-auto">
      {/* TITLE */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center md:items-baseline text-center md:text-left">
          <div>
            <h1 className="font-bold text-[1.5rem] md:text-[2rem] text-black me-1">{data.destination.title}</h1>
            <h1 className="text-[.7rem] md:text-[.8rem]">{data.destination.subTitle}</h1>
          </div>
          <img className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" src={data.destination.icon} alt="plane" />
        </div>
        <p className="text-[.6rem] md:text-[.7rem] text-slate-700 text-center md:text-right mt-2 md:mt-0">
          {data.destination.rightTeks1} <br />{data.destination.rightTeks2}
        </p>
      </div>

      {/* LIST DESTINASI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {data.destination.listDestination.map((data, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[180px] md:w-[200px] cursor-pointer border-white border-2 h-[220px] sm:h-[230px] md:h-[250px] group m-2 sm:m-3 md:m-4 overflow-hidden rounded-lg"
          >
            {/* efek pas hover zoom */}
            <div
              className="w-full h-full bg-cover bg-center duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(${data.imgURL})` }}
            >
              <span className="bg-slate-500 opacity-0 transition duration-300 group-hover:opacity-50 w-full h-full absolute"></span>
            </div>

            {/* Overlay teks yang muncul saat hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded">
              <span className="bg-slate-50 rounded-md p-1 text-[.6rem] sm:text-[.7rem] font-bold absolute top-[5px] right-[3px]">
                20% OFF
              </span>
              <div className="absolute px-4 rounded-lg font-bold leading-4 flex text-white text-[1.4rem] sm:text-[1.6rem] top-[80px] sm:top-[95px]">
                <img src={Icon} alt="location icon" className="w-[18px] sm:w-[20px] invert h-[18px] sm:h-[20px] me-1" />
                {data.location}
              </div>
              <h2 className="text-[.9rem] sm:text-[1rem] font-bold text-white">{data.name}</h2>
              <p className="text-white text-[.7rem] sm:text-[.8rem] text-center">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
