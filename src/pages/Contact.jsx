import data from "../components/data/data.json";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* FORM SECTION */}
      <div className="w-full max-w-[1200px] bg-[#FFF5E4] flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-lg md:w-3/4 lg:w-[560px] h-auto lg:min-h-[400px] md:h-3/4 p-7 shadow-lg rounded-lg">
          <div className="contact w-full">
            <h1 className="text-[2rem] md:text-[2.5rem] text-gray-900 font-bold">
              {data.contactPage.title[0]}
            </h1>
            <p className="text-slate-700 font-semibold">{data.contactPage.title[1]}</p>
          </div>
          <form action="" className="mt-6 flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-black focus:outline-none focus:border-blue-500 transition duration-300 p-2"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mt-6 border-b border-black focus:outline-none focus:border-blue-500 transition duration-300 p-2"
            />

            <textarea
              placeholder="Message"
              rows="1"
              className="w-full mt-2 border-b border-black focus:outline-none focus:border-blue-500 transition duration-300 p-2 resize-none"
            ></textarea>

            <button className="bg-gray-900 py-2 hover:bg-gray-700 text-white rounded-md mt-6 w-full">
              {data.contactPage.button}
            </button>
          </form>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="relative w-full lg:w-[45%] min-h-[350px] bg-[#FFA725] flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-gray-900 p-7 rounded-lg shadow-lg 
            lg:absolute lg:-left-[20%] lg:top-[15%]">
          <h1 className="text-[1.8rem] md:text-[2rem] mb-4 font-semibold text-slate-100">
            {data.contactPage.infoTilte}
          </h1>
          {data.contactPage.info.map((info, index) => (
            <div key={index} className="text-slate-100 flex mb-3 items-center">
              <img
                src={info.icon}
                className="w-[20px] h-[20px] filter invert mr-3"
                alt=""
              />
              <p>{info.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
