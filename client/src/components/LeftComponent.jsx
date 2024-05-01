// import React, { useState } from 'react'

// export default function LeftComponent() {
//     const {active, setActive} = useState('Home');
//     function handleState(tab){
//         setActive(tab);
//     }
//   return (

// <div className="w-1/4 h-[150px] gap-y-4 flex flex-col p-6 rounded-md bg-[#121212]">
//   <div className='text-white flex flex-row items-center  gap-2 font-bold'>
//     <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
//     </svg>
//     <span className='text-center'>Home</span>
//   </div>

//   <div className='text-[#a7a7a7] flex flex-row items-center  gap-2 font-bold'>
//   <svg class="h-8 w-8 text-[#a7a7a7]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
//     <span className='text-center'>Search</span>
//   </div>
//     </div>
//   )
// }
import React, { useState } from 'react';

export default function LeftComponent() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-1/4 h-[150px] gap-y-4 flex flex-col p-6 rounded-md bg-[#121212]'>
      <div className={`text-${activeTab === 'Home' ? 'white' : '[#a7a7a7]'} flex flex-row items-center gap-2 font-bold cursor-pointer`} onClick={() => handleClick('Home')}>
        <svg className={`h-8 w-8 text-${activeTab === 'Home' ? 'white' : '[#a7a7a7]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span className='text-center'>Home</span>
      </div>

      <div className={`text-${activeTab === 'Search' ? 'white' : '[#a7a7a7]'} flex flex-row items-center gap-2 font-bold cursor-pointer`} onClick={() => handleClick('Search')}>
        <svg className={`h-8 w-8 text-${activeTab === 'Search' ? 'white' : '[#a7a7a7]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className='text-center cursor-pointer'>Search</span>
      </div>
    </div>
  );
}
