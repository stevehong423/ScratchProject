import React from 'react';

const QuantityButtons = () => {
  return (
    <>
      <span class="relative z-0 inline-flex shadow-sm rounded-md">
  <button id="minus-btn" type="button" class="relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-white-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
    <span class="sr-only">Previous</span>
    {/* <!-- Heroicon name: chevron-left --> */}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
  </button>
  <button id="plus-btn" type="button" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-white-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
    <span class="sr-only">Plus</span>
    {/* <!-- Heroicon name: chevron-right --> */}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
  </button>
</span>
    </>
  )
}

export default QuantityButtons;
