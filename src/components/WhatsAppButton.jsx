import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../App.css';

const WhatsAppButton = ({
  phoneNumber = "6289668268755",
  message = "Halo, saya tertarik untuk menggunakan jasa travel",
  label = ""
}) => {

  const [showButton, setShowButton] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const visiblePaths = ["/home", "/about", "/contact", "/pricing"];
    setShowButton(visiblePaths.includes(location.pathname));
  }, [location]);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {showButton && (
        <button className="whatsapp-button" onClick={handleClick}>
          <FaWhatsapp className="whatsapp-icon" />
          {label && <span className="whatsapp-label">{label}</span>}
        </button>
      )}
    </>
  );
};

export default WhatsAppButton;
