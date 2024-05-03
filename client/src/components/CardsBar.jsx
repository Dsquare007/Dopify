import React from 'react'
import MainCard from './MainCard'

export default function CardsBar() {
  return (
    <>
    <div className='text-white w-[97%] h-[40%] flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <div className='hover:underline font-bold text-2xl'><a href='#'>Popular albums</a></div>
            <div className='hover:underline text-gray-400 font-bold text-sm'><a href='#'>Show all</a></div>
        </div>
        <div>
            <MainCard/>
        </div>
    </div>
    </>
  )
}
