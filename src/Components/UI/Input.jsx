export default function Input({onChange}) {
  return (
    <input onChange={onChange} type="text" className="w-full h-8 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" placeholder="Type here..."></input>
  )
}
