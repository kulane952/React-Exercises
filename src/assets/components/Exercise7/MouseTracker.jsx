
import { useEffect, useState } from "react";

const MouseTracker = () => {
    const [coors, setcoors] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handleMouseMove = (e) => {
            setcoors({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)        //clean
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])

    return (
        <div>
            <p>Mousex:{coors.x}</p>
            <p>Mousey:{coors.y}</p>
        </div>
    )

}

export default MouseTracker;