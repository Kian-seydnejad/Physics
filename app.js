let Result = document.getElementById("voltageOutput");
let Result2 = document.getElementById("RateOfChange");


document.getElementById("calculateButton").addEventListener("click", calculateOhmLaw);
document.getElementById("calculateButton2").addEventListener("click", calculateRateOfChange);

function calculateOhmLaw(e) {
    e.preventDefault();

    let currentInput = document.getElementById("currentInput").value.trim();
    let resistanceInput = document.getElementById("resistanceInput").value.trim();
    let voltageInput = document.getElementById("voltageInput").value.trim();

    if (currentInput !== "" && resistanceInput !== "" && voltageInput !==""){
        alert("Please fill only two inputs!");
        return;
    }
    if (currentInput !== "" && resistanceInput !== "") {
        let current = transfer(currentInput);
        let resistance = transfer(resistanceInput);
        console.log(current, resistance);
        

        let voltage = current * resistance;
        Result.classList = 'text-danger mt-3 ms-2 p-2 mb-3';
        Result.textContent = `V=I.R => V= ${current}A×${resistance} Ohm => V=${voltage} V`;
    }
    else if (voltageInput !== "" && resistanceInput !== "") {
        let voltage = transfer(voltageInput);
        let resistance = transfer(resistanceInput);


        let current = voltage / resistance;
        Result.classList = 'text-danger mt-3 ms-2 p-2 mb-3';
        Result.textContent = `Current: ${current} A`;
        Result.textContent = `I=V/R => I= ${voltage}V/${resistance} Ohm => I=${current} A`;


    }
    else if (voltageInput !== "" && currentInput !== "") {
        let voltage = transfer(voltageInput);
        let current = transfer(currentInput);


        let resistance = voltage / current;
        Result.classList = 'text-danger mt-3 ms-2 p-2 mb-3';
        Result.textContent = `R=V/I => R= ${voltage}V/${current}A => R=${resistance} Ohm`;
    }

    
    function transfer(x) {
        return parseFloat(x.trim());
    }
}
function calculateRateOfChange(e) {
    e.preventDefault();

    let currentInput1 = document.getElementById("Curr-one").value.trim();
    let currentInput2 = document.getElementById("Curr-two").value.trim();
    let voltageInput1 = document.getElementById("Volt-one").value.trim();
    let voltageInput2 = document.getElementById("Volt-two").value.trim();

    if (currentInput1 && currentInput2 && voltageInput1 && voltageInput2 !== "") {
        let current1 = transfer(currentInput1);
        let current2 = transfer(currentInput2);
        let voltage1 = transfer(voltageInput1);
        let voltage2 = transfer(voltageInput2);

        if (current1 === null || voltage1 === null || current2 === null || voltage2 === null) {
            alert("Please fill all inputs.");
            return;
        }
        let Rate = (voltage1 - voltage2)/(current1 - current2)
        Result2.classList = 'text-danger mt-3 ms-2 p-2 mb-3';
        Result2.textContent = `Rate of Change: (V1 - V2) / (I1 - I2)  =  (${voltage1} - ${voltage2})/(${current1} - ${current2}) = ${Rate}`;

    }
    function transfer(y) {
        return parseFloat(y.trim());
    }


}

////////////////bind method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName; 
    }
}

const member = {
    firstName: "Kian",
    lastName: "Seydnejad",
}

let fullNameFunction = person.fullName.bind(member); 
let fullName = fullNameFunction(); 

console.log(fullName); 


