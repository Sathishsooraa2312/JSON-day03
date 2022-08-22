// for loop

var marks=[10,20,30,40,50,60,70,80];
for (let i = 0; i < marks.length; i++) {
    console.log("mark is",i,marks[i]);
    }

// for of loop

// find the highest value in array

var max=-Infinity;
var marks=[34,56,76,88,97,22,11,77,60];
for( var mark of marks){
    if(mark>max){
    max=mark;}
    }
console.log("the highest number is",max);

// for in loop

var max=-Infinity;
var marks=[34,56,76,88,97,22,11,77,60];
for( var mark in marks){
    if(mark>max){
    max=mark;}
    }
console.log("the highest number is",marks[mark]);

