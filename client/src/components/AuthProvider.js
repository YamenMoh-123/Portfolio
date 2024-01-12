import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios';

export const AuthContext = createContext();


const AuthProvider = ({ children }) =>{
    const [isLogged, setIsLogged] = useState(false);
    const [userPermitted, setUserPermitted] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("accessToken");
        if(token){
            setIsLogged(true);
            checkUserPermission(token);
        }
    }, []);

    const logIn = (token)=>{
        
        localStorage.setItem("accessToken", token);
        setIsLogged(true);
        checkUserPermission(token);
    };

    const logOut = ()=>{
        localStorage.removeItem("accessToken");
        setIsLogged(false);
        window.location.reload();
    }

    async function checkUserPermission (token){
        
        try{
            const response = await axios.get("/authenticateToken", {
                headers: {Authorization: `Bearer ${token}`}
            });
            const result = response.data.permitted;
            setUserPermitted(result || false);
        }
        catch(err){
            //
        }
    }

    return(

        <AuthContext.Provider value = {{isLogged, userPermitted, logIn, logOut}}>
            {children}


        </AuthContext.Provider>


    );


}

export default AuthProvider