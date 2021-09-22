var input1=document.querySelector("#i1")
var input2=document.querySelector("#i2")
var btn1=document.querySelector(".c1")
var output1=document.querySelector("#i3")
var output2=document.querySelector("#i4")
var data1=document.querySelector("#i5")
var data2=document.querySelector("#i7")
var data3=document.querySelector("#i9")
var data4=document.querySelector("#i11")
var data5=document.querySelector("#i13")
var data6=document.querySelector("#i15")
var data7=document.querySelector("#i17")

var index=[2000,500,100,20,10,5,1];
var notes=[0,0,0,0,0,0,0];
 
function returnAmount(data){
    for(var i=0;i<index.length;i++)
    {
        var cash=parseInt(data/index[i]);
        notes[i]=cash;
        data=data%index[i];
    }
    i=0;
    data1.innerText=notes[i];
    i++;
    data2.innerText=notes[i];
    i++;
    data3.innerText=notes[i];
    i++;
    data4.innerText=notes[i];
    i++;
    data5.innerText=notes[i];
    i++;
    data6.innerText=notes[i];
    i++;
    data7.innerText=notes[i];
    i++;
}

function clickHandler(){
    if((input2.value>input1.value)&&(input2.value>0)&&(input1.value>0))
    {
    output1.innerText=(input2.value)-(input1.value);
    var data=output1.innerText
    returnAmount(data)
    }
    else{if((input2.value<0)||(input1.value<0))
    {
        alert("Error in the amount");
    }
    else{
        alert("Oops there is an error!!!")
    }}
}
btn1.addEventListener("click",clickHandler)
