let names = "avi dudu dani yosi baruch coco david ",
namesAR = names.split(" "),
tnay = " ",
word="",
arrayNames=[];
for (i in names){
    word+=names[i]
    if (names[i]==tnay){
        arrayNames.push(word)
        word=""
    }
}
console.log("split: "+ namesAR);
console.log("my work: "+ arrayNames);
