
import React from 'react'

const Comment = ({data}) => {
const {name,text, relies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
      
<img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="profile" />

      <div className='px-3'>
        <p>
            {name}
        </p>
        <p>
            {text}
        </p>
        </div>
    </div>
  )
}

export default Comment;