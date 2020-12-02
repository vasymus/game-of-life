import {Map} from 'immutable'


export const getRandomId = () => (Date.now() + Math.random()).toString()

export const arrayToMap = (arr, ItemRecord, idKey = 'id') => {
    let res = arr.reduce(function (acc, item) {
        return acc.set(item[idKey], ItemRecord ? new ItemRecord(item) : item);
    }, new Map({}));
    return res;
}

export const arrayPrimitivesToMap = (arr, initObj = {}) => arr.reduce(
    (res, curr) => res.set(curr, 1),
    new Map(initObj)
)

export let arrayUnique = (array) => Array.from(new Set(array))

export let arrayRange = (count, start = 0) => Array(count).fill().map((x,i)=>i + start)

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
