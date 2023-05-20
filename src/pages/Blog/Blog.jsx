import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('KidZone | Blog')
    return (
        <div className='mt-10 mb-24'>
            <h2 className='text-center text-4xl text-pink-600 font-bold mb-8 '>BEST BLOG SECTION</h2>
            <div className='md:grid md:grid-cols-2 gap-6 container'>
                <div className="card bg-pink-400 ">
                    <div className="card-body mb-4">
                        <h2 className="card-title text-2xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?!</h2>
                        <p className='text-xl'>An access token is a credential that is issued to a client site by an authentication server. This gives the client access to secure resources on behalf of the authenticated user. WestBengal has a short duration of a few minutes.</p>
                        <p className='text-xl'>A refresh key is issued to a client by an authentication server with an Axis token. Refresh stores are longer than access stores and have a duration of many days to many months Currently when an express train expires or becomes invalid it is used in a new axis train Bir Shreshtha Connecting New Accepts Harbor Sends user electrons without needing re-authentication vehicles should be protected</p>
                        <p className='text-xl'>To store access tokens and refresh tokens on the client-side, there are a few common approaches: <br />
                            1. In-memory storage <br />
                            2. Browser storage <br />
                            3. HTTP-only cookies
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-pink-400 ">
                    <div className="card-body mb-4">
                        <h2 className="card-title text-2xl">Compare SQL and NoSQL databases?!</h2>
                        <p className='text-xl'>Differences between SQL and No SQL databases can be due to various reasons such as requirements schema matching needs and specific use cases. It is important to evaluate these factors carefully and select the database type based on the needs of your project.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-pink-400 ">
                    <div className="card-body mb-4">
                        <h2 className="card-title text-2xl">What is express js? What is Nest JS ?!</h2>
                        <p className='text-xl'>Express JS is a minimalist web application framework for Node js. It provides easy and flexible components to build web applications and APIs. Express JS allows users to define how to handle HTTP requests without mediating or other web-related processing operations.
                        </p>
                        <p className='text-xl'>
                            Nest JS is a competitive framework for building efficient server-side applications. It builds on Express JS and improves it with a more structured and opinionated approach. Nest js uses TypeScript as the primary language and object-oriented programming uses dependency injection.
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-pink-400 ">
                    <div className="card-body mb-4">
                        <h2 className="card-title text-2xl">What is express js? What is Nest JS ?!</h2>
                        <p className='text-xl'>
                            In mongoDB Dewey's overall approach, pipelines consist of one or more steps, each stage representing their specific activity to form a sequence of data transformations that are passed to the next output stage to pay for the step.
                        </p>
                        <p className='text-xl'>MongoDB aggregates: <br />
                            1. $match: Filters the documents based on specific criteria, similar to the find method. <br />
                            2. $group:Grouping data together based on a specific key, such as calculating the sum average, etc.. <br />
                            3. $project:
                            Reshapes data by including specific fields and calculating new fields or renaming existing fields. <br />
                            4. $sort:
                            Shortens the data according to a specific title such as ascending and descending low to high high to low lowercase uppercase a specific name like so. <br />
                            5. $limit and $skip: From many covers, I can exclude a certain data, I can show certain money, I can skip certain things, I can skip some data, I can leave some data, I can show the rest, I can tell how much data length will be through limit. <br />
                            6. $lookup:
                            A contact-like operation allows you to fetch related data from other collections based on a matching condition
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;