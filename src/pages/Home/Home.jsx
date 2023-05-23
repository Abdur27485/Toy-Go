import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import { AuthContext } from '../../providers/AuthProvider';
import Gallery from '../../components/Gallery';

const Home = () => {
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;