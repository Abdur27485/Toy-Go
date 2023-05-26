import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../providers/AuthProvider';

const CategoryTabs = () => {
    const { allToys, user } = useContext(AuthContext);

    return (
        <div className='mt-[130px] px-3 lg:px-8'>
            <h2 className='inline-block font-semibold text-2xl lg:text-5xl mb-5'>
                Shop By Category
                <div className='h-1 w-4/5 bg-blue-400  mt-3'></div>
            </h2>
            <Tabs>
                <TabList className={'flex mb-2'}>
                    <Tab>Sports Car</Tab>
                    <Tab>Construction Toy</Tab>
                    <Tab>Monster Truck</Tab>
                </TabList>

                <TabPanel>
                    <div className='carousel carousel-center w-full lg:w-full gap-3'>
                        {
                            allToys?.filter(toy => toy.subCategory === 'Sports Car').map(toy => {
                                const { toyName, toyPictureUrl, price, _id } = toy;
                                return (
                                    <div className="carousel-item bg-slate-100">
                                        <div className="group relative block overflow-hidden">

                                            <img
                                                src={toyPictureUrl}
                                                alt=""
                                                className="h-[150px] w-[224px] lg:h-64 lg:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                            />

                                            <div className="relative border border-gray-100 bg-slate-100 p-6 pt-0">
                                                <h3 className="mt-4 text-lg font-medium text-gray-900">{toyName}</h3>

                                                <p className="mt-1.5 text-sm text-gray-700">${price}</p>

                                                <form className="mt-4">
                                                    <button className="block w-full rounded bg-yellow-400 px-4 py-2 lg:p-4 text-sm font-medium transition hover:scale-105">
                                                        View Details
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='carousel carousel-center w-full lg:w-full gap-3'>
                        {
                            allToys?.filter(toy => toy.subCategory === 'Construction Toy').map(toy => {
                                const { toyName, toyPictureUrl, price, _id } = toy;
                                return (
                                    <div className="carousel-item bg-slate-100">
                                        <div className="group relative block overflow-hidden">

                                            <img
                                                src={toyPictureUrl}
                                                alt=""
                                                className="h-[150px] w-[224px] lg:h-64 lg:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                            />

                                            <div className="relative border border-gray-100 bg-slate-100 p-6 pt-0">
                                                <h3 className="mt-4 text-lg font-medium text-gray-900">{toyName}</h3>

                                                <p className="mt-1.5 text-sm text-gray-700">${price}</p>

                                                <form className="mt-4">
                                                    <button className="block w-full rounded bg-yellow-400 px-4 py-2 lg:p-4 text-sm font-medium transition hover:scale-105">
                                                        View Details
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='carousel carousel-center w-full lg:w-full gap-3'>
                        {
                            allToys?.filter(toy => toy.subCategory === 'Monster Truck').map(toy => {
                                const { toyName, toyPictureUrl, price, _id } = toy;
                                return (
                                    <div className="carousel-item bg-slate-100">
                                        <div className="group relative block overflow-hidden">

                                            <img
                                                src={toyPictureUrl}
                                                alt=""
                                                className="h-[150px] w-[224px] lg:h-64 lg:w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                            />

                                            <div className="relative border border-gray-100 bg-slate-100 p-6 pt-0">
                                                <h3 className="mt-4 text-lg font-medium text-gray-900">{toyName}</h3>

                                                <p className="mt-1.5 text-sm text-gray-700">${price}</p>

                                                <form className="mt-4">
                                                    <button className="block w-full rounded bg-yellow-400 px-4 py-2 lg:p-4 text-sm font-medium transition hover:scale-105">
                                                        View Details
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default CategoryTabs;