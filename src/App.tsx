import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import SideNavBar from "./components/SideNavBar"
import "./styles/index.css"

const App = () => {
    return (
        <div className="min-h-screen flex flex-col gap-0 overflow-y-scroll dark:bg-slate-900 bg-white">

            <div className="top-section  bg-orange-400">
                <NavBar />
            </div>

            <div className="w-full h-full flex flex-row ">
                <div className="lg:flex hidden bg-blue-100 w-[30%]">
                    <SideNavBar />
                </div>
                <div className="main-content h-full w-full">
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default App