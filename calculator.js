const operation = prompt("Enter an operation (+, -, *, /)");const number1 = parseFloat(prompt ("Enter the first number."));const number2 = parseFloat(prompt ("Enter the second number."));let result;if (operation == "+") {result = number1 + number2;}else if (operation == "-") {result = number1 - number2;}else if (operation == "*") {result = number1 * number2;}else {result = number1 / number2;}alert(number1 + " " + operation + " " + number2 + " = " + result);
