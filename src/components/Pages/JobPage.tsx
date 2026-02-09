import JobCard from "../Card/JobCard"
import SearchInput from "../SearchInput"
export default function JobPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-8 flex flex-col gap-4">
      <h1 className="font-semibold text-xl">Available Jobs</h1>

      <SearchInput />


      <JobCard />
    </div>
  )
}
