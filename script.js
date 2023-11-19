let array = [];

let buttons = document.querySelector(".buttons");
buttons.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case "ac":
            array = [];
            refreshDisplay()
            let displayUpper = document.querySelector(".display_upper");
            displayUpper.textContent = "";
            break;
        case "del":
            array.pop()
            refreshDisplay()
            

            break;
        case "eq":
            refreshDisplay()
            parse();
            break;
        default:
            array.push(target.textContent)
            refreshDisplay()
    }
})

function refreshDisplay() {
    let displayUpper = document.querySelector(".display_upper");
    let displayLower = document.querySelector(".display_lower");
    displayLower.textContent = array.join("");
}

function parse(){
    let displayUpper = document.querySelector(".display_upper");
    let displayLower = document.querySelector(".display_lower");
    let string = array.join("");
    numbers = string.split(/[-+*/%]/);
    operators = string.split(/[0123456789]+/);
    operators = operators.slice(1, operators.length - 1)
    console.log(numbers);
    console.log(operators);
    displayUpper.textContent = array.join("");

    while(numbers.length > 1){
        a = numbers.shift();
        operator = operators.shift()
        console.log(`${a} ${operator} ${numbers[0]}`)
        numbers[0] = calculate(a, operator, numbers[0])

    }
    displayLower.textContent = numbers[0];
    array = [numbers[0]]
}


function calculate(a, operator, b){
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
    }

}