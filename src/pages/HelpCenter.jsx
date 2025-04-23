import helpCenterData from "../components/data/data.json";

const HelpCenter = () => {
  const {contact} = helpCenterData.faqs;
  return (
    <div className="min-h-max bg-gray-50 px-4 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-gray-500">
          Browse through the information based on your travel phase to find helpful answers.
        </p>

        <div className="space-y-8">
          {helpCenterData.helpCenter.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-3">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white hover:shadow-md transition duration-300 border rounded-xl p-4"
                  >
                    <summary className="font-medium cursor-pointer">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OPTIONAL: CONTACT INFO, seperti di halaman FAQ */}
              {/* CONTACT INFO */}
      <div className="bg-white mt-6 p-6 rounded-2xl shadow-md text-center flex flex-col gap-4">
        <h3 className="text-xl font-bold">{contact.title}</h3>
        <p className="text-gray-600">{contact.description}</p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-2 text-sm text-gray-700">
          <div>{contact.email.label} <a href={contact.email.link} className="text-blue-600 underline">{contact.email.value}</a></div>
          <div>{contact.whatsapp.label} {contact.whatsapp.value}</div>
          <div>{contact.address.label} {contact.address.value}</div>
          <div>{contact.hours.label} {contact.hours.value}</div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
