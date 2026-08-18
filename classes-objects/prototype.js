let myName="hitesh      "
let chai="chai     "


let myHeros=["thor","spiderman","ironman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    
    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}

//heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`)
}

myHeros.heyHitesh();
//heroPower.heyHitesh() //error because heyHitesh is not present in heroPower object

const User={
    isUser:true
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}


Teacher.__proto__=User

//modern syntax to set prototype this is inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)//TeachingSupport.__proto__=Teacher//TeachingSupport will access all the properties of Teacher and User

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`)//obsolete property

    console.log(`True length is:${this.trim().length}`);
}

let anotherUsername="ChaiAurCode       "

anotherUsername.trueLength()