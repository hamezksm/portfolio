const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-neon-green text-4xl mb-8">Get In Touch {`{`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">Have a project in mind?</p>
          <p className="mb-4">
            My inbox is always open for new opportunities. Feel free to contact
            me for any inquiries you may have!
          </p>
          <div className="space-y-2">
            <p>
              <span className="text-neon-green">◉</span> Myphz
            </p>
            <p>
              <span className="text-neon-green">◉</span>{" "}
              danielscanu45@outlook.it
            </p>
            <p>
              <span className="text-neon-green">◉</span> Daniel Scanu
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-800 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 bg-gray-800 rounded"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-2 bg-gray-800 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-neon-green text-dark-bg px-6 py-2 rounded"
          >
            Submit Message →
          </button>
        </form>
      </div>
      <p className="text-neon-green mt-4">{`}`}</p>
    </section>
  );
};

export default Contact;
