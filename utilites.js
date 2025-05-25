function inputValueByClassName(selector) {
    const inputValue = document.querySelector(selector).value
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}
// shared function for text of form
function textValueByClassName(selector) {
    const textValue = document.querySelector(selector).innerText
    const textNumber = parseFloat(textValue)
    return textNumber;
}

//function for clearing the items

function clearInputFields(...sections) {
    sections.forEach(section => {
        document.querySelector(section).value = '';
    });
}