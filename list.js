
function arrayToList(arr) {
    let list = null;

    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], rest: list};
        
    }
    return list;
};

function listToArray(list) {
    let array = [];

    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    };
    return array;
};

function prepend(element, list) {
    let newList = {value: element, rest: list}
    
    return newList;
};

/*function nth(list, index) {
    let result = [];

    if(list == null || index < 0) {
        return undefined;
    };

    for(let node = list; node; node = node.rest) {
        result.push(node.value);
    };
    return result[index];
};*/

function nth(list, index) {
    if(list == null || index < 0) {
        return undefined;
    };
    if(index == 0) {
        return list.value
    };
    if(index > 0) {
       return nth(list.rest, index - 1);
    };
};



console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
console.log(prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20