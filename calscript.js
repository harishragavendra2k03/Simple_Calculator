let display = document.getElementById("display");


function appendValue(value) {

    if (display.value === "0") {
        display.value = value;
    } 
    else {
        display.value += value;
    }
}

function clearDisplay() {

    display.value = "0";
}

function backspace() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
        );

        let result = eval(expression);

        display.value = result;

    } 
    catch (error) {
        display.value = "Error";
    }
}
