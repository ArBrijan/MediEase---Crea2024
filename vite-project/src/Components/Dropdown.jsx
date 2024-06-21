export const DropdownDoctor = () =>{
    return(
        <div>
            <ul className="bg-slate-800 w-full p-1 mt-1 rounded text-white DropdownList">
                <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Buscar paciente
                </li>
                <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Editar paciente
                </li>
                <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Eliminar paciente
                </li>
            </ul>
        </div>
    )
}

export const DropdownCites = () =>{
    return(
        <div>
        <ul className="bg-slate-800 w-full p-1 mt-1 rounded text-white">
            <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Citas programadas
            </li>
            <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Editar cita
            </li>
            <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Cancelar cita
            </li>
            <li className="bg-slate-600 w-3/4 p-2 m-1 rounded">
                Historial de citas
            </li>
        </ul>
    </div>
    )
}

export default DropdownDoctor;