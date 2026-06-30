import react, {Children, useCountext} from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../PostsContext';


const ProtectedRoute=({Children})=>{
    const {isAuthenticated}=useCountext(AuthContext)
    const location=useLocation();

    if(!isAuthenticated){
        return <Navigate to='/login' state={{from:location}} replace/>
    }
    return Children
}

export default ProtectedRoute; 