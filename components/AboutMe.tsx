const AboutMe = () => {
  return (
    <section
      id="about"
      className="p-20 flex flex-col justify-center min-h-screen"
    >
      <div className="">
        <h2 className="text-blue-500 text-4xl mb-8">About Me {`{`}</h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mx-4 mb-4">
              I&apos;m James - a freelance programmer and web developer with
              over 4+ years of experience as self-taught. Currently based in
              Nairobi, Kenya.
            </p>
            <p className="text-lg mx-4 mb-4">
              <span className="text-blue-600 mr-3">▲</span>I&apos;m full stack by the
              way
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">
              Passionate about computer science from a young age, I&apos;ve
              spent over 4 years honing my skills through a diverse array of
              projects, ranging from simple web applications to complex mobile
              applications.
            </p>
            <p className="text-lg mb-4">
              My key strength lies in breaking down intricate problems into
              manageable tasks, a skill crucial for delivering robust,
              maintainable code on large-scale projects.
            </p>
            <p>
              I thrive on challenges, constantly seeking opportunities to
              enhance my abilities, and have predominantly pursued self-directed
              learning, enabling me to swiftly grasp and adapt to new
              technologies with autonomy.
            </p>
          </div>
        </div>
        <br />
        <br />
        <p className="text-blue-500 text-4xl mt-4">{`}`}</p>
      </div>
    </section>
  );
};

export default AboutMe;
