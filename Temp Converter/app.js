function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultElement = document.getElementById("result");
    let result;

    if (inputUnit === "celsius") {
        const fahrenheit = (inputTemperature * 9/5) + 32;
        const kelvin = inputTemperature + 273.15;
        result = `${inputTemperature}°C  is  ${fahrenheit.toFixed(2)}°F  and   ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "fahrenheit") {
        const celsius = (inputTemperature - 32) * 5/9;
        const kelvin = (inputTemperature - 32) * 5/9 + 273.15;
        result = `${inputTemperature}°F  is  ${celsius.toFixed(2)}°C  and  ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "kelvin") {
        const celsius = inputTemperature - 273.15;
        const fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
        result = `${inputTemperature}K  is  ${celsius.toFixed(2)}°C  and  ${fahrenheit.toFixed(2)}°F`;
    }

    resultElement.textContent = result;
}

function resetFields() {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("inputUnit").value = "celsius";
    document.getElementById("result").textContent = "";
}
