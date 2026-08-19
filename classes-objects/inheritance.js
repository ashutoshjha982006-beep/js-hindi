class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`COURSE ADDED BY : ${this.username}`);
    }
}

const chai=new Teacher("Chai","chai@fb.com","123");
chai.addCourse();

const masalaChai=new User("masalaChai");

console.log(chai===masalaChai);
console.log(chai instanceof Teacher);
console.log(chai===Teacher);