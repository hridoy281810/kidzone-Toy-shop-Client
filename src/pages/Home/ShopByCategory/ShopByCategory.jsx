import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from '../ShopCard/ShopCard';
import './ShopBy.css'
import { AuthContext } from '../../../provider/AuthProvider';
import Loading from '../../Loading/Loading';

const ShopByCategory = () => {
  const {setLoading,loading} = useContext(AuthContext)
  const [toys, setToys] = useState([])
  const [activeTab, setActiveTab] = useState('Teddy Bear')

  useEffect(() => {
    setLoading(true)
    fetch(`https://assignment-eleven-server-hridoy281810.vercel.app/allToys/${activeTab}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log('tab active data', data)
        if (data) {
          setToys(data)
        }
      })
      setLoading(false)
  }, [activeTab])
  if(loading){
    return <Loading></Loading>
  }
  const handleTabActive = (activeState) => {
    setActiveTab(activeState)
  }
  return (
    <div className='mb-24 container'>
      <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>
        SHOP BY CATEGORY</h2>
      <Tabs>
        <TabList >
          <div className='bg-pink-500 tab-responsive flex  items-center text-xl font-bold gap-20 p-4 rounded shadow'>
            <Tab onClick={() => handleTabActive('Teddy Bear')}
              className={`${activeTab == "Teddy Bear" ? 'bg-pink-600 text-blue-500 font-bold ' : ''}`}>Teddy Bear</Tab>
            <Tab onClick={() => handleTabActive('Horse')}
              className={`${activeTab == "Horse" ? 'bg-pink-600 text-white font-bold ' : ''}`}>Horse</Tab>
            <Tab onClick={() => handleTabActive('Cat')}
              className={`${activeTab == "Cat" ? 'bg-pink-600 text-white font-bold ' : ''}`}>Cat</Tab>
          </div>
        </TabList>
        <TabPanel>
          <div className='md:grid md:grid-cols-3 gap-5 tab-img'>
            {
              toys.map(toy => <ShopCard key={toy._id} toy={toy}></ShopCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:grid md:grid-cols-3 gap-5'>
            {
              toys.map(toy => <ShopCard key={toy._id} toy={toy}></ShopCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='md:grid md:grid-cols-3 gap-5'>
            {
              toys.map(toy => <ShopCard key={toy._id} toy={toy}></ShopCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;