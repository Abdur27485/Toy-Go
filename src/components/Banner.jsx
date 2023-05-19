import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row bg-slate-100 mb-20 lg:mb-[130px]'>
                <div className='pl-2 py-8 lg:pl-7 lg:py-20 lg:w-1/2'>
                    <h1 className='text-4xl md:text-7xl font-extrabold uppercase'>big-time adventure</h1>
                    <p className='mt-5 mb-8 font-semibold font-sans mr-2 lg:mr-5'>Our toy cars are made from high-quality materials and are designed to last. They are also safe for kids to play with. We offer a variety of features and accessories to make your child's experience even more enjoyable.</p>
                    <button className='btn rounded-3xl block'>Shop Now</button>
                </div>
                <div className='lg:w-1/2'>
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1271700/capsule_616x353.jpg?t=1657802187' className='w-full h-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;