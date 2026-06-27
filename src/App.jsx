
// import UserCard from './assets/components/UserCard';
// // import Blog from './Blog';
// import UserCards from './assets/components/Exercise3/UserCards';
// import ToggleButton from './assets/components/Exercise4/ToggleButton';
// import ListItems from './ListItems';

// import Netflix from './Netflix';
// import ShoppingCart from './assets/components/Exercise5/ShoppingCart'
// import TitleUpdater from './assets/components/Exercise6/GreetingTitle'
// import MouseTracker from './assets/components/Exercise7/MouseTracker'
// import SeTimer from './assets/components/SetTime'
// import Countdown from './assets/components/Exercise8/CountdownTimer'
// import GitHubUserSearch from './assets/components/Exercise9/GitHubUserSearch '
// import UserList from './assets/components/Exercise10/UserList'
// import LoginForm from './assets/components/Exercise11/LoginForm'
// import Counter from './assets/components/Exercise12/Counter'
import './index.css';

import TodoApp from './assets/components/Exercise19/TodoApp'

// import Profile from './Prop'
// import Greeting from './Greeting'
// import Navication from './Navication'

// import ToggleMessage from './ToggleMessage'


import { useState } from 'react';

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

  //Drack mode
  // const [Drack, setDrack] = useState(false);

  // const toggleDrack = () => {
  //   setDrack(!Drack);
  // }

  //Like button

  // const [liked, setLiked] = useState(false);
  // const [count, setCount] = useState(0);
  // const  toggleLike = () => {
  //   setLiked(!liked);
  //   setCount(liked ? count - 1 : count + 1);
  // }

  //TABS
  // const [Tabs, setTabs] = useState("Home");

  // const toggleTabs=(tab)=>{
  //   setTabs(tab);
  // }
  // const [passwor, setPassword] = useState("124");

  // const handleChange=(event)=>{
  //   setPassword(!passwor);
  // }

  // const [AccordionFAQ,setAccordion] = useState();

  // const toggleAccordion=(index)=>{
  //   setAccordion(AccordionFAQ === index ? null : index);
  // }

  // const users = [
  //   { id: 1, name: "anas", email: "anas@gmail.com" },
   

  // ]
  //Greeting
  // const [isLoggedIn,setIsLoggedIn] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  //NavicationMeassges
  // const [underMessage,setUnderMessage]=useState(['hi','h','kkkk','kkddis'])


  return (
    <div>
      <TodoApp/>
      {/* <Counter/> */}
      {/* <LoginForm/> */}
      {/* <ToggleMessage /> */}
      {/* <Navication underMessage={underMessage}/> */}
      {/* <Greeting isLoggedIn={isLoggedIn} /> */}
      {/* <Greeting isLoggedIn={isLoggedIn} /> */}
      {/* <UserList users={users} /> */}

      {/* <Profile
        image="https://i.pravatar.cc/150?img=1"
        name="Anis"
        job="Frontend Developer"
      />
      <Profile
        image="https://i.pravatar.cc/150?img=2"
        name="Ahmed"
        job="UI Designer"
      />
      <Profile
        image="https://i.pravatar.cc/150?img=2"
        name="Ahmed"
        job="UI Designer"
      />
      <Profile
        image="https://i.pravatar.cc/150?img=2"
        name="Ahmed"
        job="UI Designer" */}
      {/* /> */}

      {/* <GitHubUserSearch/> */}
      {/* <SeTimer/> */}
      {/* <Countdown/> */}
      {/* <TitleUpdater/> */}
      {/* <MouseTracker/> */}
      {/* <ShoppingCart /> */}
      {/* <ToggleButton />
      <ListItems />
      <Netflix />
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

      {/* /* <div
        style={{
          backgroundColor: Drack ? "#1b1b1f" : "white",
          color: Drack ? "white" : "black",
          height: "100vh"
        }}
      >
      //Drack mode
        <button onClick={toggleDrack}>
          Change Mode
        </button>
      </div>*/}

      {/* //LIKE BUTTON */}

      {/* <button onClick={toggleLike}>
          {liked ? "Unlike" : "Like"} ({count})
        </button> */}
      {/* //TABS home about contact */}

      {/* <button
        onClick={() => toggleTabs("Home")}
        className={Tabs === "Home" ? "active" : ""}
      >
        Home
      </button>

      <button
        onClick={() => toggleTabs("About")}
        className={Tabs === "About" ? "active" : ""}
      >
        About
      </button>

      <button
        onClick={() => toggleTabs("Contact")}
        className={Tabs === "Contact" ? "active" : ""}
      >
        Contact
      </button>

      <h1>{Tabs}</h1> */}
      {/* 
       <button onClick={handleChange}>{passwor ? "Hide" : "Show"} meassage</button>
        {passwor &&   <p>password:{'123456'}</p>}  */}


      {/* //AccordionFAQ */}

      {/* < button onClick={() => toggleAccordion(0)}>
          What is React?
        </button>
        {AccordionFAQ === 0 && <p>React is a JavaScript library for building user interfaces.</p>}

        <button onClick={() => toggleAccordion(1)}>
          What is a component?
        </button>
        {AccordionFAQ === 1 && <p>A component is a reusable piece of UI that can be used to build complex interfaces.</p>}

        <button onClick={() => toggleAccordion(2)}>
          What is state in React?
        </button>
        {AccordionFAQ === 2 && <p>State is a built-in object that allows components to manage and update their own data.</p>} */}


    </div>

  );
};

export default App;
