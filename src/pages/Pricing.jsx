import data from "../components/data/data.json";

const Pricing = () => {
  return (
    <div>
      <div className="w-full h-full p-10 bg-[#578FCA]">
        {/* HEADER */}
        <div className="wrap text-center">
          <h1 className="text-[1.7rem] text-white font-bold">
            {data.pricingPage.title}
          </h1>
          <p className="text-[1.1rem] text-white">{data.pricingPage.subTitle}</p>
        </div>

        {/* CARDS */}
        <div className="w-full min-h-screen mt-4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch">
            {data.pricingPage.pricingCards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-[300px] rounded-md relative p-6 h-[500px] md:h-[500px] min-h-[500px] mx-auto bg-[#D1F8EF] shadow-lg flex flex-col justify-between"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center font-bold mb-4">
                    <h1 className="text-[1.5rem] text-[#205781]">{card.name}</h1>
                    <img className="w-8 h-8 ml-3" src={card.icon} alt={card.icon} />
                  </div>

                  {/* Price */}
                  <span className="text-[2rem] text-[#205781] font-semibold">{card.price}</span>
                  <hr className="my-2" />

                  {/* Features List */}
                  <ul className="p-2">
                    {card.include.map((feature, i) => (
                      <li className="my-2 font-semibold text-sm sm:text-base" key={i}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button className="w-full bg-white py-2 font-semibold rounded-md px-6 shadow-md hover:bg-gray-200">
                    {card.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BASIC PRICING SECTION */}
      <div className="w-full h-screen bg-cyan-300"></div>
    </div>
  );
};

export default Pricing;
