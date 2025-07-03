import { useState } from "react";
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import SideNavBar from "./components/SideNavBar"
import "./styles/index.css"
import type { Category } from "./hooks/useFetchCategories";
import PlatformDropDown from "./components/PlatformDropDown";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <div className="h-screen flex flex-col dark:bg-slate-900 bg-white">
      <div className="top-section bg-orange-400">
        <NavBar />
      </div>

      <div className="flex flex-1 flex-row h-0">
        <div className="lg:flex hidden min-w-[20%]">
          <SideNavBar selectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        </div>

        
        <div className="max-h-screen flex flex-col w-full">
          <PlatformDropDown/>
          <div className="flex-1 w-full overflow-y-auto">
            <MainContent selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App