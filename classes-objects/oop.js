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

    return this
}


const userOne=User("hitesh",12,true)

