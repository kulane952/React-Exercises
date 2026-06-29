import { createBrowserRouter } from "react-router";
import index from './Index'
import NotFound from "./assets/components/Exercise25/NotFound";
import Home from "./assets/components/Exercise25/Home";
import RecipeList from "./assets/components/Exercise25/RecipeList";
import RecipeDetail from "./assets/components/Exercise25/RecipeDetail";
import Categories from "./assets/components/Exercise25/Categories";
import CategoryRecipes from "./assets/components/Exercise25/CategoryRecipes";
import Index from "./Index";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Index/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>

            },
            {
                path:'recipes',
                element:<RecipeList/>
            },
            {
                path:'recipes/:id',
                element:<RecipeDetail/>
            },
            {
                path:'categories',
                element:<Categories/>,
                children:[
                    {
                path:':categoryId',
                element:<CategoryRecipes/>
            }
                ]
            },
            
        ]
    }
])