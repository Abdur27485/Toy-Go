import React, { useContext } from 'react';
import Banner from '../../components/Banner';
import { AuthContext } from '../../providers/AuthProvider';
import Gallery from '../../components/Gallery';
import CategoryTabs from '../../components/CategoryTabs';

const Home = () => {
    const {changeTitle} = useContext(AuthContext);
    changeTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryTabs></CategoryTabs>
        </div>
    );
};

export default Home;