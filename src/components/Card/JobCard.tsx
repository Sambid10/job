import { JobData } from "../../constants/JobData"
export default function JobCard() {
  return (
    <div className="bg-black">
        <h1 className="text-4xl font-bold text-purple-600">
  Tailwind works with Bun 🚀
</h1>
        {JobData.map((job,index)=>
            <div key={index}>
                <div>
                    <h1>{job.companyName}</h1>
                    <h1>{job.jobTitle}</h1>
                    {job.requiredSkills.map((skill,index)=>
                        <div key={index}>
                            <h1>{skill}</h1>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
  )
}
