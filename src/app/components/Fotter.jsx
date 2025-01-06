

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand and About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Strapi Integration</h2>
            <p className="text-gray-400">
              Streamline your content management with our seamless integration powered by Strapi and Next.js. Build faster, smarter, and scalable digital experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Our-Team"
                  className="hover:text-yellow-400 transition duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/About-Us"
                  className="hover:text-yellow-400 transition duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="hover:text-yellow-400 transition duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact and Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <span className="block">Email: support@strapiintegration.com</span>
              <span className="block">Phone: +1 234 567 890</span>
            </p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.946 13.946 0 011.671 3.149 4.922 4.922 0 003.18 9.723a4.908 4.908 0 01-2.229-.616v.061a4.926 4.926 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.927 4.927 0 004.604 3.419A9.868 9.868 0 010 19.54a13.905 13.905 0 007.548 2.212c9.051 0 14.002-7.496 14.002-13.986 0-.214-.005-.428-.014-.641A9.936 9.936 0 0024 4.557z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.847v-3.622h2.972V8.413c0-2.946 1.796-4.548 4.417-4.548 1.255 0 2.335.093 2.651.135v3.075h-1.818c-1.426 0-1.7.677-1.7 1.67v2.188h3.398l-.442 3.622h-2.956V24h5.789c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.23.792 24 1.77 24h20.46C23.208 24 24 23.23 24 22.272V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.894V9.038H7.12v11.414zM5.507 7.76a1.85 1.85 0 110-3.7 1.85 1.85 0 110 3.7zm14.978 12.692h-3.226v-5.573c0-1.33-.026-3.043-1.851-3.043-1.853 0-2.136 1.445-2.136 2.938v5.678H9.048V9.038h3.1v1.558h.043c.432-.817 1.493-1.678 3.075-1.678 3.29 0 3.895 2.167 3.895 4.982v6.552z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Strapi Integration. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

