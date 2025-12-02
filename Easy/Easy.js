

function exercise() {


function ExerciseOfTheDay(options){

    // creating a return vlaue where "${options} is replaced by the input given
    
    return `Today's exercise: ${options}`;
}

    return ExerciseOfTheDay;


}



// calling both functions and assigning "Exercise" to ExerciseOfTheDay
const ExerciseOfTheDay = exercise();





console.log(ExerciseOfTheDay("Running")); 
// Output: Today's exercise: Running

console.log(ExerciseOfTheDay("Swimming"));
// Output: Today's exercise: Swimming

console.log(ExerciseOfTheDay("Dancing")); 
// Output: Today's exercise: Dancing

console.log(ExerciseOfTheDay("Fencing")); 
// Output: Today's exercise: Fencing