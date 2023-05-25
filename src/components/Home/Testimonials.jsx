import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        fetch('https://assignment-11-server-production-8607.up.railway.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    console.log(testimonials);
    return (
        <div className='mt-[130px]'>
            <section class="bg-white">
                <div class="mx-auto max-w-screen-xl">
                    <h2 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>

                    <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        {
                            testimonials?.map(testimonial => {
                                const { review, rating, customerName, customerImg } = testimonial;
                                return (
                                    <blockquote class="mx-3 lg:mx-0 flex flex-col max-w-sm rounded-lg bg-gray-100 p-8">
                                        <div class="flex items-center gap-4">
                                            <img
                                                alt="Man"
                                                src={customerImg}
                                                class="h-16 w-16 rounded-full object-cover"
                                            />

                                            <div>
                                                <div class="flex justify-center gap-0.5 text-green-500">
                                                    {
                                                        <ReactStars
                                                            count={5}
                                                            size={24}
                                                            color2={'#ffd700'}
                                                            color1={'gray'}
                                                            value={rating}
                                                            edit={false}
                                                            />
                                                    }
                                                </div>

                                                <p class="mt-1 text-lg font-medium text-gray-700">{customerName}</p>
                                            </div>
                                        </div>

                                        <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                                            {review}
                                        </p>
                                    </blockquote>
                                )
                            })
                        }
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Testimonials;