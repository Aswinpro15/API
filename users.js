let users = [
    {firstName: "Aswin", lastName: "S", email: "aswinsrinivas08@gmail.com"},
    {firstName: "name2", lastName: "name2", email: "abc@gmail.com"},
   
]

function getUsers() {
    return users;
}

const Users = function() {}

Users.prototype.getUsers = getUsers

module.exports = new Users()