import React from 'react'
import Button from './Button'


const ButtonNames = [ 'All' , 'Songs' , 'Gaming' , 'Live' , 'GTA ' , 'Soccer', 'Kapil Sharma', 'Cooking' , 'Dance']

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        ButtonNames.map((name,index) => {
          return <Button key = {index} name = {name} />
        })
      }
      
      
    </div>
  )
}

export default ButtonList