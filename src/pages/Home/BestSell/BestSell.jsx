import React, {  useEffect, useState } from 'react';
import BestSellCard from './BestSellCard';
// import { AuthContext } from '../../../provider/AuthProvider';
// import Loading from '../../Loading/Loading';

const BestSell = () => {
    // const {setLoading,loading} = useContext(AuthContext)
    const [toyProducts, setToyProducts] = useState([])

    useEffect(() => {
    // setLoading(true)
        fetch(`https://assignment-eleven-server-hridoy281810.vercel.app/allToys`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToyProducts(data)
            })
        //   setLoading(false)
    }, [])
    // if(loading){
    //     return <Loading></Loading>
    // }
    return (
        <div className='mt-24 mb-24 container'>
            <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>BEST SELLERS THIS WEEK</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 tab-img gap-5'>
                {
                    toyProducts.slice(0, 6).map(toy => <BestSellCard key={toy._id} toy={toy}></BestSellCard>)
                }
            </div>
        </div>
    );
};

export default BestSell;