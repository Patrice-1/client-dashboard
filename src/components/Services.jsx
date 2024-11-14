import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectService,
  selectSubService,
  selectSpecialist,
  clearSelections,
} from "../store/serviceSlice";
import { useNavigate } from "react-router-dom";

// Sample services data
const servicesData = {
  shave: {
    subServices: {
      standardShave: {
        price: "$25",
        specialists: [
          {
            name: "John Doe",
            experience: "5 years",
            image: "https://via.placeholder.com/100x100?text=John+Doe",
          },
          {
            name: "Jane Smith",
            experience: "3 years",
            image: "https://via.placeholder.com/100x100?text=Jane+Smith",
          },
        ],
      },
      deluxeShave: {
        price: "$40",
        specialists: [
          {
            name: "Mark Wilson",
            experience: "8 years",
            image: "https://via.placeholder.com/100x100?text=Mark+Wilson",
          },
          {
            name: "Nina Adams",
            experience: "6 years",
            image: "https://via.placeholder.com/100x100?text=Nina+Adams",
          },
        ],
      },
      hotTowelShave: {
        price: "$35",
        specialists: [
          {
            name: "Lucas King",
            experience: "7 years",
            image: "https://via.placeholder.com/100x100?text=Lucas+King",
          },
          {
            name: "Amelia White",
            experience: "4 years",
            image: "https://via.placeholder.com/100x100?text=Amelia+White",
          },
        ],
      },
    },
  },
  massage: {
    subServices: {
      relaxingMassage: {
        price: "$40",
        specialists: [
          {
            name: "David Green",
            experience: "10 years",
            image: "https://via.placeholder.com/100x100?text=David+Green",
          },
          {
            name: "Sophia White",
            experience: "8 years",
            image: "https://via.placeholder.com/100x100?text=Sophia+White",
          },
        ],
      },
      deepTissueMassage: {
        price: "$60",
        specialists: [
          {
            name: "Isabella Brown",
            experience: "12 years",
            image: "https://via.placeholder.com/100x100?text=Isabella+Brown",
          },
          {
            name: "Matthew Clark",
            experience: "9 years",
            image: "https://via.placeholder.com/100x100?text=Matthew+Clark",
          },
        ],
      },
      hotStoneMassage: {
        price: "$70",
        specialists: [
          {
            name: "Olivia Black",
            experience: "15 years",
            image: "https://via.placeholder.com/100x100?text=Olivia+Black",
          },
          {
            name: "James White",
            experience: "6 years",
            image: "https://via.placeholder.com/100x100?text=James+White",
          },
        ],
      },
    },
  },
  scrub: {
    subServices: {
      basicScrub: {
        price: "$30",
        specialists: [
          {
            name: "Alice Brown",
            experience: "7 years",
            image: "https://via.placeholder.com/100x100?text=Alice+Brown",
          },
          {
            name: "Bob Lee",
            experience: "4 years",
            image: "https://via.placeholder.com/100x100?text=Bob+Lee",
          },
        ],
      },
      luxuryScrub: {
        price: "$50",
        specialists: [
          {
            name: "Emma White",
            experience: "5 years",
            image: "https://via.placeholder.com/100x100?text=Emma+White",
          },
          {
            name: "Charlie Black",
            experience: "6 years",
            image: "https://via.placeholder.com/100x100?text=Charlie+Black",
          },
        ],
      },
      exfoliatingScrub: {
        price: "$45",
        specialists: [
          {
            name: "Mia Green",
            experience: "4 years",
            image: "https://via.placeholder.com/100x100?text=Mia+Green",
          },
          {
            name: "Ethan Carter",
            experience: "7 years",
            image: "https://via.placeholder.com/100x100?text=Ethan+Carter",
          },
        ],
      },
      sugarScrub: {
        price: "$55",
        specialists: [
          {
            name: "Zoe Miller",
            experience: "9 years",
            image: "https://via.placeholder.com/100x100?text=Zoe+Miller",
          },
          {
            name: "Benjamin Scott",
            experience: "6 years",
            image: "https://via.placeholder.com/100x100?text=Benjamin+Scott",
          },
        ],
      },
    },
  },
};

const Services = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedService, selectedSubService, selectedSpecialist } =
    useSelector((state) => state.service);

  // Step 1: Handle Service Selection
  const handleServiceSelect = (service) => {
    dispatch(selectService(service));
  };

  // Step 2: Handle Sub-service Selection
  const handleSubServiceSelect = (subService) => {
    dispatch(selectSubService(subService));
  };

  // Step 3: Handle Specialist Selection
  const handleSpecialistSelect = (specialist) => {
    dispatch(selectSpecialist(specialist));
  };

  // Step 4: Handle Appointment Booking
  const handleBookAppointment = () => {
    if (!selectedService || !selectedSubService || !selectedSpecialist) {
      alert("Please select a service, sub-service, and specialist first.");
      return;
    }
    // Navigate to the Appointment page
    navigate("/appointments");
  };

  return (
    <div className="p-8 bg-black text-white">
      {/* Go Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 p-2 bg-light-gold text-black rounded-full hover:bg-dark-gold"
      >
        &larr; Go Back
      </button>

      <h2 className="text-2xl font-bold text-light-gold">Our Services</h2>

      {/* Service Selection */}
      <div className="mt-5">
        <h3 className="text-lg text-white">Choose a Service</h3>
        <div className="space-x-4 mt-3">
          {Object.keys(servicesData).map((serviceKey) => (
            <button
              key={serviceKey}
              onClick={() => handleServiceSelect(serviceKey)}
              className={`px-4 py-2 rounded-md ${
                selectedService === serviceKey
                  ? "bg-deep-gold" // Apply deep gold for selected service
                  : "bg-dark-gold"
              }`}
            >
              {serviceKey.charAt(0).toUpperCase() + serviceKey.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Service Selection */}
      {selectedService && (
        <div className="mt-8">
          <h3 className="text-lg text-white">Choose a Sub-service</h3>
          <div className="space-x-4 mt-3">
            {Object.keys(servicesData[selectedService].subServices).map(
              (subServiceKey) => (
                <button
                  key={subServiceKey}
                  onClick={() => handleSubServiceSelect(subServiceKey)}
                  className={`px-4 py-2 rounded-md ${
                    selectedSubService === subServiceKey
                      ? "bg-deep-gold" // Apply deep gold for selected sub-service
                      : "bg-dark-gold"
                  }`}
                >
                  {subServiceKey.charAt(0).toUpperCase() +
                    subServiceKey.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Specialist Selection */}
      {selectedSubService && (
        <div className="mt-8">
          <h3 className="text-lg text-white">Choose a Specialist</h3>
          <div className="space-x-4 mt-3">
            {servicesData[selectedService].subServices[
              selectedSubService
            ].specialists.map((specialist) => (
              <button
                key={specialist.name}
                onClick={() => handleSpecialistSelect(specialist)}
                className={`px-4 py-2 rounded-md ${
                  selectedSpecialist?.name === specialist.name
                    ? "bg-deep-gold" // Apply deep gold for selected specialist
                    : "bg-dark-gold"
                }`}
              >
                {specialist.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Book Appointment Button */}
      {selectedService && selectedSubService && selectedSpecialist && (
        <div className="mt-8">
          <button
            onClick={handleBookAppointment}
            className="bg-light-gold text-black py-2 px-6 rounded-full hover:bg-dark-gold"
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
