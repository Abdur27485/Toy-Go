import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../providers/AuthProvider';

const CategoryTabs = () => {
    const { allToys } = useContext(AuthContext);

    return (
        <div className='mt-[130px] px-8'>
            <h2 className='inline-block font-semibold text-2xl lg:text-5xl px-3 mb-5'>
                Shop By Category
                <div className='h-1 w-4/5 bg-blue-400  mt-3'></div>
            </h2>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Construction Toy</Tab>
                    <Tab>Monster Truck</Tab>
                </TabList>

                <TabPanel>
                    <div className='carousel carousel-center w-full p-4 space-x-4'>
                        {
                            allToys?.filter(toy => toy.subCategory === 'Sports Car').map(toy => {
                                const { toyName, toyPictureUrl, price } = toy;
                                return (
                                    <div className="carousel-item">
                                        <div class="group relative block overflow-hidden">

                                            <img
                                                src={toyPictureUrl}
                                                alt=""
                                                class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                            />

                                            <div class="relative border border-gray-100 bg-white p-6">
                                                <h3 class="mt-4 text-lg font-medium text-gray-900">{toyName}</h3>

                                                <p class="mt-1.5 text-sm text-gray-700">${price}</p>

                                                <form class="mt-4">
                                                    <button class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
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