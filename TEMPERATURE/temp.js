let getuserInputId = document.getElementById("degrees");

let getoptionTypeId = document.getElementById("select-type");

let getresultsId = document.getElementById("results");

let getButtonId = document.getElementById("convert-button");

let getErrorMsgId = document.getElementById("error");


getButtonId.onclick = function() {
    let getInput = getuserInputId.value;
    if (getInput === "") {
        getresultsId.textContent=""
        getErrorMsgId.textContent = "***Input shouldn't be Empty***";
    } else {
        if (isNaN(getInput)) {
            getErrorMsgId.textContent = "*Enter Only Numeric";
            getresultsId.textContent = "";
        } else {
            getErrorMsgId.textContent = "";
            if (getoptionTypeId.value === "Fahrenheit") {
                getresultsId.textContent = "";
                let calculate = ((parseInt(getuserInputId.value) * 9 / 5) + 32);
                getresultsId.textContent = calculate + "° F";
            } else if (getoptionTypeId.value === "Celsius") {
                getresultsId.textContent = "";
                let calculate = ((parseInt(getuserInputId.value) - 32) * 5 / 9);
                getresultsId.textContent = calculate + "° C";

            } else {
                getresultsId.textContent = "";
                let calculate = (parseInt(getuserInputId.value) + 273.15);
                getresultsId.textContent = calculate + "K";
            }
        }
    }




}