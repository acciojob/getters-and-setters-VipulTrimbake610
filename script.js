//complete this code
class Person {
	name;
	age;
	_name;
	_age;
	constructor(name,age){
		this.name = name;
		this.age = age;
		this._name = name;
		this._age = age;
	}
	get f1(){
		console.log(name);
	}
	set f2(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(this.name," is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(name," is teaching")
	}
}

// const student = new Student("vipul",30);
// student.study();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
