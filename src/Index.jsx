import { NavLink, Outlet } from "react-router"

function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-rose-600">Recipe Book</h1>
          <div className="space-x-6">
            <NavLink
            to="/"
            end
            className={({IsActive})=>
              `hover:text-rose-600 ${IsActive ? 'text-rose-600 font-bold':'text-gray-600'}`
            }
            >
              Home

            </NavLink>
            <NavLink
            to="/Recipes"
            end
            className={({IsActive})=>
              `hover:text-rose-600 ${IsActive ? 'text-rose-600 font-bold':'text-gray-600'}`
            }
            >
              Recipes

            </NavLink>
            <NavLink
            to="/Categories"
            end
            className={({IsActive})=>
              `hover:text-rose-600 ${IsActive ? 'text-rose-600 font-bold':'text-gray-600'}`
            }
            >
              Categories


            </NavLink>
            
          </div>

        </div>
      </nav>
      <main className="max-w-4xl mx-auto p-6">
        <Outlet/>
      </main>
      </div>
  )
}

export default Index