// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(grade) {
    if (grade >= 90) {
        return "Score: " + grade + "%. Grade: A"
    }
    if (grade >= 80 && grade <= 89) {
        return "Score: " + grade + "%. Grade: B"
    }
    if (grade >= 70 && grade <= 79) {
        return "Score: " + grade + "%. Grade: C"
    }
    if (grade >= 60 && grade <= 69) {
        return "Score: " + grade + "%. Grade: D"
    }
    if (grade <= 59) {
        return "Score: " + grade + "%. Grade: F"
    }
}

console.log(letterGrade(95));
console.log(letterGrade(85));
console.log(letterGrade(75));
console.log(letterGrade(65));
console.log(letterGrade(55));

// another solution

// function letterGrade(score){
//     if(score < 60){
//         console.log("Score: " + score + ". Grade: F")
//     }
//     else if(score < 70){
//         console.log("Score: " + score + ". Grade: D")
//     }
//     else if(score < 80){
//         console.log("Score: " + score + ". Grade: C")
//     }
//     else if(score < 90){
//         console.log("Score: " + score + ". Grade: B")
//     }
//     else{
//         console.log("Score: " + score + ". Grade: A")
//     }
// }

// letterGrade(88);
// letterGrade(61);