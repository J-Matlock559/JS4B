const num1 = document.querySelector("#numOneInput");
const num2 = document.querySelector("#numTwoInput");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");
const result = document.querySelector("#result");

//Compares numbers on click and displays results
submit.addEventListener("click", () => {
    const numOne = parseInt(num1.value);
    const numTwo = parseInt(num2.value);

if (Number.isNaN(numOne) || Number.isNaN(numTwo)) {
    result.innerText = "Please enter valid numbers.";
} else if (numOne == numTwo) {
    result.innerText = "The numbers are equal.";
} else if (numOne > numTwo) {
    result.innerText = `${numOne} is the greater number.`;
} else {
    result.innerText = `${numTwo} is the greater number.`;
}
});

//Clears fields and result
clear.addEventListener("click", () => {
    document.getElementById('numOneInput').value = '';
    document.getElementById('numTwoInput').value = '';
    result.innerText = '';
})