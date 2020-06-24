//object literal

const person={
    //attributes
    name:"Terri",
    age:20,
    birthdayYear:function(){
        return new Date().getFullYear()-this.age;
    }
}

const person2 = {
    name: 'emeke',
    age: 30
}

console.log(person.name);
console.log(person.name2);

//object constructor

class Task{
    constructor(name, priority){
        this.name=name;
        this.priority=priority;
    }
}

const task1 = new Task("Do the HW", "Low");
const task2 = new Task("Learn JS", "High");
const task3 = new Task("Read a book", "Low");