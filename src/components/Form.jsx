import { useState } from "react";
import { MdOutlineAlternateEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";


export default function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    trip: ""
  });

  const tripOptions = [
    { value: "budget", label: "Budget Trip" },
    { value: "standard", label: "Standard Trip" },
    { value: "luxury", label: "Luxury Trip" }
  ];

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
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
    if (!formData.message.trim()) {
      newErrors.message = "Please send a message!";
    }
    if (!formData.trip) {
      newErrors.trip = "Please select a trip type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // https://script.google.com/macros/s/AKfycbxBGijtdggh2VTKliyfTPDeCPZ3URKBjRpohAGq3Z7WWuv96upheynhh-dtou7aaCInRg/exec
const handleSubmit = (e)=>{
    e.preventDefault()
    setIsLoading(true);
    if(!validate()){
      return
    }
    const url = "https://script.google.com/macros/s/AKfycbx5D7tsWA1GWPOUIwtLS1MiwEHzBD0xrQUjOO7tc3RgcDutNrn-JsPrAH1pUTzIWdgPKw/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Pesan=${e.target.message.value}&Trip=${e.target.trip.value}`)})
      .then(res=>res.text())
      .then(data=>{ 
        setShowAlert(true)
        setTimeout(function(){
          setShowAlert(false)
        }, 3000)
        setFormData({
          name: "",
          email: "",
          message: "",
          trip: ""
        });
        
      
    }).catch(error=>console.log(error))
    .finally(()=>(setIsLoading(false)));

    
  
  }
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4 sm:p-6 w-full max-w-md mx-auto my-10 bg-white/40 backdrop-blur-md rounded-md shadow-md">
      <h2 className="text-lg font-bold text-white mt-4 mb-4 text-center">BOOK NOW!</h2>
      {/* SUCCES ALERT */}
      {showAlert && (
        <div className="fixed top-0 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg transition-transform transform scale-100 animate-fade-in z-50">
          🎉 Form submitted successfully!
        </div>
      )}
      {/* LOADING ALERT */}
      {isLoading && (
          <div className="mt-2 fixed flex top-0 items-center gap-2 text-sm text-white">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          in the process of sending data
        </div>
      )}

      <form id="form" className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <div className="relative">
              <MdDriveFileRenameOutline
                className={`absolute right-3 bottom-2 text-xl transition-colors ${
                  focusedInput === "name" ? "text-blue-500" : "text-white"
                }`}
              />
              <input
                type="text"
                name="name"
                className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent text-white"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput("")}
                placeholder="Enter your name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <div className="relative">
              <MdOutlineAlternateEmail
                className={`absolute right-3 bottom-2 text-xl transition-colors ${
                  focusedInput === "email" ? "text-blue-500" : "text-white"
                }`}
              />
              <input
                type="email"
                name="email"
                className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent text-white"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput("")}
                placeholder="example@mail.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-white">Message</label>
            <div className="relative">
              <IoIosContact
                className={`absolute right-3 bottom-2 text-xl transition-colors ${
                  focusedInput === "message" ? "text-blue-500" : "text-white"
                }`}
              />
              <input
                type="text"
                name="message"
                className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent text-white"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput("")}
                placeholder="Your message here"
              />
            </div>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Trip List Dropdown */}
          <div>
            <label className="block text-sm font-medium text-white">Trip Type</label>
            <select
              name="trip"
              className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent text-white"
              value={formData.trip}
              onChange={handleChange}
            >
              <option value="" className="text-slate-900">Select a trip</option>
              {tripOptions.map((option) => (
                <option key={option.value} value={option.value} className="text-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
            {errors.trip && <p className="text-red-500 text-sm">{errors.trip}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
