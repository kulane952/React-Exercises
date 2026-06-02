
import { useState } from "react";
const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle =()=>{
        setIsOn(!isOn);
    }
    return (
       < div>
            <p>the Button is {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Toggle {isOn ? "ON" : "OFF"}</button>
        </div>
    );
}

export default ToggleButton;