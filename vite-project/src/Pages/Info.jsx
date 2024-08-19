import { Link } from "react-router-dom";
export function Info() {
  return (
    <div className="h-screen bg-blue-300">
     
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              La mejor forma de cuidar tu salud!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Todos los salvadoreños tienen el derecho de disfrutar su día a día
              de la mejor manera posible, esto se consigue con tu ayuda.
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../src/assets/medicina.png" alt="mockup"></img>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Somos los encargados de que tu medicina sea bien utilizada.
            </h2>
            <p className="mb-4 font-light">
              Con nuestra aplicación podrás recicbir actualizaciones sobre tu
              historial médico, consultas, recetas médicas, y podrás interactuar
              con nuestro servicio de máquinas expendedoras de medicina.
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              ¿Como surgimos?
            </h2>
            <p className="mb-4 font-medium">
              En El Salvador, la medicina es límitada y esto nos inspiró a que
              hagamos la diferencia en nuestra nación y podamos ayudar de una
              forma moderna y eficienta la forma en que los salvadoreños hacemos
              uso de los servicios de salud públicos y privados. Nuestro
              servicio es gratuito y solo se requiere que el usuario tenga una
              cuenta con nostros para poder hacer uso de la aplicación de las
              máquinas.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="./src/assets/newLogo.png" class="w-[220px]" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="https://flowbite.com/" class="hover:underline">MediEase</a></span>
    </div>
</footer>


      </section>
      
    </div>
  );
}
