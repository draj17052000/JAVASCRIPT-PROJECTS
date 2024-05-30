function convert() {
    var fromunit = document.getElementById("fromunit").value;
    var tounit = document.getElementById("tounit").value;
    var temperature = parseFloat(document.getElementById("temperature").value);

    var convertedvalue;
    var resultunit;

    switch (fromunit) {
        case "C":
            if (tounit === "F") {
                convertedvalue = (temperature * 9 / 5) + 32;
                resultunit = "F";
            } else if (tounit === "K") {
                convertedvalue = temperature + 273.15;
                resultunit = "K";
            }
            break;

        case "F":
            if (tounit === "C") {
                convertedvalue = (temperature - 32) * 5 / 9;
                resultunit = "C";
            } else if (tounit === "K") {
                convertedvalue = (temperature - 32) * 5 / 9 + 273.15;
                resultunit = "K";
            }
            break;

        case "K":
            if (tounit === "F") {
                convertedvalue = (temperature - 273.15) * 9 / 5 + 32;
                resultunit = "F";
            } else if (tounit === "C") {
                convertedvalue = temperature - 273.15;
                resultunit = "C";
            }
            break;
    }

    document.getElementById("result").value = convertedvalue.toFixed(2) + resultunit;
}