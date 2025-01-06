import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r  text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold">
            <span className="text-yellow-400">Strapi Integration</span > 
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-lg font-medium  text-black hover:text-yellow-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/Our-Team"
            className="text-lg font-medium hover:text-yellow-400 transition duration-200 text-black"
          >
            Team
          </Link>
          <Link
            href="/About-Us"
            className="text-lg font-medium hover:text-yellow-400 transition duration-200 text-black"
          >
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-yellow-400 text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-blue-700 text-white px-6 py-4"
      >
        <Link
          href="/"
          className="block py-2 text-lg font-medium hover:text-yellow-400 transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/Our-Team"
          className="block py-2 text-lg font-medium hover:text-yellow-400 transition duration-200"
        >
          Team
        </Link>
        <Link
          href="/About-Us"
          className="block py-2 text-lg font-medium hover:text-yellow-400 transition duration-200"
        >
          About Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
