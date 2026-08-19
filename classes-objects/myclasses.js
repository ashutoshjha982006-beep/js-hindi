//ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const chai=new User("Chai","chai@fb.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}//if we didn't use class then we can add methods to the prototype of the class



