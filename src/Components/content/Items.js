import React from 'react'
//import sample data from data.json 
import data from './data.json'
import Item from './Item'

const Items = () => {
  return (
    <div className='mt-4'>
         {data.map((section, index) => (
        <Item
          key={index}
          title={section.title}
          content={section.content}
          image={section.image}
          buttonText={section.buttonText}
          link={section.link}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default Items