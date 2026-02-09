import { useState } from "react"
import { JobData } from "../../constants/JobData"
import Button from "../Button"
import { AnimatePresence, motion } from "motion/react"
import JobDetailsModal from "../JobDetailsModal"
interface Props{
    handleshowToast:()=>void
}
export default function JobCard({handleshowToast}:Props) {
    const [hoveredId, setHoveredId] = useState<number | null>(null)
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <div
            className="grid max-w-md md:max-w-none mx-auto md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JobData.map((job, index) =>
                <div
                    onClick={() => setSelectedJob(index)}
                    onMouseEnter={() => setHoveredId(index)}
                    onMouseLeave={() => setHoveredId(null)}
                    key={index} className={`border relative cursor-pointer border-gray-600 rounded-md shadow-sm p-4 bg-white h-100 w-full`}>
                    <div
                        style={{
                            backgroundColor: `${job.bgColor}`
                        }}
                        className="rouned-md p-4 flex flex-col gap-1 h-[80%] overflow-y-auto  rounded-md">

                        <h1 className="text-[17px] font-medium mb-2">{job.lastDate}</h1>
                        <div className="relative">
                            <h1 className="text-lg font-semibold">{job.companyName}</h1>
                            <h1 className="text-3xl font-semibold">{job.jobTitle}</h1>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {job.requiredSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="px-5 py-1 rounded-full border  border-gray-600"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            <div className="absolute -top-2 right-0">
                                <job.logo className="size-8" />
                            </div>
                        </div>

                    </div>
                    <div className="h-[20%] w-full flex justify-between items-center p-4 font-semibold text-[17px]">
                        <h1>{job.salary}</h1>
                        <Button title={"Details"} />
                    </div>
                    <AnimatePresence>
                        {hoveredId === index && (
                            <motion.div
                                key="overlay"
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.7 }}
                                transition={{ duration: 0.2, ease: "easeIn" }}
                                className="absolute inset-0 bg-black/10 rounded-md pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    {selectedJob === index &&
                        <JobDetailsModal job={job} handleshowToast={handleshowToast} setSelectedJob={setSelectedJob} />
                    }

                </div>

            )}

        </div>
    )
}
