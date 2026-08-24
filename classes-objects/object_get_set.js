const User={
    _email:'h@gmail.com',
    _password:'1234',
    get email(){
        return this._email;
    },
    set email(value){
        this._email=value;
    },
    get password(){
        return this._password;
    },
    set password(value){
        this._password=value;
    }
}

const tea=Object.create(User);
console.log(tea.email);

