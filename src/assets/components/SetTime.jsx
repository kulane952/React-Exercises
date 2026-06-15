
import { useState, useEffect } from "react"
const Stopwatch = () => {
    const [Time, setTime] = useState(0);
    const [isRuning, setIsRuning] = useState(false);


    useEffect(() => {
        let timerID;

        if (isRuning) {
            timerID = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        }
        return () => clearInterval(timerID)
    }, [isRuning])

    const handelchange = () => {
        setIsRuning(true)
    }
    const handelStop=()=>{
        setIsRuning(false)
    }
    const handelResest=()=>{
        setIsRuning(false);
        setTime(0)
    }
    return (
        <div>
            <h2>StopWach {Time} secend</h2>
            <button disabled={isRuning} onClick={handelchange}>start</button>
            <button disabled={!isRuning} onClick={handelStop}>stop</button>
            <button onClick={handelResest}>rest</button>
        </div>
    )
}

export default Stopwatch;