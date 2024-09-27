document.getElementById("addBtn").addEventListener("click", function() {
    const binary1 = document.getElementById("binary1").value;
    const binary2 = document.getElementById("binary2").value;

    if (isValidBinary(binary1) && isValidBinary(binary2)) {
        const result = addBinary(binary1, binary2);
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Error: Please enter valid binary numbers.";
    }
});

document.getElementById("subBtn").addEventListener("click", function() {
    const binary1 = document.getElementById("binary1").value;
    const binary2 = document.getElementById("binary2").value;

    if (isValidBinary(binary1) && isValidBinary(binary2)) {
        const result = subtractBinary(binary1, binary2);
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Error: Please enter valid binary numbers.";
    }
});

function isValidBinary(binary) {
    // Check if the input string is a valid binary number
    return /^[01]+$/.test(binary);
}

function addBinary(bin1, bin2) {
    const sum = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
    return sum;
}

function subtractBinary(bin1, bin2) {
    const diff = (parseInt(bin1, 2) - parseInt(bin2, 2)).toString(2);
    return diff;
}
