import { AnimatePresence } from "motion/react"
import JobCard from "../Card/JobCard"
import SearchInput from "../SearchInput"
import { useState } from "react"
import ToastNotification from "../ToastNotification"
export default function JobPage() {
  const [showToast, setShowToast] = useState<boolean>(false)
  const handleshowToast = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }
  return (
    <div className="max-w-7xl relative mx-auto px-4 lg:px-0 py-8 flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Available Jobs</h1>
      <SearchInput />
      <JobCard handleshowToast={handleshowToast}/>
      <AnimatePresence>
        {showToast && <ToastNotification />}
      </AnimatePresence>
    </div>
  )
}
