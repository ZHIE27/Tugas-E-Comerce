import { useState } from "react";
import data from "../components/data/data.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false)
  // const [focusedInput, setFocusedInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


const handleSubmit = (e)=>{
    e.preventDefault()
    if(!validate()){
      return;
    }
    setIsLoading(true)
    const url = "https://script.google.com/macros/s/AKfycbw6BhzmJA0-hR5XVAxWX_CIwkVEz1Ai5PgSuDjel3RuwbC5XSYxOpYCedW3O8CrLkzU9g/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`formType=formB&` +
    `Name=${e.target.name.value}&` +
    `Email=${e.target.email.value}&` +
    `Pesan=${e.target.message.value}`)})
      .then(res=>res.text())
      .then(()=>{ 
        setShowAlert(true)
        setTimeout(()=>{
          setShowAlert(false)
        },3000)
        setFormData({
          name: "",
          email: "",
          message: ""
        });
    }).catch(error=>console.log(error))
    .finally( ()=> setIsLoading(false));


    
  
  };
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="flex flex-col lg:flex-row w-full min-h-max">
            {/* ALERT */}
            {showAlert && (
                <div className="fixed top-19 right-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded shadow-lg transition-all duration-300 transform scale-100 animate-fade-in z-50">
                🎉 Form submitted successfully!
              </div>
      )}
      {/* FORM SECTION */}
      <div className="w-full max-w-[1200px] relative py-5 bg-gradient-to-br from-[#FFF5E4] to-[#FFE8C8] pt-20 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-lg p-7 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
          <div className="contact w-full">
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold animate-gradient bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-[length:200%_auto] bg-clip-text text-transparent">
              {data.contactPage.title[0]}
            </h1>
            <p className="text-slate-700 font-semibold">{data.contactPage.title[1]}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 p-2 hover:border-gray-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mt-6 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 p-2 hover:border-gray-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full mt-6 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 p-2 resize-none hover:border-gray-400"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            {/* BUTTON */}
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-900 to-gray-700 py-2 hover:from-gray-800 hover:to-gray-600 text-white rounded-md mt-6 w-full transition-all duration-300 transform hover:scale-[1.02]"
            >
              {data.contactPage.button}
            </button>
            {/* LOADING */}
            {isLoading && (
          <div className="mt-2 flex items-center absolute bottom-7 gap-2 text-sm text-black">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          in the process of sending data
        </div>
      )}
          </form>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="relative w-full lg:w-[45%] min-h-[350px] bg-gradient-to-br from-[#FFA725] to-[#FF8C00] flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-gradient-to-br from-gray-900 to-gray-800 p-7 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl lg:absolute lg:-left-[20%] lg:top-[15%]">
          <h1 className="text-[1.8rem] md:text-[2rem] mb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
            {data.contactPage.infoTilte}
          </h1>
          {data.contactPage.info.map((info, index) => (
            <div key={index} className="text-slate-100 flex mb-3 items-center transition-all duration-300 hover:translate-x-2">
              <img src={info.icon} className="w-[20px] h-[20px] filter invert mr-3" alt="" />
              <p>{info.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
