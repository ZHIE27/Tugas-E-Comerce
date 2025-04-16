import data from "../components/data/data.json";
import Form from "../components/Form";
import { useEffect, useState } from "react";


const Pricing = () => {

  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  },[]);


  return (
    <div>
      {/* TOP CONTENT */}
      <div
        className="flex items-center bg-cover h-screen justify-center"
        style={{ backgroundImage: `url(${data.pricingPage.bgImage})` }}
        >
        <div className="w-full bg-slate-900/50 h-full flex justify-center items-center">
          <div className="max-w-[90%] lg:max-w-[70%] p-6 md:p-10 flex items-center text-center flex-col justify-center">
            <p
              className="font-bold mb-4 text-white text-[1.8rem] md:text-[2rem] underline decoration-double"
              >
              {data.pricingPage.topTitle[0]}
            </p>
            <p className="text-white text-[1rem] md:text-[1.1rem]">
              {data.pricingPage.topTitle[1]}
            </p>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <div id="price" className="w-full min-h-screen flex justify-center items-center flex-col p-6 py-20 md:p-20 bg-[#007074]">
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
                className="w-full mb-10 sm:w-[300px] rounded-md relative p-6 h-auto min-h-[500px] mx-auto bg-[#D1F8EF] shadow-lg flex flex-col justify-between"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center font-bold mb-4">
                    <h1 className="text-[1.4rem] md:text-[1.5rem] text-[#205781]">
                      {card.name}
                    </h1>
                    <img
                      className="w-8 h-8 ml-3"
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
      {/* ALERT */}
      {showAlert && (
                <div className="fixed top-19 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-transform transform scale-100 animate-fade-in z-50">
                🎉 Form submitted successfully!
              </div>
      )}
      <div id="form" className="w-full flex justify-center min-h-screen items-center  px-4">
      <img src={data.home.bgURL} alt="bgimage" className="w-full h-full object-cover absolute" />
          <Form setShowAlert={setShowAlert}/>
      </div>
    </div>
  );
};

export default Pricing;
