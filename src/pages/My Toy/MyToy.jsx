import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToy = () => {
    const [myToys, setMyToys] = useState(null);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:27485/myToys/${user?.email}`)
        .then( res => res.json())
        .then( data => console.log(data))
    }, [user])
    return (
        <div>

        </div>
    );
};

export default MyToy;