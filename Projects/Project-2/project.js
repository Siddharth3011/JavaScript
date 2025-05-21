const form = document.querySelector('form');
// const height= parseInt(document.querySelector('#height').value) ye line ham yahan na likh kr niche likhenege  kyuki agr yahan likha to wo empty value le lega.
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');
    const imfo= document.querySelector('#imfo');
    //Applying Checks:
    if(height === '' || height < 0 || isNaN(height)){ //height != 0 ki jegah isNaN likha gya hai.
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Show the result
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            imfo.innerHTML = "Under Weight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            imfo.innerHTML = "Normal Range";
        }
        else{
            imfo.innerHTML = "Over Weight";
        }
    }
}); 