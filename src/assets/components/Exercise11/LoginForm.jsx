import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handelLogin = (event) => {
        event.preventDefault();
        //Simulate Authentication
        if (username && password) {
            setIsLoggedIn(true)
        }

    }
    const handelLogout = () => {
        setUsername('')
        setPassword('')
        setIsLoggedIn(false)
    }
    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome!, {username}!</h1>
                <button onClick={handelLogout}>Logout</button>
            </div>
        )
    }
    return (
        <div>
            <form onSubmit={handelLogin}>
                <h1>LoginForm</h1>
                <label>UserNmae</label>
                <input type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                 placeholder="Ener User Name"
                 required
                  />
                <label>Password</label>
                <input type="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 placeholder="Ener Password" required />
                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default LoginForm;