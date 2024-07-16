const Experience = () => {
  const experiences = [
    { name: "Freelance", year: 2019 },
    { name: "Pianobit", year: 2020 },
    { name: "ContinuumLab", year: 2021 },
    { name: "Phoexa", year: 2022 },
  ];

  return (
    <section id="work" className="py-20">
      <h2 className="text-neon-green text-4xl mb-8">Experience {`{`}</h2>
      <p className="mb-8">
        I had the opportunity to work for many companies with many different
        technologies, from small startups to bigger companies.
      </p>
      <div className="relative">
        <div className="absolute left-0 w-1 bg-neon-green h-full"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="ml-8 mb-8 relative">
            <div className="absolute -left-10 w-4 h-4 rounded-full bg-neon-green"></div>
            <h3 className="text-neon-green text-xl">{exp.name}</h3>
            <p>{exp.year}</p>
          </div>
        ))}
        <p className="absolute bottom-0 left-0">Present</p>
      </div>
      <p className="text-neon-green mt-4">{`}`}</p>
    </section>
  );
};

export default Experience;
