export function Header() {
    return (
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
    )
}