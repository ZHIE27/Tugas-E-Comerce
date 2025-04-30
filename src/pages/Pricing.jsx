import data from "../components/data/data.json";
import Form from "../components/Form";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(""); // untuk auto select di form
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleCardClick = (tripName) => {
    const tripValue = tripName
    setSelectedTrip(tripValue);
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
    console.log(selectedTrip)
  };

  return (
    <div>
      {/* PRICING SECTION */}
      <div
        id="price"
        className="w-full min-h-screen flex justify-center items-center flex-col p-6 py-20 md:p-20 bg-[#007074]"
      >
        <div className="wrap flex justify-center items-center flex-col text-center">
          <h1 className="text-[1.5rem] md:text-[1.7rem] text-white font-bold">
            {data.pricingPage.title}
          </h1>
          <p className="text-[1rem] md:text-[1.1rem] text-white">
            {data.pricingPage.subTitle}
          </p>
        </div>

        {/* CARDS */}
        <div className="w-full flex justify-center items-center mt-4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch">
            {data.pricingPage.pricingCards.map((card, index) => (
              <div
                key={index}
                onClick={() => {
                  handleCardClick(card.name)
                  setSelectedTrip(card.tripType)
                  }
                }
                className="w-full mb-10 sm:w-[300px] rounded-md relative p-6 h-auto min-h-[500px] mx-auto bg-[#D1F8EF] shadow-lg flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center font-bold mb-4">
                    <h1 className="text-[1.4rem] md:text-[1.5rem] text-[#205781]">
                      {card.name}
                    </h1>
                    <img
                      className="w-8 h-8 ml-1"
                      src={card.icon}
                      alt={card.icon}
                    />
                  </div>

                  {/* Price */}
                  <span className="text-[1.8rem] md:text-[2rem] text-[#205781] font-semibold">
                    {card.price}
                  </span>
                  <hr className="my-2" />

                  {/* Features List */}
                  <ul className="p-2">
                    {card.include.map((feature, i) => (
                      <li
                        className="my-2 font-semibold text-sm sm:text-base"
                        key={i}
                      >
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

      {/* FORM SECTION */}
      {showAlert && (
        <div className="fixed top-19 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-transform transform scale-100 animate-fade-in z-50">
          🎉 Form submitted successfully!
        </div>
      )}
      <div
        id="form"
        className="w-full flex justify-center min-h-screen items-center px-4 relative"
      >
        <img
          src={data.home.bgURL}
          alt="bgimage"
          className="w-full h-full object-cover absolute"
        />
        <Form setShowAlert={setShowAlert} selectedTrip={selectedTrip} />
      </div>
    </div>
  );
};

export default Pricing;
