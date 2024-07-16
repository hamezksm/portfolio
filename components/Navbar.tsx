import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg text-neon-green p-4 z-10">
      <ul className="flex flex-row justify-end space-x-4">
        {["ABOUT", "SKILLS", "WORK", "PROJECTS", "CONTACT", "RESUME"].map(
          (item, index) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300 ease-in-out"
              >
                {index}. {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
