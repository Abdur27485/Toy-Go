import React, { useContext } from 'react';
import Banner from '../../components/Home/Banner';
import { AuthContext } from '../../providers/AuthProvider';
import Gallery from '../../components/Home/Gallery';
import CategoryTabs from '../../components/Home/CategoryTabs';
import Testimonials from '../../components/Home/Testimonials';
import ToysBlogs from '../../components/Home/ToysBlogs';

const Home = () => {
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
            <Testimonials></Testimonials>
            <ToysBlogs></ToysBlogs>
        </div>
    );
};

export default Home;