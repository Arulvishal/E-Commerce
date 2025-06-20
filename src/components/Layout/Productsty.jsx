
export default function ProductCard({ id, name, category, brand, img ,detail,price,discountPrice}) {
  return (
    <div key={id} className="rounded-xl border bg-white shadow-sm p-4 hover:shadow-md">
    <img src={img} alt={name} className="h-60 w-full object-cover mb-2 rounded-md" />
    <div>
      <h4 className="text-sm font-semibold mb-1">{name}</h4>
      <p className="text-xs text-gray-500">Brand: {brand}</p>
      <p className="text-xs text-gray-400">Category: {category}</p>
      <p className="text-shadow-red-900 line-through">${price}</p>
      <p className="text-blue-900 text-xl">${discountPrice}</p>
       <p className="text-xs w-60">{detail}</p>
    </div>
  </div>
  )
}