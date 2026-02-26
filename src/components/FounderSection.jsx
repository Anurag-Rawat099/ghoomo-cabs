export default function FounderSection() {
  const founder = [
    {
      name: "Rawat",
      role: "Founder – Ghoomo Cabs",
      image: "/uploads/founder.jpg",
      description:
        "Born and raised in Mussoorie, I started Ghoomo Cabs with one mission — to make hill travel safe, easy, and memorable for every tourist. With deep knowledge of local routes and a passion for hospitality, Ghoomo Cabs has grown into a trusted travel partner for visitors across Uttarakhand.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet the <span className="text-yellow-500">Founder</span>
        </h2>

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {founder.map((f, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 w-full">
              {/* Image */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-yellow-400"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-lg md:shadow-none text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{f.name}</h3>
                  <p className="text-yellow-500 font-semibold mb-3">{f.role}</p>
                  <i className="text-gray-600 text-sm leading-relaxed">{f.description}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}