
import { useState } from "react";
const Netflix = () => {
    const [active, setActive] = useState('Home');
    const menus = ["Home", "TV Shows", "Movies", "New", "My List"];
    return (
        <div className="app">
            <nav className="navbar">
                <h1 className="logo">NETFLIX</h1>
                <ul className="nav-links">
                    {menus.map((menu) => (
                        <li key={menu}
                        key={menu}
                        onClick={()=> setActive(menu)}
                        className={active === menu ? "active" : ""}
                        >
                         
                            
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="content">
        <h1>{active}</h1>
      </div>
    </div>
        
    );
};

export default Netflix;