import React,{ Children, createContext,useState} from "react";

export const AuthContext=createContext();

export const AuthProvider=({Children})=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const login=()=> setIsAuthenticated(true)
    const logout=()=>setIsAuthenticated(false)

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )

}