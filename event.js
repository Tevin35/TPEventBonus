var h1 = document.getElementById("myH1");
h1.addEventListener("mouseover", mouseOverH1);
h1.addEventListener("mouseout", mouseOutH1);
function mouseOverH1(){
    h1.innerHTML = "Mon nouveau titre";
}
function mouseOutH1(){
    h1.innerHTML = "Mon ancien titre";
}

var h2 = document.getElementById("myH2");
h2.addEventListener("mouseover", mouseOverH2);
h2.addEventListener("mouseout", mouseOutH2);
function mouseOverH2(){
    h2.innerHTML = "Mon nouveau titre";
}
function mouseOutH2(){
    h2.innerHTML = "Mon ancien titre";
}