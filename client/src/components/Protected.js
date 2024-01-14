import react, {useContext} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedR = ({children}) =>{



    const {userPermitted} = useContext(AuthContext);
    if(!userPermitted){
        return <Navigate to="/authenticate" />;
}

return children;
};


export default ProtectedR