import axios from 'axios';
import { addDevServerEntrypoints } from 'webpack-dev-server';

//Get Shopping Items 
export const getShoppingItems = () => (dispatch) => {
    axios.get('/api/shopping/')
    .then(({ data }) => {dispatch(loadShoppingItem(data))})
};

//Load Shopping Item
export const LOAD_SHOPPING_ITEM = 'LOAD_SHOPPING_ITEM';
export const loadShoppingItem = (items) => {
    type: LOAD_SHOPPING_ITEM;
    payload: items
};

//Add Shopping Items
export const ADD_SHOPPING_ITEM = "ADD_SHOPPING_ITEM";
export const addShoppingItem = (item) => (dispatch) => {
    axios.post('/api/shopping/submit', item)
        .then(({ data }) => {dispatch(loadShoppingItem(data))})
};

//Delete Shopping Items 
export const DELETE_SHOPPING_ITEM = "DELETE_SHOPPING_ITEM";
export const deleteShoppingItem = (id) => (dispatch) => {
    axios.delete(`./api/shopping/delete/${id}`)
        .then(({ data }) => {dispatch(loadShoppingItem(data))})
}

