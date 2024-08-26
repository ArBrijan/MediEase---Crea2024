import { useState, useEffect } from "react";
import axios from "axios";

function DoctorManager() {
    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState({
        name: '',
        email: '',
        password: '',
        specialty: '',
        licenseNumber: '',
        phone: '',
    });
    const [editMode, setEditMode] = useState(false);
    
    useEffect(() => {
        async function fetchDoctors() {
            try {
                const response = await axios.get("http://localhost:3001/doctors");
                setDoctors(response.data);
            } catch (error) {
                console.error("Error al obtener los doctores:", error);
            }
        }
        fetchDoctors();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDoctor(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            try {
                await axios.put(`http://localhost:3001/doctors/${doctor._id}`, doctor);
                setDoctors(doctors.map(d => d._id === doctor._id ? doctor : d));
            } catch (error) {
                console.error("Error al actualizar el doctor:", error);
            }
        } else {
            try {
                const response = await axios.post("http://localhost:3001/doctors", doctor);
                setDoctors([...doctors, response.data]);
            } catch (error) {
                console.error("Error al agregar el doctor:", error);
            }
        }
        resetForm();
    };

    const handleEdit = (doctor) => {
        setDoctor(doctor);
        setEditMode(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/doctors/${id}`);
            setDoctors(doctors.filter(d => d._id !== id));
        } catch (error) {
            console.error("Error al eliminar el doctor:", error);
        }
    };

    const resetForm = () => {
        setDoctor({
            name: '',
            email: '',
            password: '',
            specialty: '',
            licenseNumber: '',
            phone: '',
        });
        setEditMode(false);
    };

    return (
        <div className="h-screen bg-gray-300 p-6">
            <h1 className="text-2xl font-bold mb-4">Gestión de doctores</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">{editMode ? 'Editar Doctor' : 'Agregar nuevo doctor'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={doctor.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={doctor.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={doctor.password}
                            onChange={handleInputChange}
                            required
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Especialidad</label>
                        <input
                            type="text"
                            name="specialty"
                            value={doctor.specialty}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Número de licencia</label>
                        <input
                            type="text"
                            name="licenseNumber"
                            value={doctor.licenseNumber}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                        <input
                            type="text"
                            name="phone"
                            value={doctor.phone}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-gray-800 text-white p-2 rounded-lg hover:bg-white-600"
                >
                    {editMode ? 'Actualizar Doctor' : 'Agregar doctor'}
                </button>
                {editMode && (
                    <button
                        type="button"
                        onClick={resetForm}
                        className="ml-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                    >
                        Cancelar
                    </button>
                )}
            </form>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Especialidad</th>
                        <th className="py-2 px-4 border-b">Número de licencia</th>
                        <th className="py-2 px-4 border-b">Teléfono</th>
                        <th className="py-2 px-4 border-b">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map(d => (
                        <tr key={d._id}>
                            <td className="py-2 px-4 border-b">{d.name}</td>
                            <td className="py-2 px-4 border-b">{d.email}</td>
                            <td className="py-2 px-4 border-b">{d.specialty}</td>
                            <td className="py-2 px-4 border-b">{d.licenseNumber}</td>
                            <td className="py-2 px-4 border-b">{d.phone}</td>
                            <td className="py-2 px-4 border-b flex justify-around">
                                <button
                                    onClick={() => handleEdit(d)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(d._id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DoctorManager;