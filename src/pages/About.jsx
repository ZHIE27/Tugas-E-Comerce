import data from "../components/data/data.json";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* TOP CONTENT */}
      <div className="w-full bg-[#205781] text-center flex items-center min-h-screen px-4">
        <div className="wrap w-full flex flex-col items-center h-40">
          <p className="text-white text-4xl md:text-6xl font-bold">{data.aboutPage.title[0]}</p>
          <div className="flex flex-wrap justify-center">
            <p className="text-white text-4xl md:text-6xl font-bold">{data.aboutPage.title[1]}</p>
            <p className="text-cyan-400 text-4xl md:text-6xl font-bold ms-3 md:ms-7">
              {data.aboutPage.title[2]}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-full items-center min-h-screen">
          <div className="w-xl min-h-40 h-auto p-6 flex items-center rounded-md mx-4 bg-amber-50">
            <p className="italic">{data.aboutPage.desc}</p>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section id="our-story" className="w-full flex flex-col-reverse md:flex-row p-7 justify-around items-center bg-slate-100 min-h-screen">
        <div className="text-center shadow-lg w-full md:w-xl p-6 rounded-md">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">{data.aboutPage.ourStory}</h1>
          <p>{data.aboutPage.descStory}</p>
        </div>
        <div className="w-full md:w-xl flex items-center justify-center h-80 md:h-screen">
          <img className="w-60 md:w-80 h-60 md:h-80" src={data.aboutPage.icon1} alt="woman" />
        </div>
      </section>

      {/* OUR VISION */}
      <section id="our-vision" className="w-full flex flex-col md:flex-row p-7 justify-around lg:justify-center items-center bg-white min-h-screen">
        <div className="w-full md:w-xl flex relative right-10 items-center justify-center h-80 md:h-screen">
          <img className="w-60 md:w-80 h-60 md:h-80" src={data.aboutPage.icon2} alt="vision" />
        </div>
        <div className="text-center shadow-lg w-full md:w-xl p-6 lg:min-h-[350px] rounded-md">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">{data.aboutPage.ourVision}</h1>
          <p>{data.aboutPage.descVision}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
