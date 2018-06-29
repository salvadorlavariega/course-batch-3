'use strict';

// Checksum

const compareValidStrings = (originalText , textToCompare) => {

    if(originalText === undefined || textToCompare === undefined){
        return false;
    }

    if(originalText !== textToCompare){
        return false;
    }

    if(originalText === textToCompare){
        return true;
    }

};

const stringToBytes = (str) => {
    var ch, st, re = [];
    for (var i = 0; i < str.length; i++ ) {
        ch = str.charCodeAt(i);
        st = [];
        do {
            st.push( ch & 0xFF );
            ch = ch >> 8;
        }
        while ( ch );
        re = re.concat( st.reverse() );
    }

    return re;
};

const binToString = (array)  =>{
    return String.fromCharCode.apply(String, array);
};

module.exports = {
    compareValidStrings,
    stringToBytes,
    binToString
};