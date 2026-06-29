import { Link, Outlet } from "react-router"



const  categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Midday favorites'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Evening meals'
  }
];
function Categories() {
  return (
    <div className="grid md:grid-colors[300px,1fr] gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map(category=>(
            <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="block p-3 rounded hover:bg-rose-50 hover:text-rose-600"
            >
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}

        </div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Categories