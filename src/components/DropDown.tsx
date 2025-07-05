import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { MdOutlineArrowDropDownCircle } from "react-icons/md"

interface DropDownData<T extends {name: string, id: number}> {
    items: T[]
    error: string
    setSelectedFunc: (item: T) => void
    title: string
}

function DropDown<D extends {name: string, id: number}>({items, error, setSelectedFunc, title}: DropDownData<D>) {

    const [selected, setSelected] = useState(-1)
    const [open, setOpen] = useState(false)


    return (!error &&
        <div className="flex flex-col mb-1 max-w-fit ml-2 select-none">
            <div onClick={() => setOpen(!open)} className="dark:bg-slate-900 dark:text-white text-black outline-gray-300 dark:outline-slate-700 outline-1 rounded-md py-1 px-2 flex gap-2 justify-between items-center min-w-[150px]">
                <p>{selected == -1 ?  title : items[selected].name}</p>
                <MdOutlineArrowDropDownCircle />
            </div>

            <AnimatePresence>
                {open && <motion.div
                    key={'drop-down'}
                    initial={{ scaleY: 0}}
                    animate={{ scaleY: 1}}
                    transition={{duration: 0.1, damping: 0, ease: 'linear'}}
                    className="relative h-fit">
                    <div
                        className="overflow-auto absolute top-[4px] min-w-[150px] flex flex-col gap-1 dark:bg-slate-900 dark:text-white text-black outline-gray-300 dark:outline-slate-700 outline-1 rounded-md bg-white">
                        {items.map((item, i) => {
                            return <div
                                onClick={() => {setOpen(false); setSelected(i); setSelectedFunc(item)}}
                                key={`d-${item.id}`}
                                className="py-1 px-2 hover:bg-gray-300 dark:hover:bg-gray-950"
                            >
                                {item.name}
                            </div>
                        })}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>)

}

export default DropDown