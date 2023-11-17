import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Gallery = () => {
    const [gallerCardData, setGalleryCardData] = useState(null);

    useEffect(() => {
        fetch('https://toygo-server.vercel.app/toy')
            .then(res => res.json())
            .then(data => setGalleryCardData(data.slice(7, 13)))
    }, [])
    const {allToys} = useContext(AuthContext);
    return (
        <div className='lg:px-8'>
            <h2 className='inline-block font-semibold text-2xl lg:text-5xl px-3'>
                Gallery
                <div className='h-1 w-4/5 bg-blue-400  mt-1'></div>
            </h2>
            <p className='lg:text-xl mt-2 pl-3 pr-3'>We have a wide selection of toys to choose from, so you're sure to find something your child will love</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-8 mt-10'>
                {
                    allToys?.slice(7,13)?.map(galleryData => {
                        const { toyPictureUrl, toyName, price } = galleryData;
                        return (
                            <div className='overflow-hidden rounded mx-2 lg:mx-0'>
                                <a href="#" class="relative block group">
                                    <img
                                        src={toyPictureUrl}
                                        class="bg-slate-100 pb-28 pt-5 h-[350px] lg:h-[450px] w-full object-cover transition duration-500 lg:group-hover:scale-105"
                                    />
                                    <div class="absolute bottom-0 w-full px-6 py-3 bg-slate-100">
                                        <h3 class="text-2xl font-medium">{toyName}</h3>

                                        <p class="mt-1.5 max-w-[40ch] text-lg inline-block py-2 pr-6">
                                            Price: {price}$
                                        </p>
                                        <button className='bg-blue-600 text-white rounded-md py-1 px-4 hover:bg-blue-700 mt-3'>Shop Now</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
                <button className='btn col-start-2 mx-10'>See More</button>
            </div>
        </div>
    );
};

export default Gallery;