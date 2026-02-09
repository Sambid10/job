import {motion} from "motion/react"
import { TiTick } from "react-icons/ti"
export default function ToastNotification() {
    return (
        <motion.div
            key="modal"
            initial={{y:"-100%"}}
            animate={{y:"100%"}}
            exit={{y:"-100%"}}
            className="bg-green-100 absolute z-50 flex items-center gap-2 top-0 text-green-600 rouned-md w-fit px-12 border border-green-700 h-fit py-4 text-center rounded-md font-medium"
        >
            <TiTick className="size-5"/>
            <h1>Application submitted successfully.</h1>
        </motion.div>
    )
}
