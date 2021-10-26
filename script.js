
let checkEl = document.getElementById("check");
let textEl = document.getElementById("text");

checkEl.addEventListener("click", ()=> {
    
    let emailEl = document.getElementById("email").value;
    let arr = emailEl.split("");
    for (i of arr){
        if(i === "@"){arr = emailEl.split("@")}else{textEl.innerHTML = "You entered invalid format"}      
    }
    console.log(arr[0])

})

