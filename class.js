class student{
 constructor(sTd,sName){
     this.id=sTd;
     this.name= sName;
     this.school= "ruet";
 }
}

const student1 = new student(30, "Minhaz");
const student2 = new student(22, "Mahee");
console.log(student1, student2);