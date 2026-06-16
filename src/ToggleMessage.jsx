import { useState } from "react";

const ToggleMessage=()=>{
    const [isVsible,setIsvsible]=useState(false)
    const togle=()=>setIsvsible(!isVsible)
    
    return(
        <div>
            <button onClick={togle}>Buttun</button>
            <br />
            {isVsible ? 'Hide Message ' : 'Show Message'}
            {isVsible && <p>helow anas</p>}

        </div>
    )
}

export default ToggleMessage ;