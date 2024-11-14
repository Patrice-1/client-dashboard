import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={toggleSidebar}
    >
      <div
        className={`absolute left-0 top-0 w-64 bg-dark-gold p-5 transition-transform transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={toggleSidebar} className="mb-4 text-xl text-white">
          Close
        </button>
        <ul className="space-y-4 text-white">
          <li>
            <Link to="/barbershops" className="hover:text-light-gold">
              Barbershops
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-light-gold">
              Services
            </Link>
          </li>
          {/* Dropdown Menu */}
          <li>
            <button
              className="w-full text-left hover:text-light-gold"
              onClick={handleDropdownToggle}
            >
              Appointments
            </button>
            {dropdownOpen && (
              <ul className="pl-4 space-y-2">
                <li>
                  <Link
                    to="/appointments/new"
                    className="text-white hover:text-orange"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointments/view"
                    className="text-white hover:text-orange"
                  >
                    View Appointments
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
