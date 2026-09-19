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

    let conversionType = document.getElementById("conversion-type");

    let selectedIndex = conversionType.selectedIndex;

    conversionChoice = conversionOptions[selectedIndex].value;

    let fromUnit;
    let toUnit;

    if (conversionChoice === "inch to centimeter") {

        result = inputValue * 2.54;
        fromUnit = "inches";
        toUnit = "centimeters";

    } else if (conversionChoice === "foot to centimeter") {

        result = inputValue * 30.48;
        fromUnit = "feet";
        toUnit = "centimeters";

    } else if (conversionChoice === "yard to meter") {

        result = inputValue * 0.91;
        fromUnit = "yards";
        toUnit = "meters";

    } else if (conversionChoice === "mile to kilometer") {

        result = inputValue * 1.61;
        fromUnit = "miles";
        toUnit = "kilometers";

    } else if (conversionChoice === "centimeter to inch") {

        result = inputValue * 0.39;
        fromUnit = "centimeters";
        toUnit = "inches";

    } else if (conversionChoice === "centimeter to foot") {

        result = inputValue * 0.0328;
        fromUnit = "centimeters";
        toUnit = "feet";

    } else if (conversionChoice === "meter to yard") {

        result = inputValue * 1.09;
        fromUnit = "meters";
        toUnit = "yards";

    } else if (conversionChoice === "kilometer to mile") {

        result = inputValue * 0.62;
        fromUnit = "kilometers";
        toUnit = "miles";

    }

    output.innerHTML = inputValue + " " + fromUnit + " is " + result.toFixed(2) + " " + toUnit + ".";

});