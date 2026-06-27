import {useState} from 'react'

function TodoApp() {
  const [todos,setTodos]=useState([])
  const [inputValue, setInputValue]=useState('')

  const handelSubmit=(e)=>{
    e.preventDefault();
    if(!inputValue.trim())return;
    setTodos([...todos,{id:Date.now(),text:inputValue, completed:false}]);
    setInputValue('')
  };
  const toggelTodo=(id)=>{
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed}:todo

    ));
  };
   const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id !==id));
   }
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4' >
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
            My Todo List
          </h1>
          <form onSubmit={handelSubmit} className='mb-6'>
            <div className='flex gap-2'>
              <input type="text" 
              value={inputValue}
              onChange={(e)=> setInputValue(e.target.value)}
              placeholder='Add a new todo... '
              className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-tarnsparent'
               />
               <button type='Submit'
                className='px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors'>Add</button>
            </div>
          </form>
          <div className='space-y-3'>
            {todos.map(todo=>(
              <div key={todo.id}
              className='flex item-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group'
              >
                <input type="checkbox"
                checked={todo.completed}
                onChange={()=>toggelTodo(todo.id)}
                className='h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500'
                 />

                 <span className={`flex-1 ${todo.completed ?'text-gray-400 line-through': 'text-gray-700' }`}>
                  {todo.text}
                 </span>
                 <button 
                 onClick={()=> deleteTodo(todo.id)}
                 className='opacity-0 group-hover:opacity-100 px-2 py-1 text-red-600 hover:text-red-700 focus:outline-none transition-opacity'
                 >
                  Delete
                 </button>

              </div>
            ))}

          </div>
          {todos.length ===0 &&(
            <p className='text-center text-gray-500 mt-6'>
              No todos yet. Add some tasks above!
            </p>
          )}

        </div>

      </div>

    </div>
  )
}

export default TodoApp;