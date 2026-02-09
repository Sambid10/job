import { useState } from "react";
import { JobData } from "../../constants/JobData";
import { AnimatePresence, motion } from "motion/react";
import JobDetailsModal from "../Modals/JobDetailsModal";
import JobDetails from "../JobDetails/JobDetails";
interface Props {
    handleshowToast: () => void;
}

export default function JobCard({ handleshowToast }: Props) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <div className="grid max-w-md md:max-w-none mx-auto md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JobData.map((job, index) => (
                <div key={index} className="relative">
                    <JobDetails
                        job={job}
                        setSelectedJob={setSelectedJob}
                        hoveredId={hoveredId}
                        setHoveredId={setHoveredId}
                        index={index}
                        handleshowToast={handleshowToast}
                    />
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

                    {selectedJob === index && (
                        <JobDetailsModal
                            job={job}
                            handleshowToast={handleshowToast}
                            setSelectedJob={setSelectedJob}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
