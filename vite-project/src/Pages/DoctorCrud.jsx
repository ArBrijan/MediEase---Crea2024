import DropdownDoctor, { DropdownCites } from "../Components/Dropdown";
import { useState, useEffect } from "react";

function DoctorCrud() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownCites, setOpenDropdownCites] = useState(false);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Brayan",
      history: "Lorem ipsum dolor sit amet.",
      medication: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, deleniti?",
      age: 30,
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Emerson",
      history: "Lorem ipsum dolor sit amet.",
      medication: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro.",
      age: 25,
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Livai",
      history: "Lorem ipsum dolor sit amet.",
      medication: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro.",
      age: 35,
      phone: "555-666-7777",
    }
  ]);
  const [editPatient, setEditPatient] = useState(null);

  const handleAddPatient = (patient) => {
    setPatients([...patients, { ...patient, id: patients.length + 1 }]);
  };

  const handleEditPatient = (updatedPatient) => {
    setPatients(patients.map(patient => patient.id === updatedPatient.id ? updatedPatient : patient));
    setEditPatient(null);
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  return (
    <div className="h-screen bg-violet-200 flex flex-row">
      <div className="w-1/4 h-screen bg-slate-800 text-white flex flex-col items-center">
        <img className="w-3/6 m-5 bg-white" src="../src/assets/NewLogo.png" alt="Logo" />
        <div className="w-full flex flex-col">
          <span className="bg-slate-600 w-full p-2 cursor-pointer my-1" onClick={() => setOpenDropdown((prev) => !prev)}>Gestion de pacientes</span>
          {openDropdown && <DropdownDoctor />}
          <span className="bg-slate-600 w-full p-2 cursor-pointer my-1" onClick={() => setOpenDropdownCites((prev) => !prev)}>Gestion de citas</span>
          {openDropdownCites && <DropdownCites />}
        </div>
      </div>

      <div className="basis-3/4 px-10">
        <div className="flex items-center justify-between py-4 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-user"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>

          <a
            style={{ backgroundColor: "#1E1E1E" }}
            className="text-white left-[670%] top-[15%] p-[15px] rounded-lg"
            href="/"
          >
            Regresar
          </a>
        </div>

        <PatientForm onAddPatient={handleAddPatient} editPatient={editPatient} onEditPatient={handleEditPatient} />

        <table className="table-auto w-full bg-white rounded-xl shadow">
          <thead>
            <tr>
              <th className="px-5 py-3 font">Paciente</th>
              <th className="px-5 py-3 font">Historial</th>
              <th className="px-5 py-3 font">Medicamento</th>
              <th className="px-5 py-3 font">Edad</th>
              <th className="px-5 py-3 font">Teléfono</th>
              <th className="px-5 py-3 font">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td className="px-5 py-3 font-normal">{patient.name}</td>
                <td className="px-5 py-3 font-normal">{patient.history}</td>
                <td className="px-5 py-3 font-normal">{patient.medication}</td>
                <td className="px-5 py-3 font-normal">{patient.age}</td>
                <td className="px-5 py-3 font-normal">{patient.phone}</td>
                <td className="px-5 py-3 font-normal flex justify-around">
                  <button onClick={() => setEditPatient(patient)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button onClick={() => handleDeletePatient(patient.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            position: "fixed",
            top: "91%",
            left: "96%",
            transform: "translate(-50%, -50%)",
          }}
          className="w-[70px] h-[70px] flex justify-center items-center bg-slate-800 rounded-full"
          onClick={() => setEditPatient({ id: null, name: '', history: '', medication: '', age: '', phone: '' })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PatientForm({ onAddPatient, editPatient, onEditPatient }) {
  const [patient, setPatient] = useState(editPatient || {
    name: '',
    history: '',
    medication: '',
    age: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPatient) {
      onEditPatient(patient);
    } else {
      onAddPatient(patient);
    }
    setPatient({
      name: '',
      history: '',
      medication: '',
      age: '',
      phone: '',
    });
  };

  useEffect(() => {
    setPatient(editPatient || {
      name: '',
      history: '',
      medication: '',
      age: '',
      phone: '',
    });
  }, [editPatient]);

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <input
        type="text"
        name="name"
        value={patient.name}
        onChange={handleChange}
        placeholder="Nombre del Paciente"
        required
        className="p-2 m-2 border rounded"
      />
      <input
        type="text"
        name="history"
        value={patient.history}
        onChange={handleChange}
        placeholder="Historial"
        required
        className="p-2 m-2 border rounded"
      />
      <input
        type="text"
        name="medication"
        value={patient.medication}
        onChange={handleChange}
        placeholder="Medicamento"
        required
        className="p-2 m-2 border rounded"
      />
      <input
        type="number"
        name="age"
        value={patient.age}
        onChange={handleChange}
        placeholder="Edad"
        required
        className="p-2 m-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={patient.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        required
        className="p-2 m-2 border rounded"
      />
      
      <button type="submit" className="p-2 m-2 bg-slate-800 text-white rounded">
        {editPatient ? 'Actualizar Paciente' : 'Agregar Paciente'}
      </button>
    </form>
  );
}

export default DoctorCrud;
