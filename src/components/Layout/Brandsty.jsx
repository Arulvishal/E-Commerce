export default function BrandCard({ id, name, img }) {
  return (
      <div className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow" key={id}>
    <img src={img} alt={name} className="h-32 w-full object-contain mb-2" />
    <div className="text-center">
      <h3 className="font-medium text-base">{name}</h3>
        {/* <p className="text-xs text-gray-500">Category: {category}</p> */}
    </div>
  </div>    
  )
}