import { useState } from "react";
import axios from 'axios';

export function UserPage() {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentLocation, setAppointmentLocation] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setIsDetailsOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsOpen(false);
  };

  const handleScheduleAppointment = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const newAppointment = {
        name: appointmentName,
        date: `${appointmentDate} ${appointmentTime}`,
        location: appointmentLocation,
    };

    try {
        const response = await axios.post('http://localhost:3001/appointments', newAppointment);
        setAppointments([...appointments, response.data]);
        handleCloseModal();
    } catch (err) {
        console.error("Error al agendar la cita:", err);
    }
  };

  return (
    <div className="h-screen bg-blue-100 flex flex-row">
      <div className="w-1/4 h-screen bg-blue-800 text-white flex flex-col items-center">
        <img
          className="w-3/6 m-5 bg-white rounded-lg"
          src="../src/assets/NewLogo.png"
          alt="User Logo"
        />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Administración</h1>
          <button
            className="bg-blue-600 w-4/5 p-2 mb-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleOpenModal}
          >
            Agendar cita
          </button>
          {isModalOpen && (
            <div className="fixed text-black inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                <span
                  className="text-gray-500 text-2xl cursor-pointer absolute top-4 right-4"
                  onClick={handleCloseModal}
                >
                  &times;
                </span>
                <h2 className="text-xl text-black font-bold mb-4">
                  Agendar cita
                </h2>
                <form className="text-black flex flex-col" onSubmit={handleScheduleAppointment}>
                  <span className="p-2">Nombre de cita</span>
                  <input
                    type="text"
                    placeholder="Consulta para..."
                    className="border p-2"
                    value={appointmentName}
                    onChange={(e) => setAppointmentName(e.target.value)}
                    required
                  />
                  <span className="p-2">Fecha de cita</span>
                  <input
                    type="date"
                    className="border p-2"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                  />
                  <span className="p-2">Hora de cita</span>
                  <input
                    type="time"
                    className="border p-2"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                  />
                  <span className="p-2">Lugar de residencia</span>
                  <input
                    type="text"
                    placeholder="Departamento, Municipio, Residencial ****, Calle ** ..."
                    className="border p-2"
                    value={appointmentLocation}
                    onChange={(e) => setAppointmentLocation(e.target.value)}
                    required
                  />

<br />
                <div className="flex justify-around">
                  <button
                    className="bg-red-500 w-[100px] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={handleCloseModal}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-green-500 w-[100px] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    type="submit"
                  >
                    Agendar
                  </button>
                </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="basis-3/4 p-10">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-3xl font-semibold text-blue-900">Mis citas</h2>
          <a
            className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300"
            href="/"
          >
            Regresar
          </a>
        </div>

        <table className="table-auto w-full bg-white rounded-xl shadow-lg">
          <thead>
            <tr>
              <th className="px-5 py-3 font-medium">Nombre de cita</th>
              <th className="px-5 py-3 font-medium">Detalles</th>
              <th className="px-5 py-3 font-medium">Estado de cita</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="text-center">
                <td className="px-5 py-3">{appointment.name}</td>
                <td className="px-5 py-3">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => handleOpenDetails(appointment)}
                  >
                    Ver detalles
                  </button>
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      appointment.status === "Pending"
                        ? "bg-yellow-300"
                        : "bg-green-300"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDetailsOpen && selectedAppointment && (
        <div className="fixed text-black inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <span
              className="text-gray-500 text-2xl cursor-pointer absolute top-4 right-4"
              onClick={handleCloseDetailsModal}
            >
              &times;
            </span>
            <h2 className="text-xl text-black font-bold mb-4">Detalles de la cita</h2>
            <div className="flex flex-col space-y-2">
              <span className="p-1 border">Nombre de cita: {selectedAppointment.name}</span>
              <span className="p-1 border">Fecha: {selectedAppointment.date}</span>
              <span className="p-1 border">Lugar de residencia: {selectedAppointment.location}</span>
              <span className="p-1 border">Estado: {selectedAppointment.status}</span>
            </div>
            <button
              className="bg-red-500 w-[100px] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mt-4"
              onClick={handleCloseDetailsModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}