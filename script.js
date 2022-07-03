// objects--collections of elements in the form of properties and methods
// property is a key & value pair 
// key must be in string 
// value - datatypes--string, number , boolean ,reference data types like (arrays , functions & other objects)
// properties with their values as functions are called methods..


// syntax--

// let object{
//     key: value,(property or element)
//     key: value,
//     ... ...
//     .. . . .
//     .. .. ...
//     key: value
// }

// we can access values by using keys in 2 ways . 
// 1.object.key -- mostly we can use this way only
// 2.object["key"]

let student={
    name:"jaffer",
    age:29,
    qualification:"MBA",
    passedout:2017

}
console.log(student);
//display in alphabetical order first ,age, name passedout , qualification

//if we want to display particular key 

console.log(student.name)
console.log(student["age"])

//if we want add new properties to objects ... 2 ways are there.

student["college"]="Sk university"
student.place="Anantapur-ap"

console.log(student)

//update/modifications in object

student.name="jaffer sadiq"
console.log(student)

//finding object length
console.log(Object.keys(student).length);








