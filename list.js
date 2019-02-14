
function arrayToList(input) {
    let list = null;

    for(let i = input.length - 1; i >= 0; i--){
        list = {value: input[i], rest: list};
        
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

function prepend() {
    
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));