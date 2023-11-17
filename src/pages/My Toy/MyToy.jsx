import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyToy = () => {
    const [myToys, setMyToys] = useState(null);
    const { user } = useContext(AuthContext)
    const formLabel = 'relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600';
    const formInput = 'peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm';
    const formSpan = 'absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs';

    useEffect(() => {
        fetch(`https://toygo-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleUpdate = (form,id) => {

        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const updatedData = { price, availableQuantity, description };
        console.log(updatedData, id)

        fetch(`https://toygo-server.vercel.app/toy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then( res => res.json())
        .then( data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Success!',
                    'Information Updated.',
                    'success'
                )
            }
        })
    }

    const handleDelete = id =>{
        fetch(`https://toygo-server.vercel.app/toy/${id}`,{
            method: 'delete'
        })
        .then( res => res.json())
        .then( data =>{
            if(data.deletedCount > 0){
                Swal.fire(
                    'success',
                    'Toy Deleted',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <h1 className='text-5xl mt-5 mb-8 font-extrabold text-center'>My Toys</h1>
            <div className="overflow-x-auto rounded-lg border border-gray-200 w-9/12 mx-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Seller</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Toy Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Sub-category</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Available Quantity</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            myToys?.map(toy => {
                                const { sellerName, toyName, subCategory, price, availableQuantity, description } = toy;
                                return (
                                    <tr key={toy._id} className='text-center odd:bg-gray-50'>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{sellerName}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{toyName}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{subCategory}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{price}</td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{availableQuantity}</td>
                                        <td className="px-4 py-2 flex flex-col gap-2">
                                            <label htmlFor={toy._id} className="bg-blue-600 text-white rounded-md py-1 px-4 hover:bg-blue-700">Update</label>
                                            <input type="checkbox" id={toy._id} className="modal-toggle" />
                                            <div className="modal">
                                                <div className="modal-box relative">
                                                    <label htmlFor={toy._id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                    <h2 className='text-center text-2xl font-semibold mb-5'>Update</h2>
                                                    <form onSubmit={(event) => {
                                                        event.preventDefault()
                                                        handleUpdate(event.target, toy._id)
                                                    }} className=' space-y-4'>
                                                        <label className={formLabel}>
                                                            <input type="text" name='price' defaultValue={price} className={formInput} />
                                                            <span className={formSpan}>
                                                                Price
                                                            </span>
                                                        </label>
                                                        <label className={formLabel}>
                                                            <input type="text" name='availableQuantity' defaultValue={availableQuantity} className={formInput} />
                                                            <span className={formSpan}>
                                                                Available Quantity
                                                            </span>
                                                        </label>
                                                        <label className={formLabel}>
                                                            <textarea type="text" name='description' defaultValue={description} className={`${formInput} min-h-fit my-3`} />
                                                            <span className={formSpan}>
                                                                Description
                                                            </span>
                                                        </label>
                                                        <input type="submit" className='bg-blue-600 text-white text-xl cursor-pointer active:scale-95 transition-all rounded-md py-1 px-4 hover:bg-blue-700' value="Update" />
                                                    </form>
                                                </div>
                                            </div>
                                            <button onClick={() => {
                                                Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: "You won't be able to revert this!",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Yes, delete it!'
                                                  }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        handleDelete(toy._id)
                                                    }
                                                  })
                                            }} className='bg-red-600 text-white rounded-md py-1 px-4 hover:bg-red-700'>Delete</button>
                                        </td>
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

export default MyToy;