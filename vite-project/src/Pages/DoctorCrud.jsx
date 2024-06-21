function DoctorCrud() {
  return (
    <div className="h-screen bg-violet-200 flex flex-row">
      <div className="w-1/4 h-screen bg-slate-800 text-white flex flex-col items-center">
        <img className="w-3/6 m-5" src="../src/assets/NewLogo.png" alt="Logo" />
        <span className="m-1">Acciones</span>
        <ul className="w-full pr-1">

          <li className="overflow-hidden">
            <div className="bg-slate-700 rounded p-2 hover:bg-slate600">
              <a href="#">Gestion de pacientes</a>
            </div>

            <ul className="h-0">
              <li className="ml-16 mt-2 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample1</li>
              <li className="ml-16 mt-1 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample2</li>
              <li className="ml-16 mt-1 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample3</li>
            </ul>

          </li>

          <li className="overflow-hidden">
            <div className="bg-slate-700 rounded p-2 hover:bg-slate600">
              <a href="#">Gestion de Citas</a>
            </div>

            <ul className="h-0">
              <li className="ml-16 mt-2 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample4</li>
              <li className="ml-16 mt-1 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample5</li>
              <li className="ml-16 mt-1 bg-slate-700 rounded p-1 hover:bg-slate-600">Xample6</li>
            </ul>

          </li>

        </ul>
      </div>

      <div className="basis-3/4 px-10">
        <div className="flex items-center justify-between py-4  w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-user"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>

          <a
            style={{ backgroundColor: "#1E1E1E" }}
            className="text-white left-[670%] top-[15%] p-[15px] rounded-lg"
            href="/Home"
          >
            Regresar
          </a>
        </div>

        <table className="table-auto w-full bg-white rounded-xl shadow">
          <thead>
            <tr>
              <th className=" px-5 py-3 font ">Paciente</th>
              <th className=" px-5 py-3 font ">Historial</th>
              <th className=" px-5 py-3 font ">Medicamento</th>
              <th className=" px-5 py-3 font ">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className=" px-5 py-3 font-normal">Brayan</th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor sit amet.
              </th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
                deleniti?
              </th>
              <th className=" px-5 py-3 font-normal flex justify-around">
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
              </th>
            </tr>
            <tr>
              <th className=" px-5 py-3 font-normal">Emerson</th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor sit amet.
              </th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                porro.
              </th>
              <th className=" px-5 py-3 font-normal flex justify-around">
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
              </th>
            </tr>
            <tr>
              <th className=" px-5 py-3 font-normal">Livai</th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor sit amet.
              </th>
              <th className=" px-5 py-3 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                porro.
              </th>
              <th className=" px-5 py-3 font-normal flex justify-around">
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
              </th>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            position: "fixed",
            top: "91%",
            left: "96%",
            transform: "translate(-50%, -50%)",
          }}
          className="w-[70px] h-[70px] flex justify-center items-center  bg-slate-800 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 "
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

export default DoctorCrud;
