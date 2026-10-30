const Users = {
    id: 1,
    nom: "Diop",
    login: "diop123",
    password : "1234abc",
    age : 17,
    email:"sadio.devstor@gmail.com"
}
const {password, id,...newUser}=Users
console.log(newUser)