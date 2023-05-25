import React, { useContext } from 'react';
import {AuthContext} from '../../providers/AuthProvider';
import Login from '../../pages/Login/Login'
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return(
            children
        )
    } else {
        return(
            <Login></Login>
        )
    }
};

export default PrivateRoute;