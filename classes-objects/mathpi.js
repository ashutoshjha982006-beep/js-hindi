const descripter=Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descripter);//writeable: false, configurable: false, enumerable: true, value: 3.141592653589793

const chai={
    name:'ginger chai',
    price: 100,
    isAvailiable: true
}