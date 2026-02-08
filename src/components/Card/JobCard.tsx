import { JobData } from "../../constants/JobData"
export default function JobCard() {
    return (
        <div className="grid xs:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-4">
            {JobData.map((job, index) =>
                <div
                    key={index} className={`border border-gray-600 rounded-md shadow-sm p-4 bg-white h-100 w-full`}>
                    <div
                        style={{
                            backgroundColor: `${job.bgColor}`
                        }}
                        className="rouned-md relative p-4 flex flex-col gap-1 h-[85%] overflow-y-auto  rounded-md">
                        
                        <h1 className="text-lg font-semibold">{job.companyName}</h1>
                        <h1 className="text-3xl font-semibold">{job.jobTitle}</h1>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                            {job.requiredSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="px-5 py-1 rounded-full border bg-white border-gray-600"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                        
                        {/* logo */}
                        <div className="absolute top-2 right-2">
                           <job.logo className="size-8"/>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
