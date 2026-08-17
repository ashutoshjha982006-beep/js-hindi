const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user details from database")
    }
}

console.log(user.getUserDetails())

// console.log(this) //the result of this keeps changing

//const date =new Date()  //new  is a constructor

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this //this is implicitly defined
}


const userOne=new User("hitesh",12,true)
const userTwo=new User("ChaiAurCode",11,false)
//console.log(userOne)
console.log(userOne.constructor)

//function,array,string->object->null