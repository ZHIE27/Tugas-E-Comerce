import { useState, useEffect } from "react";
import { MdOutlineAlternateEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import { useRef } from "react";


export default function FormValidation({ setShowAlert, selectedTrip }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    trip: selectedTrip || ""
  });
  
//KOMPONEN INVOICE
  const invoiceRef = useRef(null);
  
  const downloadInvoice = async () => {
    if (!invoiceRef.current) return;
  
    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true
      });
  
      canvas.toBlob((blob) => {
        if (!blob) return;
  
        const url = window.URL.createObjectURL(blob);
  
        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${invoice.id}.png`;
  
        document.body.appendChild(link);
        link.click();
  
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, "image/png");
  
    } catch (error) {
      console.error("Download error:", error);
    }
  };git remote 

  //Dummy fungsi payement gateaway
  const [invoice, setInvoice] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("Unpaid");


  const tripOptions = [
    { value: "budget", label: "Budget Trip" },
    { value: "standard", label: "Standard Trip" },
    { value: "luxury", label: "Luxury Trip" }
  ];

  const [errors, setErrors] = useState({});
  const [focusedInput, setFocusedInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      trip: selectedTrip
    }));
  }, [selectedTrip]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.trip) newErrors.trip = "Please select a trip type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    const price =
      formData.trip === "budget"
        ? 500000
        : formData.trip === "standard"
        ? 1000000
        : 2000000;
  
    const invoiceData = {
      id: "INV" + Date.now(),
      name: formData.name,
      email: formData.email,
      trip: formData.trip,
      message: formData.message,
      price
    };
  
    setInvoice(invoiceData);
    setPaymentStatus("Unpaid");
  };

  //FUNGSI UNTUK KIRIM KE SHEET
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!validate()) return;

  //   setIsLoading(true);
  //   const url = "https://script.google.com/macros/s/AKfycbw6BhzmJA0-hR5XVAxWX_CIwkVEz1Ai5PgSuDjel3RuwbC5XSYxOpYCedW3O8CrLkzU9g/exec";

  //   fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body:
  //       `formType=formA&` +
  //       `Name=${formData.name}&` +
  //       `Email=${formData.email}&` +
  //       `Pesan=${formData.message}&` +
  //       `Trip=${formData.trip}`
  //   })
  //     .then((res) => res.text())
  //     .then(() => {
  //       setShowAlert(true);
  //       setTimeout(() => setShowAlert(false), 3000);
  //       setFormData({ name: "", email: "", message: "", trip: "" });
  //     })
  //     .catch((error) => alert(error))
  //     .finally(() => setIsLoading(false));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  if (invoice) {
    return (
      <div
  ref={invoiceRef}
  className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg my-10 relative z-10"
>
  
        <h2 className="text-2xl font-bold text-center mb-4">
          Travel Booking Invoice
        </h2>
  
        <div className="space-y-2 text-gray-700">
          <p><b>Invoice ID:</b> {invoice.id}</p>
          <p><b>Name:</b> {invoice.name}</p>
          <p><b>Email:</b> {invoice.email}</p>
          <p><b>Trip:</b> {invoice.trip}</p>
          <p><b>Total:</b> Rp {invoice.price.toLocaleString()}</p>
        </div>
  
        {/* QR Code Dummy */}
        <div className="flex flex-col items-center mt-6">
  
          <p className="font-semibold mb-2">Scan QR to Pay</p>
  
          <QRCodeCanvas
            value={`Invoice:${invoice.id}|Amount:${invoice.price}`}
            size={180}
          />
  
          <p className="text-sm text-gray-500 mt-2">
            Dummy QR Payment
          </p>
  
        </div>
  
        {/* Status */}
        <div className="mt-4 text-center">
          <p className="text-lg">
            Status :
            <span
              className={
                paymentStatus === "Paid"
                  ? "text-green-600 font-bold ml-2"
                  : "text-red-500 font-bold ml-2"
              }
            >
              {paymentStatus}
            </span>
          </p>
        </div>
  
        {paymentStatus === "Unpaid" && (
          <button
            onClick={() => setPaymentStatus("Paid")}
            className="mt-4 w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
          >
            I Have Paid
          </button>
        )}
      <button
      onClick={downloadInvoice}
      className="mt-4 w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
    >
      Download Invoice
    </button>
      </div>
      
    );
  }

  return (
    <div className="p-4 sm:p-6 w-full max-w-md mx-auto my-10 bg-white/40 backdrop-blur-md rounded-md shadow-md">
      <h2 className="text-lg font-bold text-white mt-4 mb-4 text-center">BOOK NOW!</h2>

      <form id="form" className="w-full pb-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <div className="relative">
              <MdDriveFileRenameOutline
                className={`absolute right-3 bottom-2 text-xl ${focusedInput === "name" ? "text-blue-500" : "text-white"}`}
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

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <div className="relative">
              <MdOutlineAlternateEmail
                className={`absolute right-3 bottom-2 text-xl ${focusedInput === "email" ? "text-blue-500" : "text-white"}`}
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

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-white">Message</label>
            <div className="relative">
              <IoIosContact
                className={`absolute right-3 bottom-2 text-xl ${focusedInput === "message" ? "text-blue-500" : "text-white"}`}
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

          {/* Trip Dropdown */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition mt-4"
          >
            Submit
          </button>

          {/* Loading */}
          {isLoading && (
            <div className="mt-2 flex items-center gap-2 text-sm text-white">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              in the process of sending data
            </div>
          )}
        </div>
      </form>
    </div>
    
  );
}
