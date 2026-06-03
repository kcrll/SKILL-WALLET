let simpleArray = ["Apple", "Banana", "Cherry"];
console.log("Initial Array:", simpleArray);

simpleArray.push("Dragonfruit"); 
let removedLast = simpleArray.pop(); 
simpleArray.unshift("Mango"); 
let removedFirst = simpleArray.shift(); 
let arrayLength = simpleArray.length;

console.log("Modified Array:", simpleArray);
console.log(`Popped: ${removedLast}, Shifted: ${removedFirst}, Current Length: ${arrayLength}`);

let student = {
    firstName: "Alex",
    age: 20,
    course: "Computer Science",
    isEnrolled: true
};
console.log("Initial Object:", student);

student.age = 21;
student["course"] = "Data Science";
console.log("Modified Object (Dot & Bracket Notation):", student);

let studentsList = [
    { name: "John", score: 85, active: true },
    { name: "Sarah", score: 92, active: true },
    { name: "Michael", score: 58, active: false },
    { name: "Emily", score: 74, active: true }
];
console.log("Original Students Array:", studentsList);

studentsList.forEach(s => {
    console.log(`Student ${s.name} has a score of ${s.score}.`);
});

let passingStudents = studentsList.filter(s => s.active && s.score >= 60);
console.log("Filter Result (Active & Passing):", passingStudents);

let studentGrades = studentsList.map(s => {
    return {
        studentName: s.name,
        gradeStatus: s.score >= 60 ? "Passed" : "Failed"
    };
});
console.log("Map Result (Mapped Grade Status):", studentGrades);

console.log("Validation Checklist: All operations completed successfully!");