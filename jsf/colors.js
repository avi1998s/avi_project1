let r = document.querySelector(":root");
let colorOBG1 = ["#fe0eba","#ffffff","#155dda","#000000","#13e921","#e91313"]
function set_color (){
    for(i=0;i<colorOBG1.length;i++){
    setInterval(() =>{r.style.setProperty("--color",colorOBG1[i])
    },500)}
}
function myfor (varableOF){
    for(i=0;i<varableOF.length;i++){
       varableOF = varableOF[i]
       alert(varableOF)
    }
}
