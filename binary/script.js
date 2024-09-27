function convertFromBinary() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = document.getElementById('decimalOutput');
    const hexadecimalOutput = document.getElementById('hexadecimalOutput');
    const octalOutput = document.getElementById('octalOutput');
    
    if (/^[01]+$/.test(binaryInput)) {
        const decimalValue = parseInt(binaryInput, 2);
        decimalOutput.textContent = decimalValue;
        hexadecimalOutput.textContent = decimalValue.toString(16).toUpperCase();
        octalOutput.textContent = decimalValue.toString(8);
    } else {
        decimalOutput.textContent = 'Invalid Binary Number';
        hexadecimalOutput.textContent = 'Invalid Binary Number';
        octalOutput.textContent = 'Invalid Binary Number';
    }
}

function convertFromDecimal() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    const decimalToHexOutput = document.getElementById('decimalToHexOutput');
    const decimalToOctalOutput = document.getElementById('decimalToOctalOutput');
    
    if (decimalInput !== '' && !isNaN(decimalInput) && Number(decimalInput) >= 0) {
        const binaryValue = Number(decimalInput).toString(2);
        const hexadecimalValue = Number(decimalInput).toString(16).toUpperCase();
        const octalValue = Number(decimalInput).toString(8);
        
        binaryOutput.textContent = binaryValue;
        decimalToHexOutput.textContent = hexadecimalValue;
        decimalToOctalOutput.textContent = octalValue;
    } else {
        binaryOutput.textContent = 'Invalid Decimal Number';
        decimalToHexOutput.textContent = 'Invalid Decimal Number';
        decimalToOctalOutput.textContent = 'Invalid Decimal Number';
    }
}

function convertFromHexadecimal() {
    const hexadecimalInput = document.getElementById('hexadecimalInput').value.toUpperCase();
    const hexToBinaryOutput = document.getElementById('hexToBinaryOutput');
    const hexToDecimalOutput = document.getElementById('hexToDecimalOutput');
    const hexToOctalOutput = document.getElementById('hexToOctalOutput');
    
    if (/^[0-9A-F]+$/.test(hexadecimalInput)) {
        const decimalValue = parseInt(hexadecimalInput, 16);
        hexToBinaryOutput.textContent = decimalValue.toString(2);
        hexToDecimalOutput.textContent = decimalValue;
        hexToOctalOutput.textContent = decimalValue.toString(8);
    } else {
        hexToBinaryOutput.textContent = 'Invalid Hexadecimal Number';
        hexToDecimalOutput.textContent = 'Invalid Hexadecimal Number';
        hexToOctalOutput.textContent = 'Invalid Hexadecimal Number';
    }
}

function convertFromOctal() {
    const octalInput = document.getElementById('octalInput').value;
    const octalToBinaryOutput = document.getElementById('octalToBinaryOutput');
    const octalToDecimalOutput = document.getElementById('octalToDecimalOutput');
    const octalToHexOutput = document.getElementById('octalToHexOutput');
    
    if (/^[0-7]+$/.test(octalInput)) {
        const decimalValue = parseInt(octalInput, 8);
        octalToBinaryOutput.textContent = decimalValue.toString(2);
        octalToDecimalOutput.textContent = decimalValue;
        octalToHexOutput.textContent = decimalValue.toString(16).toUpperCase();
    } else {
        octalToBinaryOutput.textContent = 'Invalid Octal Number';
        octalToDecimalOutput.textContent = 'Invalid Octal Number';
        octalToHexOutput.textContent = 'Invalid Octal Number';
    }
}