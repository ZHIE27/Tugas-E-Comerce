
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
<header className=" md:py-10 h-screen flex md:flex-row flex-col-reverse lg:flex-row items-center justify-around lg:justify-between w-full px-6 lg:px-28 bg-cover" style={{ backgroundImage: `url(${data.home.bgURL})` }}>
  {/* Left side */}
  <div className="max-w-md  z-30 text-center lg:text-left">
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

  {/* Wave SVG */}
</header>


      <div className="lg:px-36 px-7 bg-[#F5F5F5] pt-8 pb-70 relative">
        <Destination />
      </div>
      <div className="mb-20">
        <BestServices />
      </div>

      <div className="lg:px-30 px-7  my-20 relative">
        <DiscountFirstTravel />
      </div>
      <div className="px-10">
      <RecentCourses/>
      </div>

      <div className="lg:px-36 px-7 bg-[#F5F7FA] pb-70 relative">
        <PromoTravel/>
      </div>


      <div className="lg:px-30 px-7 -mt-70 bg-[#F5F5F5] relative">
        <TopDestination/>
      </div>

    </div>
    
  );
}

export default Home;