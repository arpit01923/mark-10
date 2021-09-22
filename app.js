var input1=document.querySelector("#i1")
var input2=document.querySelector("#i2")
var btn1=document.querySelector(".c1")
var output1=document.querySelector("#i3")
var output2=document.querySelector("#i4")
 
function clickHandler(){
    output1.innerText=(input2.value)-(input1.value);
}
btn1.addEventListener("click",clickHandler)
