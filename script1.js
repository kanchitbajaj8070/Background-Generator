color1=document.getElementById("color1");
color2=document.getElementById("color2");
button=document.getElementById("submit-button");
code1=document.getElementById("seeCode1");
code2=document.getElementById("seeCode2");
body=document.body;

color1.addEventListener("input",function () {
    code1.innerHTML=color1.value;
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})

color2.addEventListener("input",function () {
    code2.innerHTML=color2.value;
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})



