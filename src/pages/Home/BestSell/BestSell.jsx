import React, { useEffect, useState } from 'react';
import BestSellCard from './BestSellCard';

const  BestSell = () => {
    const [toyProducts, setToyProducts] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/allToys`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToyProducts(data)
        })
    },[])
    return (
        <div className='mt-24 mb-24'>
            <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>BEST SELLERS THIS WEEK</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5'>
                {
                    toyProducts.slice(0,6).map(toy => <BestSellCard key={toy._id} toy={toy}></BestSellCard> )
                }
            </div>

        </div>
    );
};

export default BestSell;