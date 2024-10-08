import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";

export function AppointmentCrud() {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [medicineNumber, setMedicineNumber] = useState("");
  const [doctorDiagnosis, setDoctorDiagnosis] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleOpenDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setIsDetailsOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsOpen(false);
  };

  const handleEditAppointment = (appointment) => {
    setAppointmentDate(appointment.date);
    setAppointmentTime(appointment.time);
    setPatientName(appointment.patientName);
    setPatientEmail(appointment.patientEmail);
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCreateOrUpdateAppointment = async (e) => {
    e.preventDefault();

    const updatedAppointment = {
      date: appointmentDate,
      time: appointmentTime,
      patientName,
      patientEmail,
      doctorDiagnosis,
      prescribedMedication: medicineNumber,
    };

    try {
      if (selectedAppointment) {
        const response = await axios.put(
          `http://localhost:3001/appointments/${selectedAppointment._id}`,
          updatedAppointment
        );
        setAppointments(
          appointments.map((appointment) =>
            appointment._id === selectedAppointment._id
              ? response.data
              : appointment
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3001/appointments",
          updatedAppointment
        );
        setAppointments([...appointments, response.data]);
      }
      handleCloseModal();
    } catch (err) {
      console.error("Error al crear o actualizar la cita médica:", err);
      alert(
        `Error al crear o actualizar la cita médica: ${
          err.response?.data?.message || err.message
        }`
      );
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/appointments");
        setAppointments(response.data);
      } catch (err) {
        console.error("Error al cargar las citas médicas:", err);
      }
    };

    fetchAppointments();
  }, []);

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:3001/appointments/${appointmentId}`);
      setAppointments(
        appointments.filter((appointment) => appointment._id !== appointmentId)
      );
    } catch (err) {
      console.error("Error al borrar la cita médica:", err);
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center border-b-4 border-gray-700 shadow-xl">
        <img
          className="w-24"
          src="../src/assets/logoblanco.png"
          alt="Empresa logo"
        />
        <h1 className="text-2xl font-bold">Administración de Citas Médicas</h1>
        <button
          className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105"
          onClick={handleOpenModal}
        >
          Agregar Cita Médica
        </button>
      </nav>
      <div className="flex-1 p-10 bg-white rounded-lg shadow-lg mx-4 mt-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Lista de Citas Médicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-gray-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {appointment.patientName}
              </h3>
              <p>
                <strong>Email del paciente:</strong> {appointment.patientEmail}
              </p>
              <p>
                <strong>Fecha:</strong> {appointment.date}
              </p>
              <p>
                <strong>Hora:</strong> {appointment.time}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105"
                  onClick={() => handleOpenDetails(appointment)}
                >
                  <FaInfoCircle /> Detalles
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
                  onClick={() => handleEditAppointment(appointment)}
                >
                  <FaEdit /> Editar
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                  onClick={() => handleDeleteAppointment(appointment._id)}
                >
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 transition-transform transform scale-95 hover:scale-100">
              <span
                className="text-gray-400 text-2xl cursor-pointer absolute top-4 right-4"
                onClick={handleCloseModal}
              >
                &times;
              </span>
              <h2 className="text-xl font-bold text-teal-300 mb-4">
                {selectedAppointment
                  ? "Editar Cita Médica"
                  : "Agregar Cita Médica"}
              </h2>
              <form
                className="flex flex-col space-y-4"
                onSubmit={handleCreateOrUpdateAppointment}
              >
                <label className="text-gray-400">Número de Medicamento</label>
                <select
                  className="border bg-gray-700 text-white p-2 rounded-lg"
                  value={medicineNumber}
                  onChange={(e) => setMedicineNumber(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecciona un número (1-9)
                  </option>
                  {[...Array(9)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <label className="text-gray-400">Diagnóstico</label>
                <textarea
                  placeholder="Escribe el diagnóstico"
                  className="border bg-gray-700 text-white p-2 rounded-lg"
                  value={doctorDiagnosis}
                  onChange={(e) => setDoctorDiagnosis(e.target.value)}
                  required
                />

                <div className="flex justify-around mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                    onClick={handleCloseModal}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
                    type="submit"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {isDetailsOpen && selectedAppointment && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 transition-transform transform scale-95 hover:scale-100">
              <span
                className="text-gray-400 text-2xl cursor-pointer absolute top-4 right-4"
                onClick={handleCloseDetailsModal}
              >
                &times;
              </span>
              <h2 className="text-xl font-bold text-teal-300 mb-4">
                Detalles de la Cita Médica
              </h2>
              <p>
              <strong>Nombre del Paciente:</strong> {selectedAppointment.patientName}
              </p>
              <p>
                <strong>Email del Paciente:</strong> {selectedAppointment.patientEmail}
              </p>
              <p>
                <strong>Fecha:</strong> {selectedAppointment.date}
              </p>
              <p>
                <strong>Hora:</strong> {selectedAppointment.time}
              </p>
              <p>
                <strong>Diagnóstico:</strong> {selectedAppointment.doctorDiagnosis}
              </p>
              <p>
                <strong>Medicamento Prescrito:</strong> {selectedAppointment.prescribedMedication}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCrud;

