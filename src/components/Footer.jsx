import { useNavigate } from "react-router-dom";
import footerData from "./data/data.json"; // Impor data dari file JSON

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(footerData.footer.topCallToAction.buttons[0].action);
  };

  return (
    <footer className="bg-[#1D2026] min-h-max text-white">
      {/* Top Call to Action */}
      <div className="border-b border-gray-700 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold">
          {footerData.footer.topCallToAction.heading}
        </h2>
        <div className="mt-4 flex justify-center gap-4">
          {footerData.footer.topCallToAction.buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.action === "/pricing#form" ? handleClick : undefined}
              className={`${button.style} px-5 py-2 rounded-lg font-semibold`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="border-b border-gray-700 py-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Socials */}
        <div>
          <img
            src={footerData.footer.mainFooterSection.logo.src}
            alt={footerData.footer.mainFooterSection.logo.alt}
            className="h-10 ms-7 transform scale-300"
          />
          <p className="text-gray-400 mt-2">{footerData.footer.mainFooterSection.logo.description}</p>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-semibold">{footerData.footer.mainFooterSection.categories.heading}</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            {footerData.footer.mainFooterSection.categories.items.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">{footerData.footer.mainFooterSection.quickLinks.heading}</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            {footerData.footer.mainFooterSection.quickLinks.links.map((link, index) => (
              <li key={index} className={link.includes("Grasfam") ? "flex items-center gap-1" : ""}>
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Support & App Downloads */}
        <div>
          <h3 className="font-semibold">{footerData.footer.mainFooterSection.support.heading}</h3>
          <ul className="text-gray-400 space-y-2 mt-2">
            {footerData.footer.mainFooterSection.support.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">{footerData.footer.mainFooterSection.support.appDownload.heading}</h3>
            <div className="flex gap-2 mt-2">
              {footerData.footer.mainFooterSection.support.appDownload.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`${button.style} px-3 py-2 rounded-lg`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-4 text-center text-gray-400 text-sm">
        {footerData.footer.bottomFooter.text}
      </div>
    </footer>
  );
};

export default Footer;
