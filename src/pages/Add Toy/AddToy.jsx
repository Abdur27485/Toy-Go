import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    const { changeTitle, user } = useContext(AuthContext);
    changeTitle('Add Toy')
    // tailwind classe variables
    const formLabel = 'relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600';
    const formInput = 'peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm';
    const formSpan = 'absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs';

    const handleAddNewToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const toyPictureUrl = form.toyPictureUrl.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;

        const newToyData = {
            toyName, sellerName, toyPictureUrl, sellerEmail, subCategory, price, rating, availableQuantity, description
        }
        console.log(newToyData)

        fetch('https://toygo-server.cyclic.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToyData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'success',
                        'Added A New Toy',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <h1 className='text-center font-extrabold text-5xl mb-10'>Add A New Toy</h1>
            <div className='mx-5 lg:w-9/12 lg:mx-auto'>
                <form onSubmit={handleAddNewToy} className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <label className={formLabel}>
                        <input type="text" name='toyName' className={formInput} />
                        <span className={formSpan}>
                            Toy Name
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='sellerName' className={formInput} defaultValue={user?.displayName} />
                        <span className={formSpan}>
                            Seller Name
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='toyPictureUrl' className={formInput} />
                        <span className={formSpan}>
                            Toy Picture Url
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='sellerEmail' className={formInput} defaultValue={user?.email} />
                        <span className={formSpan}>
                            Seller Email
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='subCategory' className={formInput} />
                        <span className={formSpan}>
                            Sub Category
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='price' className={formInput} />
                        <span className={formSpan}>
                            Price
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='rating' className={formInput} />
                        <span className={formSpan}>
                            Rating
                        </span>
                    </label>
                    <label className={formLabel}>
                        <input type="text" name='availableQuantity' className={formInput} />
                        <span className={formSpan}>
                            Available Quantity
                        </span>
                    </label>
                    <label className={`${formLabel} col-span-2`}>
                        <input type="text" name='description' className={formInput} />
                        <span className={formSpan}>
                            Toy Description
                        </span>
                    </label>
                    <div className='col-span-2'>
                        <button className='btn btn-outline block py-3 w-1/2 mx-auto'>Add New Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;