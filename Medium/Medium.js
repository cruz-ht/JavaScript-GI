
function sharedSlices(slices, people) {

    // the function calculating the slices pizza divided by each person, x/y
    let slicesPerPerson = slices / people;

    // using the method ".toFixed()" that rounds number to the specific number of decimal places asked
    slicesPerPerson = slicesPerPerson.toFixed(2);

    return `Each person gets ${slicesPerPerson} slices of pizza, from the ${slices}
    count pizza`
}


console.log(sharedSlices(9,3));