const temperatureInput = document.getElementById("inputTemp");
const toFahrenheit = document.getElementById("tofahrenheit");
const toCelsius = document.getElementById("tocelsius");
const outputVal = document.getElementById("outputval");

function conversion() {
    const temp = Number(temperatureInput.value);

    if (isNaN(temp)) {
        outputVal.textContent = "Please enter a valid number";
        return;
    }

    if (toFahrenheit.checked) {
        const result = (temp * 9) / 5 + 32;
        outputVal.textContent = `${result.toFixed(1)} °F`;
    } 
    else if (toCelsius.checked) {
        const result = ((temp - 32) * 5) / 9;
        outputVal.textContent = `${result.toFixed(1)} °C`;
    } 
    else {
        outputVal.textContent = "Select a unit first";
    }
}
