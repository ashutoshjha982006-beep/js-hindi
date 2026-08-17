const multiplyBy5=function(num){
    return num*5;
}

multiplyBy5.power=2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

const chai=createUser("chai",25)
const tea=createUser("tea",250)

console.log(chai.score)