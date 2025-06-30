import NavBar from "./components/NavBar"
import "./styles/index.css"

const App = () => {
    return (
        <div className="h-screen flex flex-col gap-0">

            <div className="top-section  bg-orange-400">
                <NavBar />
            </div>

            <div className="w-full h-full flex flex-row bg-yellow-300">
                <div className="lg:flex hidden bg-blue-100 w-[30%]"></div>
                <div className="main-content bg-emerald-500 h-full w-full"></div>
            </div>
        </div>
    )
}

export default App