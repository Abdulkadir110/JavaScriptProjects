class Student{
    constructor(name) {
        this.name = name;
        this.gradeLevel = 1;
    }
    introduce(){
        return this.name + ", your grade level is " + this.gradeLevel;
    }
    promote(){
        if(this.gradeLevel < 12) this.gradeLevel++;
    }
    hasPassed(score){
        if(score < 0 || score > 100) {
            throw new Error("Invalid score. Please enter a score between 0 and 100.");
        }
        return score >= 50;
    }
    updateName(newName){
        this.name = newName;
    }
    isGraduating(){
        return this.gradeLevel === 12;
    }
}
module.exports = {Student};