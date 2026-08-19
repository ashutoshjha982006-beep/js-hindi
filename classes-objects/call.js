function SetUsername(username){
    this.username=username;
    console.log(this.username);
}

function createUser(username,email,password){
    //SetUsername(username);//function is called but value is removed because the exexution context is changed
    SetUsername.call(this,username);//function is called and value is set because the exexution context is changed to this  
    this.email=email;
    this.password=password;
}

const chai=new createUser("Chai","chai@fb.com","123")

console.log(chai);