function Pruebas() {
    return (
        <>
            <div className="w-screen flex flex-col">
                <span className="m-auto mb-3">Xample</span>
                <ul className=" bg-blue-500 w-96 m-auto">

                    <li className="bg-green-400 w-1/2 ml-3 p-1">Lista 1

                        <ul className="bg-purple-500 ml-3 p-1">
                            <li>xample1</li>
                            <li>xample2</li>
                            <li>xample3</li>
                        </ul>

                    </li>

                    <li className="bg-green-400 w-1/2 ml-3 p-1">Lista 2
                        <ul className="bg-red-500 ml-3 p-1">

                            <li>xapmle4</li>
                            <li>xapmle5</li>
                            <li>xapmle6</li>
                        </ul>

                    </li>

                    <li className="bg-green-400 w-1/2 ml-3 p-1">Lista 3
                        <ul className="bg-yellow-500 ml-3 p-1">

                            <li>xapmle7</li>
                            <li>xapmle8</li>
                            <li>xapmle9</li>
                        </ul>
                        
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Pruebas;