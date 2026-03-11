import React from 'react'

const FallbackLoader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center overflow-hidden'>
        <h2 className='text-white poppins-regular text-xl'>Loading...</h2>
    </div>
  )
}

export default FallbackLoader