var consent = confirm("Do you agree to share your personal information with our site?");

if (consent) {
    var nickname = prompt("Please enter your nickname:");

    var heightInches = parseFloat(prompt("Please enter your height in inches:"));

    var weightKg = parseFloat(prompt("Please enter your weight in kg:"));

    var feet = Math.floor(heightInches /12);
    var inch = (heightInches % 12);
    var heightft = (feet + "'" + inch);

    var weightlbs = (weightKg * 2.2)

    document.write("Nickname: " + nickname + " <br>Height (ft): " + heightft + "<br>Weight:" + weightlbs + "lbs");
    
} else {
    
    alert("User does not wish to share his/her information.");
}