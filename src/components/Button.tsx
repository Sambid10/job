
export default function Button({title}:{
    title:string
}) {
  return (
    <button className="bg-black text-white h-10 px-6 rounded-full  font-medium text-base hover:bg-gray-800 transition-colors ease-in duration-200">
            <h1>{title}</h1>
    </button>
  )
}
