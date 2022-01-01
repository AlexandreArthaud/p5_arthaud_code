// checks value of input with provided regex and displays error message if invalid
function validateFormInput(value, regexLitteral, errorElementId, errorMsg) {
    let regex = new RegExp(regexLitteral);
    let firstNameErrorMsgElement = document.getElementById(errorElementId);

    if (!regex.test(value)) {
        firstNameErrorMsgElement.innerHTML = errorMsg;
    }
    else {
        firstNameErrorMsgElement.innerHTML = "";
    }
}
