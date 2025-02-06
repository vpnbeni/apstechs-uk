export default function ContactCards({ onSelect }) {
  const offices = [
    {
      country: "United Kingdom",
      address:
        "Suite-12, 1st Floor, Cautrac Services Office Great Horkesley, Colchester CO6 4EJ",
    },
    {
      country: "India",
      address:
        "10/58, First Floor, Industrial Area Kirti Nagar, New Delhi-110015",
    },
    {
      country: "Uzbekistan",
      address: "Mukimi street 178, Tashkent city, Uzbekistan, 100012",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Our Global Offices
      </h2>
      <div className="flex flex-col gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            onClick={() => onSelect(office.country)}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {office.country}
            </h3>
            {/* <p className="text-gray-300 text-sm mb-4">{office.address}</p> */}
            <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
              <span>View Openings</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
