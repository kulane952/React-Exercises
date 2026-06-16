const Greeting = ({ isLoggedIn }) => {
//     if (isLoggedIn) {
//         return <h1>Welcome Back!</h1>;
//     } else {
//         return <h1>Please Login</h1>;
//     }
// }

return <h1>{isLoggedIn ? 'welcomeback!': 'pleace sig in'}</h1>
}

export default Greeting;