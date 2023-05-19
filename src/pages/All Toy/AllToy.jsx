import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToy = () => {
    const [allToys, setAllToys] = useState(null);

    useEffect(() => {
        fetch('http://localhost:27485/toy')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    // const {sellerName,toyName,subCategory,price,availableQuantity} = allToys;
    return (
        <div>
            <h1 className='text-5xl mt-5 mb-3 font-extrabold text-center'>All Toys</h1>
            <div className="overflow-x-auto rounded-lg border border-gray-200 w-9/12 mx-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Seller</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Toy Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Sub-category</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Available Quantity</th>
                            <th class="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            allToys?.map(toy => {
                                const {sellerName,toyName,subCategory,price,availableQuantity} = toy;
                                return (
                                    <tr className='text-center odd:bg-gray-50'>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{sellerName}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toyName}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{subCategory}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{availableQuantity}</td>
                                        <td className="px-4 py-2"><button className='bg-blue-600 text-white rounded-md py-1 px-4 hover:bg-blue-700'>Details</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;