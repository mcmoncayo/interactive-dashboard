let numericValue;
let conversionChoice;
let result;
let conversionOptions;
let convertButton;
let output;

numericValue = document.getElementById("numeric-value");

conversionOptions = document.getElementsByTagName("option");

convertButton = document.getElementById("convert-button");

output = document.getElementById("conversion-result");

convertButton.addEventListener("click", function(event) {

    event.preventDefault();
    
    let inputValue = parseFloat(numericValue.value);

    for (let i = 0; i < conversionOptions.length; i++) {

        if (conversionOptions[i].selected) {

            conversionChoice = conversionOptions[i].value;

        }

    }

    if (conversionChoice === "inch to centimeter") {

        result = inputValue * 2.54;

    } else if (conversionChoice === "foot to centimeter") {

        result = inputValue * 30.48;

    } else if (conversionChoice === "yard to meter") {

        result = inputValue * 0.91;

    } else if (conversionChoice === "mile to kilometer") {

        result = inputValue * 1.61;

    } else if (conversionChoice === "centimeter to inch") {

        result = inputValue * 0.39;

    } else if (conversionChoice === "centimeter to foot") {

        result = inputValue * 0.0328;

    } else if (conversionChoice === "meter to yard") {

        result = inputValue * 1.09;

    } else if (conversionChoice === "kilometer to mile") {

        result = inputValue * 0.62;

    } else {

        result = "Invalid conversion choice";

    }

    output.innerHTML = result.toFixed(2)

});