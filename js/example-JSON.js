'use strict';

let string = JSON.stringify({squirrel:false,
                                    events:["Выходной"]});


console.log(string);
console.log(JSON.parse(string).events);
