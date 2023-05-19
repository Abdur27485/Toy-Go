import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {
    const [allToys, setAllToys] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:27485/toy')
        .then( res => res.json())
        .then(data => setAllToys(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllToy;