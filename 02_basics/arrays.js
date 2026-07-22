const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","nagraj"]

const myArr2=new Array(1,2,3,4)

console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)//push pop at last shift unshift at first
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()//array ko string banata hai

console.log(myArr);
console.log( newArr);

//slice splice

console.log("A", myArr)

const myn1=myArr.slice(1,3)//doesn't include last

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)//1st element se count 3 takk remove hoga
console.log("C ", myArr);
console.log(myn2);

console.log(typeof myArr);   // object
console.log(typeof newArr);  // string