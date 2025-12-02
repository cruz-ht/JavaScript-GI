
function newPatient(name, ssn) {

    const PII = {
        name: name,
        ssn: ssn
    };


    // creating the function that retrieves the name, aka the accessible object
    return {

        getname() {
        return PII.name
        }
    };

}

    const person1 = newPatient("Jessica Cruz", "222-22-2222")


    console.log(person1.getname());
    console.log(person1.ssn);