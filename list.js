
function arrayToList(input) {
    var list = null;

    for(let i = input.length - 1; i >= 0; i--){
        list = {value: input[i], rest: list};
        
    }
    return list;
};

function listToArray(input) {

};

console.log(arrayToList([1,2,3]));