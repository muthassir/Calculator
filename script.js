let outputscreen = document.getElementById("output");
let invalid = document.getElementById("inv")
function display(num){
     outputscreen.value += num;
}
function Calculate(){
    try{
         outputscreen.value = eval(outputscreen.value);
     }
    catch(err){
      invalid.innerHTML= "error"
    }
}

function clr(){
    outputscreen.value = outputscreen.value.slice(0,0);
    invalid.innerText = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0,-1);
}