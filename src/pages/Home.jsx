
import BestServices from "../components/homepage/BestServices";
import Destination from "../components/homepage/Destination";
import DiscountFirstTravel from "../components/homepage/DiscountFirstTravel";
import TopDestination from "../components/homepage/TopDestination";
import RecentCourses from "../components/homepage/PromoTravel";
import PromoTravel from "../components/homepage/RecomendedTravel";
import data from "../components/data/data.json"
const  Home = ()=> {
  return (
    <div>
<header className="bg-[#2D336B] md:py-10 h-[100vh] flex md:flex-row flex-col-reverse lg:flex-row items-center justify-between mx-auto w-full px-6 lg:px-28">
  {/* Left side */}
  <div className="max-w-md mt-6 z-30 bg-[url(../asset/homeAsset/splash.jpg)] text-center lg:text-left">
    {/* Icon paperplane */}
    <div className="w-[60px] hidden md:hidden lg:block animate-bounce h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rotate-6 absolute left-1/2 lg:left-[400px] top-[100px] lg:top-[170px]">
      <img src={data.home.icon} className="w-full h-full" alt="" />
    </div>

    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
      {data.home.title1} <br />
      {data.home.title2}
      <span className="text-amber-300">{data.home.title3}</span> <br />
      {data.home.title4}
    </h1>

    <p className="text-white mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
      {data.home.subTitle}
    </p>

    <button className="bg-gradient-to-r transition duration-200 from-blue-500 to-cyan-300 w-[100px] sm:w-[120px] hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500 text-slate-50 hover:text-slate-200 rounded-xl px-3 py-2 mt-4 text-sm sm:text-base md:text-lg">
      {data.home.button}
    </button>
  </div>

  {/* Right side */}
  <div className="w-full max-w-sm lg:mt-20 md:max-w-md lg:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] mx-auto lg:mx-0">
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Bubble */}
      <div className="buble bg-amber-500 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-full absolute"></div>
      
      <div className="relative z-20 w-[250px] sm:w-[300px] md:w-[200px] lg:w-[400px] h-[350px] sm:h-[400px] md:h-[500px]">
        <img className="w-full h-full rounded-sm object-cover" src={data.home.img1} alt="tourist" />
      </div>
    </div>
  </div>

  {/* Wave SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" className="absolute z-10 w-full right-0 bottom-[-73px]" viewBox="0 0 1440 320">
    <path fill="#7886C7" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,261.3C384,299,480,309,576,277.3C672,245,768,171,864,138.7C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-full right-0 bottom-[-73px]" viewBox="0 0 1440 320">
    <path fill="#A9B5DF" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,266.7C672,277,768,267,864,240C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
</header>


      <div className="px-36 bg-[#F5F5F5] pt-8 pb-70 relative">
        <Destination />
      </div>
      <div className="mb-20">
        <BestServices />
      </div>

      <div className="px-30  my-20 relative">
        <DiscountFirstTravel />
      </div>
      <div className="px-10">
      <RecentCourses/>
      </div>

      <div className="px-36 bg-[#F5F7FA] pb-70 relative">
        <PromoTravel/>
      </div>


      <div className="px-30 -mt-70 bg-[#F5F5F5] relative">
        <TopDestination/>
      </div>

    </div>
    
  );
}

export default Home;