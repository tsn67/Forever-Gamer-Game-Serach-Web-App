import { useState } from "react";
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"
import SideNavBar from "./components/SideNavBar"
import "./styles/index.css"
import type { Category } from "./hooks/useFetchCategories";
import PlatformDropDown from "./components/PlatformDropDown";
import type { Platform } from "./components/PlatformIconBox";
import SearchSelector from "./components/SearchSelector";

export interface GameQuery {
  platform: Platform | null
  category: Category | null
}

const App = () => {

  // const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  // refactoring

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <div className="h-screen flex flex-col  dark:bg-slate-900 bg-white">
      <div className="top-section bg-orange-400">
        <NavBar />
      </div>

      <div className="flex flex-1 flex-row h-0">
        <div className="lg:flex hidden min-w-[20%]">
          <SideNavBar selectCategory={(category) => setGameQuery({...gameQuery, category})} selectedCategory={gameQuery.category}/>
        </div>

        
        <div className="max-h-screen flex flex-col w-full">
          <div className="flex flex-row">
            <PlatformDropDown setSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SearchSelector />
          </div>
          <div className="flex-1 w-full overflow-y-auto">
            <MainContent gameQuery={gameQuery}/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default App