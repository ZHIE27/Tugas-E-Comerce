import termsData from '../components/data/data.json';

const Terms = () => {
  const { title, description, termsPoints } = termsData.terms;

  return (
    <div className="min-h-max px-4 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>

        <div className="bg-white border rounded-xl p-6 shadow-md text-sm text-gray-700 space-y-3">
          <ul className="list-disc list-inside space-y-1">
            {termsPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
