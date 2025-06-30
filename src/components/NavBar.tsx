import { RiGamepadFill } from "react-icons/ri";
import toggleTheme from "../services/ThemeService";
import { motion } from 'framer-motion'
import { LuSun } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBar = () => {


    return (
        <div className="flex flex-row px-4 py-1 dark:bg-slate-800 bg-white items-center gap-2 justify-between">
            <div className="flex flex-row gap-2 items-center">
                <div className="px-1 bg-gray-100 rounded-md shadow-gray shadow-sm">
                    <RiGamepadFill size={40} />
                </div>

                <h1 className="text-black dark:text-white">Nav Bar</h1>
            </div>

            <div>
                <ThemeToggleButton toggleTheme={toggleTheme}/>
            </div>
        </div>
    )
}

function ThemeToggleButton({toggleTheme}: {toggleTheme: () => void}) {

    const [state, setState] = useState(0);
    const variants = {
        initial: {
            y: -10
        },

        animate: {
            y: 0
        }
    }

    return <div
        onClick={() => { setState((state + 1) % 2); toggleTheme(); }}
        className={`rounded-full transition-colors p-2 ${state == 0 ? 'bg-white' : 'bg-slate-800'}`}>
        <AnimatePresence mode="wait">
            {state == 0 ? <motion.div key={'light-logo'} variants={variants} initial="initial" animate="animate">
                <MdOutlineDarkMode />
            </motion.div> : <motion.div key={'dark-logo'}  variants={variants} initial="initial" animate="animate">
                <LuSun color="white" />
            </motion.div>}
        </AnimatePresence>
    </div>
}

export default NavBar