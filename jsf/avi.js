const
container =document.querySelector("#container2"),
h1 = document.createElement("h1"),
p1 = document.createElement("p");
container.appendChild(h1)
container.appendChild(p1)
h1.id="h1"
p1.id="p1"

h1.innerHTML= "ברוכים הבאים וכו"
p1.innerHTML = "זה האתר החדש שלי כאן נתרגל כל מיני דברים מעניינים בנושא בנית אתרים"

// יצירת טבלה באמצעות לולאות פור

const
names = ["avi sason","susu","dudu","shamby","tovi","baruch","shawarem","nachum",]
table =document.querySelector("#table1"),
th = document.createElement("th");
table.appendChild(th)
th.innerHTML="הטבלה של אבי"
for(let i=0;i<3;i++){
    let trEL = document.createElement("tr");
    table.appendChild(trEL)
    for(let j=0;j<names.length;j++){
        let tdEL = document.createElement("td");
        trEL.appendChild(tdEL)
        tdEL.innerHTML=names[j]
    }
}








//git config --global user.name "avi1998s"
//git config --global user.email "avi6190i@gmail.com"
