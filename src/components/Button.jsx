import React from 'react'

const Button = ({title, handleClick}) => {
  return (
    <button className='px-3 py-2 bg-blue-600 rounded-md text-white font-medium text-lg' onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button