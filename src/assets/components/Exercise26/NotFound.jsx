import { useRouteError,Link } from "react-router";

const NotFound=()=>{
    const error =useRouteError();

    return(
        <div>
            <h2>Error</h2>
            <p>{error?.statusText || error?.message || 'page not found'}</p>
            <Link to='/'>Go back to Home</Link>
        </div>
    )
}
export default NotFound;