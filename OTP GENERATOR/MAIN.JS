
let generatedotp = document.getElementById("generated");
let headMessage = document.getElementById("Message");
let generateButton = document.getElementById("button");
function generate() {
    let otp = Math.floor(Math.random() * 9000) + 1000;
    generatedotp.value = "Generated OTP: " + otp;
    headMessage.innerText = "Enter otp"
    generateButton.innerText = "Regenerate otp"
}

function verifyMsg() {
    let iconInput = document.getElementById("icon");
    let verifiedMsg = document.getElementById("verified");

    verifiedMsg.value = "Success! OTP Is Verified";
}



