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

import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue = []) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {

                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;

                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    })


    const changeItems = (newItems) => {
        try {
            const stringifieditems = JSON.stringify(newItems);
            localStorage.setItem(itemName, stringifieditems);
            setItem(newItems);
        } catch (error) {
            setError(error);
        }
    }


    return {
        items,
        changeItems,
        loading,
        error,
    };


}
