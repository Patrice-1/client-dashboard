import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom"; // Step 1: Import useNavigate

// Ensure you import the required Leaflet CSS
import "leaflet/dist/leaflet.css";

const Barbershops = () => {
  const barbershops = useSelector((state) => state.barbershops.list);
  const navigate = useNavigate(); // Step 2: Initialize the navigate function

  // Handle the "Go Back" button click
  const handleGoBack = () => {
    navigate("/"); // This will navigate the user to the root path
  };

  return (
    <div className="p-8 bg-black text-white">
      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 p-2 bg-light-gold text-black rounded-full hover:bg-dark-gold"
      >
        &larr; Go Back
      </button>

      <h2 className="text-2xl font-bold text-light-gold">Our Barbershops</h2>
      <ul className="mt-5 space-y-6">
        {barbershops.map((barbershop) => (
          <li key={barbershop.id} className="flex space-x-4">
            <img
              src={barbershop.image}
              alt={barbershop.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-light-gold">
                {barbershop.name}
              </h3>
              <p className="text-sm text-white">{barbershop.location}</p>
              <p className="mt-2 text-gray-400">{barbershop.description}</p>

              {/* Render a map for each barbershop */}
              <div className="mt-4 h-64">
                <MapContainer
                  center={[barbershop.latitude, barbershop.longitude]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[barbershop.latitude, barbershop.longitude]}
                    icon={
                      new Icon({
                        iconUrl: "https://via.placeholder.com/24",
                        iconSize: [24, 24],
                      })
                    }
                  >
                    <Popup>
                      <strong>{barbershop.name}</strong>
                      <br />
                      {barbershop.location}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Barbershops;
