import { BiSearch } from "react-icons/bi"
export default function SearchInput() {
    return (
        <div className=" w-full relative ">
            <input
                placeholder="Search jobs.."
                className="bg-white rounded-full w-full border border-gray-600 py-2 pl-12 px-4" />
            <BiSearch className="absolute top-1/2 -translate-y-1/2 left-4 size-6"/>
        </div>

    )
}
