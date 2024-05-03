import React from 'react'

export default function LeftCard() {
  return (
    <>
    <div className='bg-neutral-900 hover:bg-neutral-800 text-white gap-3 h-[64px] w-[97%] rounded-lg overflow-hidden p-2 flex flex-row items-center'>
        <div className='h-[40px] w-[40px] rounded-lg overflow-hidden'>
            <img src="https://i.scdn.co/image/ab67616d00001e02c5545f737b16ad5ee767b62a" alt="" className='object-contain w-full h-full'/>
        </div>
        <div className='flex flex-col text-sm'>
            <div className='font-bold'>My Playlist #2</div>
            <div className='flex gap-1'>
                <div>Playlist</div>
                <div className='font-bold'>•</div>
                <div>Diwakar</div>
            </div>
        </div>
    </div>
    </>
  )
}
