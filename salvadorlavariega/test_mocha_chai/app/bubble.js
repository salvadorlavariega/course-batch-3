'use strict';

const bubbleSort = (array) => {
    if(isNumericArray(array)){
        for(let position = 1; position < array.length; position++ ){
            for(let index = 0; index < array.length - position; index ++){
                if( array[index] > array[index + 1] ){
                    const minor = array[index];
                    array[index] = array[index + 1];
                    array[index + 1] = minor;
                }
            }
        }
        return array;
    }
    return [];
};


const isNumericArray = (array) => {
    if(isArray(array) && array.length > 0){
        for(const element of array){
            if(isNaN(element)){
                return false;
            }
        }
        return true;
    }
    return false;
};

const isArray = (array) => {
    return array instanceof Array;
};

module.exports =  {
    isArray: isArray,
    isNumericArray : isNumericArray,
    bubbleSort: bubbleSort
};