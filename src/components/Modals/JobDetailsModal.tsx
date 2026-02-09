import type { JobDataType } from "../../constants/JobData"
import Button from "../Button/Button"
import { BiCalendarExclamation, BiX } from "react-icons/bi"
import useOutsideClick from "../../hooks/useOutsideClick"
import { useRef } from "react"
interface Props {
  job: JobDataType
  setSelectedJob: (index: number | null) => void
  handleshowToast: () => void
}
export default function JobDetailsModal({ job, setSelectedJob, handleshowToast }: Props) {
  const handleCloseModal = () => {
    setSelectedJob(null)
  }
  const modalRef = useRef(null)
  const buttonRef = useRef(null)
  useOutsideClick({ ref: modalRef, handler: handleCloseModal, buttonRef: buttonRef })

  return (
    <div className="fixed inset-0 w-full bg-black/60 z-50 flex items-center justify-center cursor-default">
      <div
        ref={modalRef}
        className="relative bg-gray-50 rounded-md h-fit w-[90%] lg:w-[50%] p-6 flex flex-col gap-5">

        <div className="flex  items-start flex-col gap-2 md:tems-center md:flex-row md:gap-4">
          <h1 className="font-semibold text-xl underline underline-offset-6 decoration-gray-400 decoration-1">&bull; {job.jobTitle}</h1>

          <h1 className="flex items-center gap-1"><BiCalendarExclamation /> ({job.lastDate})</h1>
        </div>

        <div className="flex items-start gap-4">
          <job.logo className="size-18" />
          <div>
            <h1 className="text-lg font-semibold">{job.companyName}</h1>
            <h1 className="text-sm text-gray-600 italic">{job.address}</h1>
          </div>
        </div>

        <div className="w-full bg-gray-600 h-px" />

        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-[17px] font-medium">Job Description:</h1>
            <h1>({job.jobType})</h1>
          </div>

          <p
            style={{ lineHeight: "120%" }}
            className="mt-1  text-gray-800 text-[15px]">{job.jobDescription}</p>
        </div>

        <div>
          <h1 className="text-[17px] font-medium">Responsibilties:</h1>
          <div className="mt-1 text-gray-800">
            <ol className="list-disc pl-4 space-y-px">
              {job.responsibilities.map((res, index) => (
                <li key={index} className="text-[15px]">{res}</li>
              ))}
            </ol>
          </div>
        </div>

        <div>
          <h1 className="text-[17px] font-medium">Skills:</h1>
            <div>
              <ol className="list-disc pl-4 mt-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-px text-gray-800">
                {job.requiredSkills.map((skill, index) => (
                  <li key={index} className="text-[15px]">{skill}</li>
                ))}
              </ol>
          </div>
        </div>
        <div className="w-full bg-gray-600 h-px" />
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col md:flex-row items-start md:items-center md:gap-2">
            <h1 className="text-[17px] font-semibold">Expected Salary:</h1>
            <h1
              className="text-[17px] font-semibold">{job.salary}/-</h1>
          </div>
          <div>
            <Button
              handleClick={() => handleshowToast()}
              className="bg-blue-600 hover:bg-blue-500 border border-blue-700" title="Apply" />
          </div>
        </div>

        <div className="absolute top-6 right-4">
          <button
            ref={buttonRef}
            className="border border-gray-600 cursor-pointer rounded-full"><BiX className="size-8" /></button>
        </div>
      </div>

    </div>
  )
}
