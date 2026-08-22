class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value
    }//agar get likha hai toh set likhna hi padega
}

const hitesh=new User("h@hitesh.ai","abc")
console.log(hitesh.password)