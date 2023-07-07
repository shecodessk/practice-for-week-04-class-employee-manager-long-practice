const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
    }

   addEmployee(employee){
        if(employee instanceof Employee){
        this.employees.push(employee)}
    }
  
    calculateBonus(multiplier) {
       return (this.salary + this._totalSubSalary(this)) * multiplier;
    }

    _totalSubSalary(employee) {
        let sum = 0;
        employee.employees.forEach( (person) => {
            if(person instanceof Manager){
                sum = person.salary + person._totalSubSalary(person);
  
            } else{
                if(person instanceof Employee){
                    sum = person.salary;
                }

            }
        })
        console.log(sum)
        return sum;
    }}

let splinter = new Manager('Splinter', 100000, 'Sensei');
let leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
let mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);

console.log(splinter.calculateBonus(0.05))
console.log(leo.calculateBonus(0.05))
module.exports = Manager;