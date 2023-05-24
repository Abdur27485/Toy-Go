import React from 'react';

const ToysBlogs = () => {
    return (
        <div className='mt-[130px]  px-3 lg:px-8'>
            <h2 className='inline-block font-semibold text-2xl lg:text-5xl mb-5'>
                Blogs
                <div className='h-1 w-4/5 bg-blue-400  mt-3'></div>
            </h2>
            <p className='lg:text-xl mt-2 pr-3 mb-10'>The blog section is also a great way to stay up-to-date on the latest news and trends in the toy car industry. You can learn about new products, upcoming events, and more.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8'>
                <article
                    class="overflow-hidden rounded-lg border border-gray-100 bg-slate-100 hover:bg-slate-200 transition duration-500 shadow-xl"
                >
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        class="h-56 w-full object-cover p-5 rounded-md "
                    />

                    <div class="p-4 sm:p-6">
                        <a href="#">
                            <h3 class="text-lg font-medium text-gray-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                            Molestias explicabo corporis voluptatem?
                        </p>

                        <a
                            href="#"
                            class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more

                            <span
                                aria-hidden="true"
                                class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                            >
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default ToysBlogs;