

function changeColor() {
    var currentColor = document.getElementById("currentColor").textContent
    console.log(currentColor);
    if (currentColor == "black") {
        document.getElementById('greenLight').style.backgroundColor =  "green"
        document.getElementById("currentColor").innerText = "green"
        }
        if (currentColor == "green") {
            document.getElementById('greenLight').style.backgroundColor =  "black"
            document.getElementById('yellowLight').style.backgroundColor =  "yellow"
            document.getElementById("currentColor").innerText = "yellow"
            }
            if (currentColor == "yellow") {
                document.getElementById('yellowLight').style.backgroundColor =  "black"
                document.getElementById('redLight').style.backgroundColor =  "red"
                document.getElementById("currentColor").innerText = "red"
                }
                if (currentColor == "red") {
                    document.getElementById('redLight').style.backgroundColor =  "black"
                    document.getElementById('greenLight').style.backgroundColor =  "green"
                    document.getElementById("currentColor").innerText = "green"
                    }
    }
