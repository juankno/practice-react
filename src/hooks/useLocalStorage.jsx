// const defaultTodos = [
//   {
//     "id": "ccw-1",
//     "name": "Coding Challenge White",
//     "completed": true,
//     "brand": "Coding Challenge Brewery"
//   }, {
//     "id": "sw-1",
//     "name": "Share White",
//     "completed": false,
//     "brand": "Share",
//   }, {
//     "id": "bspa-1",
//     "name": "Beer Sans Pale Ale",
//     "completed": true,
//     "brand": "Beer Sans Brewery"
//   }, {
//     "id": "ccb-1",
//     "name": "Coding Challenge Brown",
//     "completed": false,
//     "brand": "Coding Challenge Brewery"
//   }, {
//     "id": "ccw-2",
//     "name": "Coding Challenge Wheat",
//     "completed": true,
//     "brand": "Coding Challenge Brewery"
//   }];

import { useState } from "react";

export const useLocalStorage = (itemName, initialValue = []) => {

    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {

        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;

    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [items, setItems] = useState(parsedItem);

    const changeItems = (newItems) => {
        const stringifieditems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifieditems);
        setItems(newItems);
    }


    return [
        items,
        changeItems
    ];


}
