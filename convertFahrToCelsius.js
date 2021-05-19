
const convertFahrToCelsius = (fahrenheit) => {
    // Make the given celsius variable equal to the given fahrenheit value
    // Subtract 32 from the given fahrenheit value, then multiply by 5/9
    let celsius = (fahrenheit - 32) * 5/9
    // return the variable celsius as the answer
    return celsius;

    const checkValue = (fahrenheit) => {
        if (typeof(fahrenheit) === 'object') {
            console.log(`${Object} is not a valid number but a/an object`)
        } else if (typeof(num) === "string") {
            if((fahrenheit) === "NaN") {
                console.log("Please pass in a valid number")
            } else {
                // execute function here
                convertFahrToCelsius;
            }
        } else {
            // execute your function here
            convertFahrToCelsius(fahrenheit)
        }
    }
}

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});
