import React from 'react'
import { Link, useParams } from 'react-router'

function RecipeDetail() {
  const {id}=useParams();
  
  // In a real app, you would fetch recipe data based on the id
  // This is just sample data for the challenge

  const recipe={
    id,
    title:'sample Recipe',
    ingredients:[
      '2 cups flour',
      '1 cups sugar',
      '3 eggs',
      '1 cup milk'
    ],
    instructions:[
      'mix dry ingredients',
      'Add wet ingerdients',
      'Bake at 350°F for 25 minutes'
    ]
  }
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <Link
      to='/recipes'
      className='text-rose-600 hover:text-rose-700 mb-4 inline-block'
      >
         ← Back to Recipes
      </Link>
      <h2 className='text-3xl font-bold mb-6'>{recipe.title}</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Ingredients</h3>
          <ul className='list-disc list-inside space-y-2'>
            {recipe.ingredients.map((ingredient,index)=>(
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Instructions</h3>
          <ol className='list-decimal list-inside space-y-2'>
            {recipe.ingredients.map((step, index)=>(
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </div>

    </div>
  )
}

export default RecipeDetail