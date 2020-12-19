import React from 'react';

const DeleteButton = () => {
  return (
    <div>
      <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{backgroundColor: "red", width: "70px", justifyContent: "center"}}>
        Delete
      </button>
    </div>
  )
}

export default DeleteButton;
