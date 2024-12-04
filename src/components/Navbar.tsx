'use client';
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-24 h-20 object-contain relative top-12 left-6"
          />
          {/* Responsive Text */}
          <span className="hidden md:block text-lg font-bold text-blue-200 pl-11">
          Tuition Free Education Program on Latest Technologies
          </span>
          <span className="block md:hidden text-sm font-bold text-blue-200">
            Tuition free program
          </span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#apply" className="hover:text-yellow-400">
              Apply
            </a>
          </li>
          <li>
            <a href="#jobs" className="hover:text-yellow-400">
              Jobs
            </a>
          </li>
          <li>
            <a href="#result" className="hover:text-yellow-400">
              Result
            </a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-yellow-400"
            >
              <span>Courses</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white text-blue-900 shadow-md rounded-md">
                <li>
                  <a href="#course1" className="block px-4 py-2 hover:bg-blue-100">
                    Course 1
                  </a>
                </li>
                <li>
                  <a href="#course2" className="block px-4 py-2 hover:bg-blue-100">
                    Course 2
                  </a>
                </li>
                <li>
                  <a href="#course3" className="block px-4 py-2 hover:bg-blue-100">
                    Course 3
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
