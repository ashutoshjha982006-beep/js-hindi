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



