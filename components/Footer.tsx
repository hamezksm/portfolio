import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src=""
            alt="Phoexa Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span>Powered by Phoexa</span>
        </div>
        <div className="text-center md:text-right">
          <p>Designed by Falzo</p>
          <p>daniel@phoexa.com</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
