const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
      result.innerHTML += e.target.id;  
    });
     
});