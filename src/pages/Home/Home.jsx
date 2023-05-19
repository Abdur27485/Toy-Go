import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import ImgGallery from '../../components/ImgGallery';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ImgGallery></ImgGallery>
        </div>
    );
};

export default Home;