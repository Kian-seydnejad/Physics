let Result = document.getElementById("voltageOutput");

document.getElementById("calculateButton").addEventListener("click", calculateOhmLaw);

function calculateOhmLaw(e) {
    e.preventDefault();

    let currentInput = document.getElementById("currentInput").value.trim();
    let resistanceInput = document.getElementById("resistanceInput").value.trim();
    let voltageInput = document.getElementById("voltageInput").value.trim();

    if (currentInput !== "" && resistanceInput !== "") {
        let current = tryParseFloat(currentInput);
        let resistance = tryParseFloat(resistanceInput);

        if (current === null || resistance === null) {
            alert("Please enter valid numbers for current and resistance.");
            return;
        }

        let voltage = current * resistance;
        Result.textContent = `Voltage: ${voltage}V`;
    }
    else if (voltageInput !== "" && resistanceInput !== "") {
        let voltage = tryParseFloat(voltageInput);
        let resistance = tryParseFloat(resistanceInput);

        if (voltage === null || resistance === null) {
            alert("Please enter valid numbers for voltage and resistance.");
            return;
        }

        let current = voltage / resistance;
        Result.textContent = `Current: ${current} A`;
    }
    else if (voltageInput !== "" && currentInput !== "") {
        let voltage = tryParseFloat(voltageInput);
        let current = tryParseFloat(currentInput);

        if (voltage === null || current === null) {
            alert("Please enter valid numbers for voltage and current.");
            return;
        }

        let resistance = voltage / current;
        Result.textContent = `Resistance: ${resistance}Ohm`;
    }
    else {
        alert("Please fill two of the three inputs.");
    }
}

function tryParseFloat(x) {
    return parseFloat(x.trim());
}

