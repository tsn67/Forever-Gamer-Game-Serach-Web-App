import {motion} from 'framer-motion'

const LoadingSkeltons = ({count}: {count: number}) => {
    return (
        <>
            {new Array(count).fill('loader').map((v , i) => {
                return <motion.div
                    key={`${v}-${i}`}
                    initial={{opacity: 0}} 
                    animate={{opacity: [0, 0.4, 0.6, 0.8, 0.6, 0.4, 0]}}              
                    transition={{ease: 'linear', repeat: Infinity, repeatType: 'loop', duration: 2}}
                    className='md:h-[150px] h-[200px] w-full bg-slate-700 rounded-lg'
                >

                </motion.div>
            })}
        </>
    )
}

export default LoadingSkeltons