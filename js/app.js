 let Increment = document.querySelector(".increment");
 let Decrement = document.querySelector(".decrement");
 let Cart = document.querySelector(".cart");

 


// 

Increment.addEventListener('click', ()=>{
     cartValue = Number(Cart.value);
     ++Cart.value;
})


Decrement.addEventListener('click', ()=>{
    let cartValue = Number(Cart.value);
    if(cartValue>1){
        Cart.value = --cartValue;
    }
 
})


let password_input = document.querySelector('.password_box .pass');

let password_btn = document.querySelector('.password_box .btn');

password_btn.addEventListener('click', ()=>{

  if(password_input.type == 'text'){
     password_input.type = 'password';
  } else{
      password_input.type ='text';
  }

})

let show_password = document.querySelector('#showPassword')

let close_password = document.querySelector('#passt');

close_password.addEventListener('click', ()=>{
    
   
})

let range = document.querySelector('#range1');
range.addEventListener('input', ()=>{
    document.querySelector('h3').innerHTML= range.value;
})





setInterval(()=>{

    let date = new Date();
    document.querySelector('h2').innerHTML= date;
    alert("say good sir");

},3000)



    







