import React from "react";

export default function Navbar() {
  return (
    <div className=" flex flex-col justify-between h-[120px] bg-gradient-to-b from-neutral-800 to-neutral-900 text-white sticky  ">
      <div className="p-2 m-2 w-full flex justify-between ">
        <div className="">
          <div className="flex gap-[0.5rem]">
            <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <svg
                class="h-6 w-6 text-white text-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <svg
                class="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex gap-[0.5rem]">
          
          <button type="button" class="h-8 w-36 pb-[0.23rem] text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200  hover:scale-110 transition-all ">Explore Premium</button>
          <button type="button" class="h-8 w-28 pb-[0.23rem] text-sm font-medium text-white outline-none focus:outline-none bg-black rounded-full   hover:scale-110 transition-all ">! Install App</button>
         
          <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
          <svg class="h-6 w-6 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />  <path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
            </div>
       
            <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
            <div className="w-6 h-6 text-black font-bold  flex items-center justify-center bg-green-500 rounded-full">
          D
            </div>
            </div>

        </div>

      </div>
      <div className="flex flex-row gap-[0.5rem]   m-2">
      <button type="button" class="h-8 w-[3rem] text-center  pb-[0.23rem] text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200  hover:scale-110 transition-all ">All</button> 
      <button type="button" class="h-8 w-20 text-center pb-[0.23rem] text-sm font-medium text-white focus:outline-none bg-neutral-800 rounded-full  hover:scale-110 transition-all ">Music </button>
       <button type="button" class="h-8 w-24 pb-[0.23rem] text-sm font-medium text-white focus:outline-none bg-neutral-800 rounded-full    hover:scale-110 transition-all ">Podcast</button>
      </div>
    </div>
  );
}
