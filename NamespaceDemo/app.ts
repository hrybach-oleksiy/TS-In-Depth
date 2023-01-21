/// <reference path='utility-functions.ts'/>

const age = Utility.maxBooksAllowed(30);
console.log(age);

import util = Utility.Fees;
const result = util.calculateLateFee(10);
console.log(result);