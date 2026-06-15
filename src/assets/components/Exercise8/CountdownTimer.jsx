

import { useState, useEffect } from "react";

const Countdown = () => {
    const [initialTime, setinitialTime] = useState(30)
    const [timeLeft, settimeLeft] = useState(30)
    const [isRunning, setisRunning] = useState(false)
    useEffect(() => {
        let Timerid;
        if (isRunning && timeLeft > 0) {
            Timerid = setInterval(() => {
                settimeLeft((prev) => prev - 1)
            }, 1000)
        }
        // Cleanup: clear interval when not running or unmounting
        return () => clearInterval(Timerid);
    }, [isRunning, timeLeft])

    //button1
    const handeStart = () => {
        if (timeLeft > 0) {
            setisRunning(true)

        }
    }
        //button2
        const handeStop=()=>{
            setisRunning(false)
        }
    //button3
    const handelRest=()=>{
        setisRunning(false);
        settimeLeft(initialTime)

    }

    //input
    const handelChange=(e)=>{
        const value=number(e.target.value)
        setinitialTime(value)
        settimeLeft(value)
        setisRunning(false)
    }


    return (
        <div>
            <h2>Countdown Timer</h2>
            <label>Set Time (seconds): </label>
            <input type="number" value={initialTime} onChange={handelChange} />
            {/* ////////////////////// */}
             <p>Time Left: {timeLeft} seconds</p>
            <button disabled={isRunning || timeLeft ===0} onClick={handeStart}>Start</button>
            <button disabled={!isRunning || timeLeft ===0}  onClick={handeStop}>stop</button>
            <button onClick={handelRest}>Start</button>
        </div>
    )
}


export default Countdown;