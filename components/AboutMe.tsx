const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-neon-green text-4xl mb-8">About Me {`{`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            I&aposm Daniel - a freelance programmer and web developer with over 4+
            years of experience as self-taught. Currently based in Italy.
          </p>
          <p className="mb-4">
            <span className="text-neon-green">▲</span> I use Arch btw
          </p>
        </div>
        <div>
          <p className="mb-4">
            Passionate about computer science from a young age, I&aposve spent over
            4 years honing my skills through a diverse array of projects,
            ranging from Discord bots to complex web applications.
          </p>
          <p className="mb-4">
            My key strength lies in breaking down intricate problems into
            manageable tasks, a skill crucial for delivering robust,
            maintainable code on large-scale projects.
          </p>
          <p>
            I thrive on challenges, constantly seeking opportunities to enhance
            my abilities, and have predominantly pursued self-directed learning,
            enabling me to swiftly grasp and adapt to new technologies with
            autonomy.
          </p>
        </div>
      </div>
      <p className="text-neon-green mt-4">{`}`}</p>
    </section>
  );
};

export default AboutMe;
