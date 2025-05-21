const button = document.querySelectorAll('.button');
const body = document.querySelector('.canvas')
button.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){ //click event choose kiya hai hmne ham chahe to hover bhi choose kr sakte the. Aur click ho to kya ho iske liye hmne function bnaya hai. Aur e ek object ho gya
        console.log(e); //e ek mouse event hai. ham e ke jegah kuch bhi likh sakte hain jaise ram, shyam....
        console.log(e.target);
        if(e.target.id ==="grey"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
    });
});

