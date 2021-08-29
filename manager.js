const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email,offNum){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = offNum;
        this.role = 'Manager';
    }
    getName(){
        return this.name;
    }
    
    getId(){
     return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager