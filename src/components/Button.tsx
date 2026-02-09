import { twMerge } from 'tailwind-merge'
export default function Button({title,className,handleClick}:{
    title:string
    className?:string
    handleClick?:()=>void
}) {
  return (
    <button
    onClick={handleClick}
    className={twMerge( "bg-black text-white h-10 px-6 rounded-full  font-medium text-base hover:bg-gray-800 transition-colors ease-in duration-200",className)}>
            <h1>{title}</h1>
    </button>
  )
}
