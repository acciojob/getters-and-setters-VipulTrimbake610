//complete this code
class Person {
	name;
	age;
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get (){
		console.log(name);
	}
	set (age){
		this.age = age;
	}
}

class Student extends Person {
	_name;
	_age;
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	study(){
		console.log(name," is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(name," is teaching")
	}
}

const p = new Person("John",30);
console.log(p)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
