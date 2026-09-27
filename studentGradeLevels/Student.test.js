const {Student} = require('./Student')

describe('Student',() => {
    let student;

    beforeEach(() => {
        student = new Student("Abdulkadir");
    });
    test('test to display student name and grade level', () =>{
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 1")
    })
    test('test that a student can be promoted to the next grade level', () => {
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 1")
        student.promote();
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 2")
    })
    test('test that a student can pass', () =>{
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 1")
        expect(student.hasPassed(70)).toBe(true)
    })
    test('test that a student can fail', () =>{
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 1")
        expect(student.hasPassed(40)).toBe(false)
    })
    test('test that a student can update their name', () =>{
        expect(student.introduce()).toBe("Abdulkadir, your grade level is 1")
        student.updateName("Opeyemi");
        student.promote();
        expect(student.introduce()).toBe("Opeyemi, your grade level is 2")
    })
    test('test that a student cannot score a score less than 0 or greater than 100', () =>{
        expect(() => student.hasPassed(-17)).toThrow("Invalid score. Please enter a score between 0 and 100.");
        expect(() => student.hasPassed(103)).toThrow("Invalid score. Please enter a score between 0 and 100.");
    })
    test('test that a student can graduate', () =>{
        for(let i = 1; i < 12; i++){
            student.promote();
        }
        expect(student.isGraduating()).toBe(true)
    })
    
})    