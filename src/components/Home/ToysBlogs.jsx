import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const ToysBlogs = () => {
    return (
        <div className='mt-[130px] px-3 lg:px-8'>
            <Tabs>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* <!-- Page content here --> */}
                        <TabPanel className={'grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8'}>
                                <div className="card card-compact w-96 bg-slate-100">
                                    <figure><img src="https://images.huffingtonpost.com/2015-07-17-1437155465-1424656-SteveJobs.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?...</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-96 bg-slate-100">
                                    <figure><img src="https://images.huffingtonpost.com/2015-07-17-1437155465-1424656-SteveJobs.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?...</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-96 bg-slate-100">
                                    <figure><img src="https://images.huffingtonpost.com/2015-07-17-1437155465-1424656-SteveJobs.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?...</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-compact w-96 bg-slate-100">
                                    <figure><img src="https://images.huffingtonpost.com/2015-07-17-1437155465-1424656-SteveJobs.jpg" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?...</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            
                        </TabPanel>
                        <TabPanel>
                            <h1>content 2</h1>
                        </TabPanel>
                        <TabPanel>
                            <h1>content 3</h1>
                        </TabPanel>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <TabList>
                                <Tab>heading 1</Tab>
                                <Tab>heading 2</Tab>
                                <Tab>heading 3</Tab>
                            </TabList>
                        </ul>

                    </div>
                </div>
            </Tabs>
        </div>
    );
};

export default ToysBlogs;