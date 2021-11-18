function BMI() {
    let height=document.getElementById('height').value;
    let weight=document.getElementById('weight').value;
    let bmi=weight/(Math.pow(height/100,2));
    let bmio=(bmi.toFixed(2));
        document.getElementById("result").innerHTML="Your BMI is " + bmio;
}
