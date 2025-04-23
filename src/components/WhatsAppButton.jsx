import { FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const WhatsAppButton = ({
  phoneNumber = "6289668268755",
  message = "Halo, saya tertarik untuk menggunakan jasa travel",
  label = ""
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
      {label && <span className="whatsapp-label">{label}</span>}
    </div>
  );
};

export default WhatsAppButton;
