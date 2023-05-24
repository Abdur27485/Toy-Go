import React, { useContext } from 'react';
import Banner from '../../components/Home/Banner';
import { AuthContext } from '../../providers/AuthProvider';
import Gallery from '../../components/Home/Gallery';
import CategoryTabs from '../../components/Home/CategoryTabs';
import Testimonials from '../../components/Home/Testimonials';

const Home = () => {
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;