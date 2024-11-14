import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addAppointment,
  updateAppointment,
  deleteAppointment,
} from "../store/appointmentSlice";

const Appointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedService, selectedSubService, selectedSpecialist } =
    useSelector((state) => state.service);
  const { appointments } = useSelector((state) => state.appointments);

  // State for handling the form inputs and the editing state
  const [appointmentForm, setAppointmentForm] = useState({
    date: "",
    time: "",
  });
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({ ...appointmentForm, [name]: value });
  };

  // Handle appointment form submission (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!appointmentForm.date || !appointmentForm.time) {
      alert("Please choose a date and time.");
      return;
    }

    const appointment = {
      service: selectedService,
      subService: selectedSubService,
      specialist: selectedSpecialist.name,
      date: appointmentForm.date,
      time: appointmentForm.time,
    };

    if (editingAppointment) {
      // Update existing appointment
      dispatch(
        updateAppointment({ ...appointment, id: editingAppointment.id })
      );
      setEditingAppointment(null);
    } else {
      // Add new appointment
      dispatch(addAppointment(appointment));
    }

    // Clear the form after submission
    setAppointmentForm({
      date: "",
      time: "",
    });

    alert(editingAppointment ? "Appointment updated!" : "Appointment booked!");
  };

  useEffect(() => {
    if (!selectedService || !selectedSubService || !selectedSpecialist) {
      navigate("/services");
    }
  }, [selectedService, selectedSubService, selectedSpecialist, navigate]);

  // Filter appointments by selected specialist
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.specialist === selectedSpecialist?.name
  );

  // Handle editing an appointment
  const handleEdit = (appointment) => {
    setAppointmentForm({
      date: appointment.date,
      time: appointment.time,
    });
    setEditingAppointment(appointment);
  };

  // Handle deleting an appointment
  const handleDelete = (appointmentId) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      dispatch(deleteAppointment(appointmentId));
      alert("Appointment deleted!");
    }
  };

  return (
    <div className="p-8 bg-black text-white">
      <button
        onClick={() => navigate("/services")}
        className="absolute top-4 right-4 p-2 bg-light-gold text-black rounded-full hover:bg-dark-gold"
      >
        &larr; Go Back
      </button>

      <h2 className="text-2xl font-bold text-light-gold">
        {selectedSpecialist
          ? `${selectedSpecialist.name}'s Appointments`
          : "Select a Specialist"}
      </h2>

      {!selectedService || !selectedSubService || !selectedSpecialist ? (
        <div className="mt-8 p-6 bg-dark-gold rounded-lg text-center">
          <p className="text-white">
            Please select a service, sub-service, and specialist to book an
            appointment.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 p-6 bg-dark-gold rounded-lg">
            <h3 className="text-xl font-semibold text-white">
              {editingAppointment
                ? `Edit Appointment with ${selectedSpecialist.name}`
                : `Book an Appointment with ${selectedSpecialist.name}`}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-white">
                  Choose a Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={appointmentForm.date}
                  onChange={handleChange}
                  required
                  className="p-2 mt-2 bg-gray-800 text-white rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="time" className="text-white">
                  Choose a Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={appointmentForm.time}
                  onChange={handleChange}
                  required
                  className="p-2 mt-2 bg-gray-800 text-white rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-light-gold text-black rounded-md font-semibold mt-4 hover:bg-dark-gold"
              >
                {editingAppointment ? "Update Appointment" : "Book Appointment"}
              </button>
            </form>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white">
              Booked Appointments
            </h3>
            {filteredAppointments.length === 0 ? (
              <p className="text-white">No appointments booked yet.</p>
            ) : (
              filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="mt-4 p-4 bg-dark-gold rounded-lg"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {appointment.specialist}
                  </h4>
                  <p className="text-white">Service: {appointment.service}</p>
                  <p className="text-white">
                    Sub-service: {appointment.subService}
                  </p>
                  <p className="text-white">Date: {appointment.date}</p>
                  <p className="text-white">Time: {appointment.time}</p>
                  <div className="flex space-x-4 mt-2">
                    <button
                      onClick={() => handleEdit(appointment)}
                      className="px-4 py-1 bg-light-gold text-black rounded-full hover:bg-dark-gold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(appointment.id)}
                      className="px-4 py-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Appointments;
