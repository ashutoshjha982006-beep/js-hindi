class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }

    //static method restricted to class only, cannot be called by instance of class

    static createId(){
        return `123`
    }
}

const chai=new User("Chai");

//console.log(chai.createId()); // This will throw an error because createId is a static method and cannot be called on an instance of the class.

console.log(User.createId()); // This will work and return '123' because createId is a static method and can be called on the class itself.


class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
}

const iphone=new Teacher("iPhone","iphone@example.com","password123");

console.log(iphone); // This will throw an error because createId is a static method and cannot be called on an instance of the class.

