const age = document.getElementById('age')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const male = document.getElementById('male')
const female = document.getElementById('female')
const noactive = document.getElementById('no')
const little = document.getElementById('little')
const medium = document.getElementById('medium')
const very = document.getElementById('very')
const extra = document.getElementById('extra')

function goOn(event) {
    event.preventDefault();
    let demo = document.getElementById('demo');

    let x = Math.round(88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value));
    let y = Math.floor(447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value));


    let bmr = male.checked ? x : y;

    if(male.checked == false){
        demo.innerHTML = "Please select your gender"
    }
    if(female.checked == false){
        demo.innerHTML = "Please select your gender"
    }
    if (height.value > 250) {
        demo.innerHTML = "Nobody is that tall!";
    }
    if (weight.value > 350) {
        demo.innerHTML = "Nobody is that heavy!";
    }
    if (weight.value < 30){
        demo.innerHTML = "Nobody is that light!"
    }
    if (height.value < 130){
        demo.innerHTML = "Nobody is that short!"
    }
    else {
        console.warn("Your code is not working!");
    }

    let select = document.getElementById('select');
    let activityMultiplier;

    switch (select.value) {
        case 'Not Active':
            activityMultiplier = 1.2;
            break;
        case 'Little Active':
            activityMultiplier = 1.375;
            break;
        case 'Medium Active':
            activityMultiplier = 1.55;
            break;
        case 'Very Active':
            activityMultiplier = 1.725;
            break;
        case 'Intensive Active':
            activityMultiplier = 1.9;
            break;
        default:
            demo.innerHTML += "<br>Your BMR is: " + bmr;
            return; 
    }

    let totalCalories = Math.round(bmr * activityMultiplier);
    demo.innerHTML = `Total Calorie Need: ${totalCalories} Kcal`;
}
