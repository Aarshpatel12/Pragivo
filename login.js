function openForm() {
    event.preventDefault();
    const form = document.getElementById("myForm");
    form.classList.add("fade-in");
    form.style.display = "block";
}

function closeForm() {
    const form = document.getElementById("myForm");
    form.style.display = "none";
}

function Continue() {
    var mb = document.getElementById("phonenumber").value;
    if (mb.length != 0) {
        event.preventDefault();
        const otpForm = document.getElementById("otpform");
        otpForm.classList.add("fade-in");
        otpForm.style.display = "block";
        document.getElementById("myForm").style.display = "none";
        var full = document.getElementById("phonenumber").value;
        document.getElementById("number").innerText = "We have sent you a 4 digit OTP on " + full;
    }
}

function Ac() {
    event.preventDefault();
    var Account = document.getElementById("Account").innerText = "Gurukiran";
    document.getElementById("otpform").style.display = "none";
    console.log(Account);
}

function validateOTP() {
    event.preventDefault();
    var otp = document.getElementById("otpInput").value; // Assuming you have an input field for OTP
    
    if (otp.length === 4) { // Check if OTP is 4 digits
        alert("OTP verified successfully!");
        window.location.href = "nextPage.html"; // Redirect to the next page
    } else {
        alert("Please enter a valid 4-digit OTP."); // Updated message
    }
}

