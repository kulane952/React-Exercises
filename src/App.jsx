
// import UserCard from './assets/components/UserCard';
// // import Blog from './Blog';
// import UserCards from './assets/components/Exercise3/UserCards';
import ToggleButton from './assets/components/Exercise4/ToggleButton';

import {useState} from 'react';

const App = () => {
  // const [count, setCount] = useState(0);

  // const increment =()=>{
  //   setCount(count + 1);
  //   // console.log(count);
  // }

  // const decrement=()=>{
  //   setCount(count - 1);
  //   console.log(count);
  // }
//showes message on click
  // const [Isvisible, setIsVisible] = useState(true);

  // const toggle=()=>{
  //   setIsVisible(!Isvisible);
  // }

  //input field

  // const [name, setName] = useState("");

  // const handleChange=(event)=>{
  //   setName(event.target.value);
  // }

  
  return (
      
          
    <div>
      <ToggleButton />
          {/* <UserCards name="John Doe"
          email="john.doe@example.com" />
          <UserCards name="Jane Smith"
            email="jane.smith@example.com" />
          <UserCards name="Jane Smith"
            email="jane.smith@example.com" />
          <UserCards name="Jane Smith"
            email="jane.smith@example.com" />
          <UserCards name="Jane Smith"
            email="jane.smith@example.com" />
          <UserCards name="Jane Smith"
            email="jane.smith@example.com" />
          {/* <Blog /> */}
          {/* <UserCard /> */} 
           {/* <p>onClick: {count}</p>
            <button onClick={decrement}>Decrement</button>

          <button onClick={increment}>Increment</button> */}

          {/* <button onClick={toggle}>{Isvisible ? "Hide" : "Show"} meassage</button>
        {Isvisible &&   <p>helow marka</p>} */}

        {/* <input type="text"value={name} onChange={handleChange}/>
        <p>Hellow: {name}</p> */}


    </div>
    
  );
};

export default App;
    