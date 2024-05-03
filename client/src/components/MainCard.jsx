import React from 'react'

export default function MainCard() {
  return (
    <>
    <div className='flex flex-col gap-2 w-[195px] h-[280px] hover:bg-neutral-800 justify-center items-center p-2 rounded-lg overflow-hidden'>
        <div className='h-[184px] w-[184px] rounded-lg overflow-hidden'>
            <img src="https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a" alt="object-contain w-full h-full" />
        </div>
        <div>
        <div className='font-bold'>
            Kabir Singh
        </div>
        <div className='hover:underline text-sm text-gray-400'>
            Mithoon, Arijit Singh, Jeet Gannguli
        </div>
        </div>
    </div>
    </>
  )
}
