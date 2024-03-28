class Person{
    constructor(firstName,lastName,dob){
         this.firstName = firstName;
         this.lastName = lastName;
         this.birthday = new Date(dob);
         
    }
    greeting(){
     return `Helo ${this.firstName} ${this.lastName}`
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    static addNum(x,y){
        return x+y;
    }
}

const ashish = new Person('Ashish','Singh','11-13-1990');


console.log(ashish.calculateAge());

// console.log(ashish.addNum(1,2)); XXX
console.log(Person.addNum(1,3)); //static method
//static method: methid which can be used whithout instatating an object of class

