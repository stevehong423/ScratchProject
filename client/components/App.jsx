import React from 'react'
// import './ShoppingContainer/ShoppingContainer.jsx';
import { ShoppingContainer } from './ShoppingContainer/ShoppingContainer.jsx';
import { ShoppingItem } from './ShoppingContainer/ShoppingItem.jsx';
import { Header } from './Header/Header.jsx';

const App = () => {
    return (
        <div>
            <Header />
            <ShoppingContainer />
            <ShoppingItem />
        </div>
    )
}


export default App;