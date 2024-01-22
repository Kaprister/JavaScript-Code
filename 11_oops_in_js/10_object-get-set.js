
const User = {
    _email : 'h@hc.com',
    _password : 'abc',

    get email(){
        return this._email.toLowerCase();
    },

    set email(val){
        this._email = val;
    },

    get password(){
        return this._password.toLowerCase();
    },

    set password(val){
        this._password = val;
    }
}

const tea = Object.create(User)

console.log(tea.email);