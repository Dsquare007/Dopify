import React from "react";
import LeftCard from "./LeftCard";

export default function LeftBottomBar() {
  return (
    <div className="  h-[550px]  text-white gap-y-4 mt-2 flex flex-col p-6 rounded-md bg-[#121212] sticky">
      <div className="flex flex-row  justify-between">
        <div className=" flex flex-row gap-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
              />
            </svg>
          </div>
          <div className="font-bold text-[#a7a7a7]">Your Library</div>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <svg
              class="h-5 w-5 text-[#a7a7a7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div>
            <svg
              class="h-5 w-5 text-[#a7a7a7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-2">
        <button
          type="button"
          class="h-8 w-[5rem] pb-[0.23rem] text-sm font-medium text-white focus:outline-none bg-[#232323] rounded-full  border-gray-200  hover:scale-110 transition-all "
        >
          Playlists
        </button>
        <button
          type="button"
          class="h-8 w-[4rem] pb-[0.23rem] text-sm font-medium text-white focus:outline-none bg-[#232323] rounded-full  border-gray-200  hover:scale-110 transition-all "
        >
          Artists
        </button>
      </div>

      <div className="flex flex-row justify-between ">
        <div>
          <svg
            class="h-5 w-5 text-[#a7a7a7]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <div className="mb-[0.3rem] text-[#a7a7a7]">Recents</div>
          <div><svg class="h-5 w-5 text-[#a7a7a7]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="8" y1="6" x2="21" y2="6" />  <line x1="8" y1="12" x2="21" y2="12" />  <line x1="8" y1="18" x2="21" y2="18" />  <line x1="3" y1="6" x2="3.01" y2="6" />  <line x1="3" y1="12" x2="3.01" y2="12" />  <line x1="3" y1="18" x2="3.01" y2="18" /></svg></div>
        </div>
      </div>

      <div>{<LeftCard/>}</div>
    </div>
  );
}
