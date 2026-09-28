 # Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## TODO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task goal calculator
## Weekly Task Goal
Created a task goal calculator that allows users to write their name, daily task goal, and weekly bonus tasks. Multiplies daily goal by 5 workdays + bonus tasks

## Imperial/Metric Converter

The Imperial/Metric Converter is a web application that allows users to convert measurements between Imperial and Metric units. The application supports conversions between inches, feet, yards, miles, centimeters, meters, and kilometers.

### Logic and Pseudocode
BEGIN

    INPUT numeric value
    INPUT conversion choice

    IF conversion choice is "inch to centimeter" THEN
        SET result = numeric value * 2.54
        OUTPUT result

    ELSE IF conversion choice is "foot to centimeter" THEN
        SET result = numeric value * 30.48
        OUTPUT result

    ELSE IF conversion choice is "yard to meter" THEN
        SET result = numeric value * 0.91
        OUTPUT result

    ELSE IF conversion choice is "mile to kilometer" THEN
        SET result = numeric value * 1.61
        OUTPUT result

    ELSE IF conversion choice is "centimeter to inch" THEN
        SET result = numeric value * 0.39
        OUTPUT result

    ELSE IF conversion choice is "centimeter to foot" THEN
        SET result = numeric value * 0.0328
        OUTPUT result

    ELSE IF conversion choice is "meter to yard" THEN
        SET result = numeric value * 1.09
        OUTPUT result

    ELSE IF conversion choice is "kilometer to mile" THEN
        SET result = numeric value * 0.62
        OUTPUT result

    ELSE
        OUTPUT "Invalid conversion choice"

## Magic Eight Ball

This Magic Eight Ball is an interactive game that allows users to type a yes or no question and click on the Magic Eight Ball to get a random response. The game will use a JavaScript array to select from different responses and uses Math.random() and Math.floor() to randomly select an answer and then displays it. There's also a button to reset.

END

