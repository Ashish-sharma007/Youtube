import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { json } from 'react-router-dom';
import { toggleMenu } from '../utills/appSlice';
import { YOUTUBE_AUTO_SUGGESTION } from '../utills/contants';
import { cacheResults } from '../utills/searchSlice';
const Head = () => {

const [searchQuery, setSearchQuery] = useState('');
const [ suggestions, setSuggestions] = useState([]);
const [ showSuggestions, setShowSuggestions] = useState(false);


const searchCache = useSelector((store) => store.search);

const dispatch = useDispatch();

useEffect(()=> {
 
  if (searchCache[searchQuery]) {
    setSuggestions(searchCache[searchQuery]);
  } else {

    const timer = setTimeout (getSeachSuggestions(), 200  );
return () => {
  clearTimeout(timer);
}
}
} ,[searchQuery] );

const getSeachSuggestions = async () => {
 
  const data = await fetch(YOUTUBE_AUTO_SUGGESTION + searchQuery)
  const json = await data.json();
setSuggestions(json[1]);
  
}

   dispatch(cacheResults({
    [searchQuery]: json([1]),
   }));


 


const toggleMenuHandler = () => {
dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1 '>
    <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer ' alt='menu' src='https://cdn-icons-png.flaticon.com/512/3917/3917215.png'/>
   
   
   <a href="/"> <img className='h-12 pb-2 px-4' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" alt="logo"  />
   </a></div>
    <div className='col-span-10 px-10'>
    <div>
        <input className='w-1/2 border border-gray-400 rounded-l-full p-2 px-3' type="text" placeholder='Top Hindi Songs 2023' value= {searchQuery} 
        onChange = {(e)=> setSearchQuery(e.target.value)}
          onFocus = {()=> setShowSuggestions(true)}
        onBlur = { () => setShowSuggestions(false)}
        />
        <button className='border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full'>🔍</button>
   
   
    </div>
  
  {showSuggestions && (
    <div className='fixed bg-white py-2 px-5 w-[65rem] shadow-lg rounded-lg border border-gray-100'>
    <ul>
{suggestions.map((suggestion) => (

      <li key={suggestion} className='py-2 px-3 shadow-sm hover:bg-gray-100'> 🔍 {suggestion}</li>
     
   ))}
    
    </ul>
    </div>
    )}
    </div> 
    <div className='col-span-1 '>
        <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="user-icon" />
    </div>
    </div>
  )
}

export default Head