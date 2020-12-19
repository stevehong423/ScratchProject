import React from 'react';
import ShoppingItem from './ShoppingItem.jsx';
import TestItemComponent from './TestItemComponent.jsx'


const ShoppingContainer = () => {
    return (
        <div>
           <h1>Shopping List</h1> 
           <ShoppingItem />
           <TestItemComponent />
        </div>
    )
}

export default ShoppingContainer;