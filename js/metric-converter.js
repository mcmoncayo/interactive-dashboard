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

    numericValue = parseFloat(numericValue.value);

    for (let i = 0; i < conversionOptions.length; i++) {

        if (conversionOptions[i].selected) {

            conversionChoice = conversionOptions[i].value;

        }

    }

    if (conversionChoice === "inch to centimeter") {

        result = numericValue * 2.54;

    } else if (conversionChoice === "foot to centimeter") {

        result = numericValue * 30.48;

    } else if (conversionChoice === "yard to meter") {

        result = numericValue * 0.91;

    } else if (conversionChoice === "mile to kilometer") {

        result = numericValue * 1.61;

    } else if (conversionChoice === "centimeter to inch") {

        result = numericValue * 0.39;

    } else if (conversionChoice === "centimeter to foot") {

        result = numericValue * 0.0328;

    } else if (conversionChoice === "meter to yard") {

        result = numericValue * 1.09;

    } else if (conversionChoice === "kilometer to mile") {

        result = numericValue * 0.62;

    } else {

        result = "Invalid conversion choice";

    }

    output.innerHTML = result;

});