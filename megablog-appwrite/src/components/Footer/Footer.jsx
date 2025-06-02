import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white border-t-2 border-gray-600">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-400">&copy; 2025. All Rights Reserved by Usman Jamil.</p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Company</h3>
            <ul>
              <li className="mb-4"><Link className="hover:text-blue-400 transition-all duration-300" to="/">Features</Link></li>
              <li className="mb-4"><Link className="hover:text-blue-400 transition-all duration-300" to="/">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Support</h3>
            <ul>
              <li className="mb-4"><Link className="hover:text-blue-400 transition-all duration-300" to="/">Help</Link></li>
              <li><Link className="hover:text-blue-400 transition-all duration-300" to="/">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400">Legals</h3>
            <ul>
              <li className="mb-4"><Link className="hover:text-blue-400 transition-all duration-300" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-blue-400 transition-all duration-300" to="/">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;