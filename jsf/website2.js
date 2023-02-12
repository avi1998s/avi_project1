let input = document.getElementById("p1")
document.getElementById("but1").onclick=function (){
    input.innerHTML =parseInt(document.getElementById("inp1").value) + 
    document.getElementById("inp2").value +
    parseInt(document.getElementById("inp3").value) 
} 