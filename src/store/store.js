// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./serviceSlice";
import barbershopsReducer from "./barbershopsSlice";
import appointmentReducer from "./appointmentSlice";

const store = configureStore({
  reducer: {
    service: serviceReducer,
    barbershops: barbershopsReducer,
    appointments: appointmentReducer,
  },
});

export default store;
