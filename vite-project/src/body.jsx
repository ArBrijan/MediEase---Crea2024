import banner from './imgs/banner1.jpg';
import logo from './imgs/logo.png';

export function Body() {
    return (
        <div>{/*Div para que todo lo de abajo se renderize idk*/}

            {/*Header*/}
            <header className="p-0 m-0">
                <div className="flex justify-between items-center border-grey border-b-2">
                    <div className="ml-2">
                        <button className="mr-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 rounded-full shadow-lg shadow-blue-500/50">
                            <a href="/Login">NewButton</a>
                        </button>
                        <button className="ml-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-32 rounded-full shadow-lg shadow-lime-500/50">
                            <a href="/Register">NewButton</a>
                        </button>
                    </div>
                    <img className="w-32" src="./src/imgs/logo.png" alt="MediEase" />
                </div>
            </header>

            <div className="relative h-[427px] flex items-center justify-center ">{/*Div del banner  */}
                <img className="opacity-50 h-[427px] w-screen" src={banner} alt="Banner" />
                <p className="absolute text-6xl text-black-600">¡Tu salud al alcance de un código!</p>
            </div><br />
            <div className="h-[205px] w-[175vh] m-auto grid grid-cols-2 place-items-center">{/* Div del Primer bloque*/}
                <div><h1 className="text-6xl">¿Quienes somos?</h1></div>
                <div><p className="text-xl mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus delectus ipsum sequi. Minus commodi saepe expedita! Totam repellat dolorem odio distinctio, cum accusamus ex sit quasi ducimus minima necessitatibus.
                    Cumque, voluptate magnam magni sint consequuntur saepe possimus maxime dolores recusandae, totam odit omnis natus neque aliquam voluptates atque eius unde aperiam fugit facere perferendis impedit porro? Rerum, earum rem.
                </p></div>
            </div><br />
            <div>{/*Div del segundo banner */}
                <div style={{ height: "350px", backgroundColor: "#D9D9D9" }} className="h-[350px] flex justify-center">{/*Div del banner  */}
                    <img className="w-[300px]" src="./src/imgs/logo.png" alt="" />
                </div>
            </div><br />
            <div className=" w-1/2 m-auto">{/*Div del segundo bloque */}
                <div className=" w-1/2 m-auto mb-5"><h1 className="text-6xl">¿Como funciona?</h1></div>
                <div><p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius pariatur iste ea totam a debitis, reiciendis autem veritatis earum. Nemo consequuntur vitae voluptate excepturi voluptas optio enim delectus voluptatibus fugiat!
                    Corporis harum rerum sed id, perspiciatis in architecto excepturi inventore eius dolorum eveniet, ipsam adipisci esse qui pariatur, veniam eos delectus illum blanditiis debitis. Dicta repudiandae repellat ea corporis debitis.</p></div>
            </div><br />
            <div>{/*Div del tercer banner */}
                <div style={{ height: "350px", backgroundImage: "url('./src/imgs/vending.jpg')", opacity: "0.8" }} className="flex justify-center">{/*Div del banner  */}</div>
            </div><br />
            <div style={{ height: "205px", width: "175vh", margin: "auto" }} className="grid grid-cols-2 place-items-center">{/* Div del tercer bloque*/}
                <div><p className="text-xl mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus delectus ipsum sequi. Minus commodi saepe expedita! Totam repellat dolorem odio distinctio, cum accusamus ex sit quasi ducimus minima necessitatibus.
                    Cumque, voluptate magnam magni sint consequuntur saepe possimus maxime dolores recusandae, totam odit omnis natus neque aliquam voluptates atque eius unde aperiam fugit facere perferendis impedit porro? Rerum, earum rem.
                </p></div>
                <div><h1 className="text-6xl">¿Donde nos encontramos?</h1></div>
            </div><br />
            <div className=" w-3/5 m-auto mt-10 ">{/*Div del segundo bloque */}
                <div className="w-[470px] m-auto mb-5 "><h1 className="text-6xl">Inicia tu consulta!</h1></div>
                <div className="flex justify-between w-1/2 m-auto mt-16 ">
                    <button className="h-[60px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 rounded-full shadow-lg shadow-blue-500/50">lorem</button>
                    <button className="w-52 h-[60px] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg shadow-blue-500/50">lorem</button>
                </div>
            </div><br />{/*No tengo ni puta idea de si se pudieran reutilizar los botones en estos casos, pero de igual manera no lo veo necesarios debido a que solo redirigen a otra página. */}
        </div >
    )

}