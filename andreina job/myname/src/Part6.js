import React from 'react';
import './Part6.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Part6() {
  return (
    <>
    <div id ="Total">
      <footer className="bg-black text-gray-400 py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-5 gap-10">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-lg mb-3" style={{color: 'blue'}}>About Us</h3>
            <p className="text-sm leading-relaxed mb-5">
              A job career refers to the long-term professional journey of an individual,
              encompassing various roles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-gray-700"><FaFacebookF /></a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-gray-700"><FaLinkedinIn /></a>
              <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-gray-700"><FaTwitter /></a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white text-lg mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white text-lg mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Documents</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-white text-lg mb-3">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Account Settings</a></li>
              <li><a href="#" className="hover:text-white">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Forum</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white text-lg mb-2">OFFICE LOCATION</h3>
            <p className="text-sm">Address Line Lorem Ipsum Dolore Sit Amet</p>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">News letter</h3>
            <div className="flex border border-gray-700 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent text-gray-900 w-full px-8 py-7 focus:outline-none"
              />
              <button className="px-4 bg-gray-800 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © By Ardania. All rights reserved.
        </div>
      </footer>
      </div>
    </>
  );
}

export default Part6;
