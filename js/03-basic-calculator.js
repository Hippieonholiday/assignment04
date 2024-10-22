function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if (y !== 0) {
                return x / y;
            } else {
                alert("You can't divide by zero. Try again.");
                return null;
            }
            break;
        default:
            alert("Operation is invalid. Try again.");
            return null;
    }
}

function runCalculator() {
    let result;
    do {
        let x;
        while (true) {
            x = parseFloat(prompt("Enter the first number in the equation"));
            if (!isNaN(x)) {
                break;
            }
            alert("This response is invalid. Please enter a number in digit form.");
        }

        let y;
        while (true) {
            y = parseFloat(prompt("Enter the second number in the equation"));
            if (!isNaN(y)) {
                break;
            }
            alert("This response is invalid. Please enter a number in digit form.");
        }

        let operation = prompt("Choose the operation you would like to be performed: add, subtract, multiply, or divide").toLowerCase();

        result = calculate(x, y, operation);

        if (result !== null) {
            alert(`The result of ${operation}ing ${x} and ${y} is: ${result}`);
        }
    } while (result === null);
}

runCalculator();
