import React from "react";
import Button from "../Button/Button";
import type { JobDataType } from "../../constants/JobData";

interface JobDetailsProps {
    job: JobDataType;
    setSelectedJob: React.Dispatch<React.SetStateAction<number | null>>;
    hoveredId: number | null;
    setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
    index: number;
    handleshowToast: () => void;
}

export default function JobDetails({
    job,
    setSelectedJob,
    setHoveredId,
    index,
}: JobDetailsProps) {
    return (
        <div
            onClick={() => setSelectedJob(index)}
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
            className={`border relative cursor-pointer border-gray-600 rounded-md shadow-sm p-4 bg-white h-100 w-full`}
        >
            <div
                style={{
                    backgroundColor: `${job.bgColor}`
                }}
                className="rouned-md p-4 flex flex-col gap-1 h-[80%] overflow-y-auto  rounded-md"
            >
                <h1 className="text-[17px] font-medium mb-2">{job.lastDate}</h1>
                <div className="relative">
                    <h1 className="text-lg font-semibold">{job.companyName}</h1>
                    <h1 className="text-3xl font-semibold">{job.jobTitle}</h1>
                    <h1>({job.jobType})</h1>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {job.requiredSkills.map((skill: string, index: number) => (
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
        </div>
    );
}
