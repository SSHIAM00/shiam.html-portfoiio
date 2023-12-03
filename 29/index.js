let myName = "3 Decemder";
let index = 1;

function writeText(){
    document.querySelector("h1").textContent = myName.slice(0,index);

    index++
    if(index > myName.length){
        index =1;
    }
}

setInterval(function(){
    writeText(); 
},100 )


let buttonDecember = document.getElementById("button");
buttonDecember.innerText = "light December"
buttonDecember.addEventListener("click", () =>{
    alert("Hello December friend");
});
