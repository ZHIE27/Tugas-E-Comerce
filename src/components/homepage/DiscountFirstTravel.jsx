
import data from "../data/data.json"

const DiscountFirstTravel = () => {
  return (
    <section className="px-6 md:px-10 py-10 bg-[#FFFFFF] border border-[#E9EAF0] w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center md:text-left">
        {data.discountVoucher.title}
        <img src={data.discountVoucher.icon} className="w-[35px] ms-2 h-[35px]" />
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {data.discountVoucher.voucher.map((data, index) => (
          <div key={index} className="flex bg-white cursor-pointer shadow-md overflow-hidden rounded-lg">
            <div className="w-1/3 md:w-1/4 bg-gray-200 flex items-center justify-center">
              {data.imgUrl ? (
                <img src={data.imgUrl} alt={data.voucherTitle} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
              )}
            </div>
            <div className="p-4 flex-1">
              <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">
                {data.discount}
              </span>
              <h3 className="text-lg font-semibold mt-2">{data.voucherTitle}</h3>
              <p className="text-gray-500 text-sm mt-1">{data.desc}</p>
              <p className="text-gray-400 text-xs mt-2 italic">{data.terms}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountFirstTravel;
