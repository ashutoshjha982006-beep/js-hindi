const descripter=Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);//writeable: false, configurable: false, enumerable: true, value: 3.141592653589793

const chai={
    name:'ginger chai',
    price: 100,
    isAvailiable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

//name ko loop se access nahi kar payenge

