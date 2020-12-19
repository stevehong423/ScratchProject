import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadShoppingItem, LOAD_SHOPPING_ITEM } from '../../store/actions/shoppingActions';
import UpdateButton from './UpdateButton.jsx';
import DeleteButton from './DeleteButton.jsx';


const ShoppingItem = () => {

    const dispatch = useDispatch();
    const shoppingList = useSelector((state) => state.shopping.shoppingList)

    useEffect(() => {dispatch(loadShoppingItem('text'))}, [])
    console.log(shoppingList)

    return (
        <>
    <div className="bg-white shadow overflow-hidden sm:rounded-md" id="item-container">
    <ul className="divide-y divide-gray-200">
    <li>
      {/* <a href="#" className="block hover:bg-gray-50"> */}
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-indigo-600 truncate" style={{color: "darkblue", fontSize: "6vh", letterSpacing: ".10em"}}>
              <strong>Milk</strong>
            </p>
            <p className="text-lg font-medium text-gray-500 truncate" style={{fontSize: "2.5vh"}}><i>Qty: </i><strong style={{fontSize: "6vh", color: "darkblue"}}>3</strong></p>
            <UpdateButton />
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500" style={{fontSize: "2.5vh"}}>
                <i>Dairy</i>
              </p>
            </div>
            <div>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <DeleteButton />
            </div>
          </div>
        </div>
      {/* </a> */}
    </li>
  </ul>
</div>

        </>
    )
}

export default ShoppingItem;