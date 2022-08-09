var div=document.createElement("div");
div.style.textAlign="center";
var input =document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);
let active=document.createElement("div");
active.setAttribute("id","active");

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

let death=document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,recovered,death);
document.body.append(div);


async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;

    let result=await fetch(url);
    let result1=await result.json();
    var index=result1.length-1;
    console.log(result1[index].active);
    active.innerHTML=`Total Active cases:${result1[index].Active} `;
     console.log(result1[index].death);
     death.innerHTML=`Total death Cases:${result1[index].Deaths}`;
     console.log(result1[index].recovered);
     recovered.innerHTML=`Total Recovered Cases:${result1[index].Recovered}`;

}