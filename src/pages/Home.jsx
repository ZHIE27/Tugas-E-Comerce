import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import data from "../components/data/data.json";


const BestServices = lazy(() => import("../components/homepage/BestServices"));
const Destination = lazy(() => import("../components/homepage/Destination"));
const DiscountFirstTravel = lazy(() => import("../components/homepage/DiscountFirstTravel"));
const TopDestination = lazy(() => import("../components/homepage/TopDestination"));
const RecentCourses = lazy(() => import("../components/homepage/PromoTravel"));
const PromoTravel = lazy(() => import("../components/homepage/RecomendedTravel"));

const LazyComponent = ({ Component, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div ref={ref} className={className}>
      <Suspense fallback={
        <div className="text-center py-10">
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    }>
        {inView ? <Component /> : <div className="text-center py-10">
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        </div>}
      </Suspense>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header
        className="md:py-10 h-screen flex md:flex-row flex-col-reverse lg:flex-row items-center justify-center lg:justify-center w-full px-6 lg:px-28 bg-left bg-cover"
      >
        <img src={data.home.bgURL} alt="bgimage" className="w-full h-full absolute" />
        <div className="max-w-md flex-col z-30 text-center lg:text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {data.home.title1} <br />
            {data.home.title2}
            <span className="text-amber-300">{data.home.title3}</span> <br />
            {data.home.title4}
          </h1>

          <p className="text-white mt-3 my-4 text-sm sm:text-base md:text-lg leading-relaxed">
            {data.home.subTitle}
          </p>

          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="bg-gradient-to-r font-bold transition duration-200 from-blue-500 to-cyan-300 w-[100px] sm:w-[120px] hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500 text-slate-50 hover:text-slate-200 rounded-xl px-3 py-2 mt-4 text-sm sm:text-base md:text-lg"
          >
            {data.home.button}
          </button>
        </div>
      </header>

      {/* Lazy Loaded Components */}
      <LazyComponent Component={Destination} className="lg:px-36 items-center justify-center px-7 bg-[#F5F5F5] py-4 lg:flex lg:items-center lg:h-screen relative" />
      <LazyComponent Component={BestServices} className="mb-20" />
      <LazyComponent Component={DiscountFirstTravel} className="lg:px-30 px-7 my-20 relative" />
      <LazyComponent Component={RecentCourses} className="px-10 min-h-auto" />
      <LazyComponent Component={PromoTravel} className="lg:px-36 px-7 bg-[#F5F7FA] relative" />
      <LazyComponent Component={TopDestination} className="lg:px-30 px-7 bg-[#F5F5F5] pb-4" />
    </div>
  );
};

export default Home;
