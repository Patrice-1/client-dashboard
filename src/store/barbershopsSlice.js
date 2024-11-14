// src/store/barbershopsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Dummy data for barbershops with added latitude and longitude
const initialState = {
  list: [
    {
      id: 1,
      name: "The Fade Room",
      location: "123 Main St, Springfield",
      description: "A modern barbershop with a fresh, clean style.",
      image: "https://via.placeholder.com/150",
      latitude: 40.7128, // Example latitude
      longitude: -74.006, // Example longitude
    },
    {
      id: 2,
      name: "Sharp Cuts Barbershop",
      location: "456 Oak Rd, Springfield",
      description: "Classic cuts with a touch of sophistication.",
      image: "https://via.placeholder.com/150",
      latitude: 40.73061, // Example latitude
      longitude: -73.935242, // Example longitude
    },
    {
      id: 3,
      name: "The Barber’s Lounge",
      location: "789 Pine Ave, Springfield",
      description: "Relaxed atmosphere with skilled barbers.",
      image: "https://via.placeholder.com/150",
      latitude: 40.758, // Example latitude
      longitude: -73.9855, // Example longitude
    },
    {
      id: 4,
      name: "Fresh Fade Barbershop",
      location: "101 Maple Dr, Springfield",
      description: "Where fresh fades and styles meet.",
      image: "https://via.placeholder.com/150",
      latitude: 40.748817, // Example latitude
      longitude: -73.985428, // Example longitude
    },
  ],
};

const barbershopsSlice = createSlice({
  name: "barbershops",
  initialState,
  reducers: {},
});

export default barbershopsSlice.reducer;
