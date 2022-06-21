function calculation() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operators").value;

    if (operation === "+") {
        document.getElementById("answer").value = num1 + num2;
    }

    if (operation === "-") {
        document.getElementById("answer").value = num1 - num2;
    }

    if (operation === "/") {
        document.getElementById("answer").value = num1 / num2;
    }

    if (operation === "*") {
        document.getElementById("answer").value = num1 * num2;
    }
}