import {motion} from "motion/react"
import { TiTick } from "react-icons/ti"
export default function ToastNotification() {
    return (
        <motion.div
            key="toast"
            initial={{y:"-100%"}}
            animate={{y:"100%"}}
            exit={{y:"-100%"}}
            className="bg-green-100 fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 -top-8 text-green-600 rounded-md w-fit px-12 border border-green-700 h-fit py-4 font-medium whitespace-nowrap" 
        >
            <TiTick className="size-5"/>
            <h1>Application submitted successfully.</h1>
        </motion.div>
    )
}
