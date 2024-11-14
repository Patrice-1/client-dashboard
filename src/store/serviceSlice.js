// src/store/serviceSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: null, // Service will be selected first
  selectedSubService: null, // Sub-service selected after choosing the service
  selectedSpecialist: null, // Specialist selected after sub-service
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    selectService: (state, action) => {
      state.selectedService = action.payload; // Set selected service
      state.selectedSubService = null; // Clear sub-service as service changed
      state.selectedSpecialist = null; // Clear specialist as service changed
    },
    selectSubService: (state, action) => {
      state.selectedSubService = action.payload; // Set selected sub-service
    },
    selectSpecialist: (state, action) => {
      state.selectedSpecialist = action.payload; // Set selected specialist
    },
    clearSelections: (state) => {
      state.selectedService = null;
      state.selectedSubService = null;
      state.selectedSpecialist = null;
    },
  },
});

export const {
  selectService,
  selectSubService,
  selectSpecialist,
  clearSelections,
} = serviceSlice.actions;

export default serviceSlice.reducer;
