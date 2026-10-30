// const scores = [70,85,90]

// console.log(scores[0])
// console.log(scores[2])
// console.log(scores.length)
// console.log(scores[3])
// for (const score of scores) {
//     console.log(score * 2)
// }
// const queue = ["Ada", "Tunde"]
// queue[queue.length] = "zainab";
// console.log(queue)
// console.log(queue.length)

// const q = ["Ada", "Tunde"]
// q.push("Zainab")
// console.log(q.shift())
// q.unshift("Ife")
// console.log(q)
// console.log(q.pop())
// console.log(q)

// const names = ["Ada", "Tunde", "Zainab"]
// console.log(names.includes("Tunde"))
// console.log(names.indexOf("Zainab"))
// console.log(names.indexOf("Ife"))
// console.log(names.slice(1, 3))
// console.log(names.indexOf("Elder"))
// console.log(names.concat(["Ife"]))


// const a = ["Ada", "Tunde"]
// const b = a
// b.push("Zainab")
// console.log(a)
// console.log(b)

// //shared copy

// const a = ["Ada", "Tunde"]
// const copy = [...a] // spread operator
// copy.push("Zainab")
// console.log(a)
// console.log(copy)
// const same  = a
// console.log(same === a, copy === a)


// function range(start, end) {
//     const result = []
//     for (let index = start; index <= end; index++) {
//         result.push(index)
//     }
//     return result
// }
// console.log("first question")
// console.log(range(1, 10))
// function sum(callback) {
//     const numbers = callback
//     let total = 0
//     for (const number of numbers) {
//         total += number
//     }
//     return total
// }
// console.log("sum(range(1, 10))")
// console.log(sum(range(1, 10)))
// console.log()
// console.log("second question")

// function reverseArray(array) {
//     const reversed = []
//     for (let index = array.length - 1; index >= 0; index--) {
//         reversed.push(array[index])
//     }
//     return reversed
// }
// console.log("reverseArray([1,2,3])")
// console.log(reverseArray([1,2,3]))

// console.log()
// console.log("third question")
// function reverseArrayInPlace(array) {
//     let leftIndex = array.length - 1
//     for(let index = 0; index < array.length / 2; index++){
//         const temp = array[leftIndex]
//         array[leftIndex] = array[index]
//         array[index] = temp
//         leftIndex--
//     }
//     return array
// }

// console.log("reverseArrayInPlace([1,2,3,4,5])")
// console.log(reverseArrayInPlace([1,2,3,4,5]))

// const student = {
//     name : "Ada",
//     age : 19,
//     course : "JavaScript",
//     greet() {
//         () => {
//             console.log("Hi, I am " + this.name)
//         };
//     }
// }
// student.greet()
// console.log(typeof student.greet)
// };
// console.log(student.name)
// console.log(student.age)
// console.log(student.grade)
// console.log(student)
// const field = "age";
// console.log(student.field, student[field])
// student.grade = "A";
// delete student.age
// console.log("age" in student, "grade" in student)
// console.log(student)


// const students = [
//     {name : "Ada", score : 90 },
//     {name : "Tunde", score : 72}
// ];
// console.log(students[1].name);
// for (const s of students){
//     console.log(s.name + ": " + s.score)
// }

// const marks = {math : 80, english : 65};
// console.log(Object.keys(marks))
// console.log(Object.values(marks));
// for(const [subject, mark] of Object.entries(marks)) {
//     console.log(subject + ": " + mark);
// }
// const a = {x : 1};
// const b = {x : 1};
// console.log(a == b, a === b);
// console.log(a === a)

// const a = {x : 1};
// const b = {x : 1};
// const c = a;
// console.log(a === b);
// console.log(a === c);
// console.log(JSON.stringify(a) === JSON.stringify(b))

// function deepEqual(a, b){
//     return JSON.stringify(a) === JSON.stringify(b)
// }
// console.log(deepEqual({a : {b : 1}}, {a : {b : 1}}))

// function highScorers(students){
//     for (const s of students){
//         if(s.score >= 80) console.log("name : " + s.name)
//     }
// }
// students = [
//     {name : "Ade", score : 90},
//     {name : "Kemi", score : 50},
//     {name : "VDM", score : 81},
//     {name : "Doton", score : 93},
// ]
// highScorers(students)

// function countWords(words){
//     let object = {}
//     let count = 0
//     for(letter of words){
//         count = 0
//         for(secondLetter of words){
//             if(letter === secondLetter){
//                 count++
//             }
//             object[letter] = count
//         }
        
//     }
//     return object
// }

// console.log(countWords(["a", "b", "a"]))


const student = {
    name : "Abdulkadir",
    age : 21,
    course : "Computer Science",
    gender : "Male",
    hobbies: ["reading", "coding", "gaming"],
    isBlack: true
}