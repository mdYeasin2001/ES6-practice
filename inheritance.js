class Parents{
    constructor(){
        this.fatherName = "Schwerznegger"
    }
    
}
class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arnold');
console.log(baby.getFullName());