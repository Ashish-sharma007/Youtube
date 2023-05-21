import React from 'react'

import Comment from './Comment'

const commentsData = [
{
name: 'Ram',
text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptate!",

},


];





const CommentsContainer = () => {
  return (
    <>
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>Comments:</h1>
   
    </div>
  <Comment data = {commentsData[0]}/>
    </>
  )
}

export default CommentsContainer