'use strict'

const myFun = (param) => {
    console.log("arrow function with params"), param;
};

function veryOld(param) {
    console.log('very old', param);
}

    const middleOld = function(param) {
        console.log('middleOld', param);
    };
    
myFun('test');
veryOld('old school function');
middleOld('middle test');