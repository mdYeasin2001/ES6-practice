class Student{
    constructor(id, sName){
        this.id = id,
        this.name = sName,
        this.class = "class-7"
    }
}
const student1 = new Student(105, "Ali");
const student2 = new Student(103, "Araf");
console.log(student1, student2);