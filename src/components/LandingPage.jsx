import React, { useState } from "react";
import Sidebar from "./Sidebar";

const LandingPage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar Component */}
      <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />

      <main className="flex-1 p-8 text-white">
        {/* Menu Button - Always visible on all screen sizes */}
        <button
          className="p-4 text-2xl font-semibold text-white bg-light-gold rounded-lg shadow-md hover:bg-dark-gold transition-all duration-300"
          onClick={toggleSidebar}
        >
          Menu
        </button>

        <h1 className="text-4xl font-bold text-center mt-10 text-light-gold">
          Welcome to BarberHub
        </h1>
        <p className="text-center mt-5 text-lg text-white">
          Find your perfect barbershop and book an appointment
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
