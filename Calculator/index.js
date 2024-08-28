let   display=document.querySelector('.input')
let buttons=document.querySelectorAll('.button')
let con;
var string=""
buttons.forEach(button =>{
button.addEventListener('click',function(e){
    if(e.target.textContent=='Clear'){
        console.log(e)
        string=""
        display.value="0"
    }else if(e.target.textContent=='='){
        string=eval(string)
        display.value=string

        
      
    }else if(e.target.textContent=='Remove'){
     
       string=String(string)
        
       string=string.substring(0,string.length-1)
        display.value=string
     if(display.value==""){
        display.value="0"
     }
 
    } else{
        string=string+e.target.textContent
        display.value=string
    }
})


});
