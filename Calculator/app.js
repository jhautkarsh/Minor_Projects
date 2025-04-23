
let display = document.getElementById("display");
let historyList = document.getElementById("history-list");
let currentInput = "";

function updateDisplay() {
    display.textContent = currentInput || "0";
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === "") return;
    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    updateDisplay();
}

function appendDecimal(dot) {
    const parts = currentInput.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes(dot)) {
        currentInput += dot;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        const historyItem = `${currentInput} = ${result}`;
        addToHistory(historyItem);
        currentInput = result.toString();
        updateDisplay();
    } catch {
        currentInput = "";
        display.textContent = "Error";
    }
}

function addToHistory(entry) {
    const div = document.createElement("div");
    div.className = "history-entry";
    div.textContent = entry;
    div.onclick = () => {
        const expression = entry.split("=")[0].trim();
        currentInput = expression;
        updateDisplay();
    };
    historyList.prepend(div);
}