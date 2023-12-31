import React, { useState } from 'react';
import ItemList from './ItemList';
import { useSearchParams } from 'react-router-dom';

const RestaurantCategory = ({data, showItems,setShowIndex}) => {

    // const [showItems, setShowItems]= useState(false);
    // console.log(data);

    const handleClick=()=>{
        setShowIndex();
    }

  return (
    <div>
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
      { showItems && <ItemList items={data.itemCards}/>}

      </div>
    </div>
  )
}

export default RestaurantCategory;
