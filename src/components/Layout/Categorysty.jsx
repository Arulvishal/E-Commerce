import { MdDescription } from "react-icons/md";

export default function CategoryCard ({ id, name, description, img }){
    return(
  <div key={id} className="rounded-2xl shadow-md overflow-hidden bg-white hover:scale-105 transition-transform">
    <img src={img} alt={name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
) }