import { Link } from "react-router-dom";
export function Info() {
  return (
    <div className="h-screen bg-blue-300">
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              La mejor forma de cuidar tu salud
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 sm:text-lg lg:text-xl">
              Todos los salvadoreños tienen el derecho de disfrutar su día a día de la mejor manera posible. Esto se consigue con tu ayuda.
            </p>
            <a
              href="/Home"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <Link
              to='/'>
                volver
              </Link>
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/Login"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Iniciar sesión
            </a>
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:pl-8">
            <img src="../src/assets/medicina.png" alt="medicina" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

<section className="bg-gray-50 dark:bg-gray-800 py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        Somos los encargados de que tu medicina sea bien utilizada
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 sm:text-lg leading-relaxed">
        Con nuestra aplicación podrás recibir actualizaciones sobre tu historial médico, consultas, recetas médicas y podrás interactuar con nuestro servicio de máquinas expendedoras de medicina.
      </p>
      <h2 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        ¿Cómo surgimos?
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300 sm:text-lg leading-relaxed">
        En El Salvador, la medicina es limitada y esto nos inspiró a hacer la diferencia en nuestra nación. Queremos ayudar de manera moderna y eficiente en el uso de los servicios de salud públicos y privados. Nuestro servicio es gratuito y solo se requiere tener una cuenta con nosotros para utilizar la aplicación de las máquinas.
      </p>
      <Link
        to="#"
        className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-lg font-medium"
      >
        Aprende más
        <svg
          className="ml-2 w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  </div>
</section>

<footer className="bg-white dark:bg-gray-900 py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-between sm:flex-row">
      <Link to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
        <img src="./src/assets/newLogo.png" alt="Logo" className="w-36" />
      </Link>
      <ul className="flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
        <li>
          <Link to="#" className="hover:underline">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">Política de privacidad</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">Licencias</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">Contacto</Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 dark:border-gray-700" />
    <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
      &copy; 2024 <Link to="https://flowbite.com/" className="hover:underline">MediEase</Link>. Todos los derechos reservados.
    </p>
  </div>
</footer>
    </div>
  );
};

export default Info;
