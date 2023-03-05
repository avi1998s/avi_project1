let cars = "Saab15 45Volvo 47BMW subaru65 Suzuki11 isUZu12 kiA55 miTsuBishi10",
carsArray = cars.split(" "),
carsNumbers = [],
carsStr = [];
// הוספת רכב חדש 
// carsArray.push(prompt("הכנס רכב "))
for (i in carsArray){
   carsNumbers.push(carsArray[i].match(/\d+/g))
   carsStr.push(carsArray[i].match(/[a-zA-Z]+/g))
   carsNumbers=carsNumbers.flat()
   carsStr=carsStr.flat()

}
let numCunter =0;
// מציאת המקט הגבוהה ביותר
for (i=0;i<carsNumbers.length;i++){
    if (carsNumbers[i]>numCunter){
        numCunter=carsNumbers[i]
    }    
}
let strCunter =0;
let longName ="";
// מציאת שם הרכב הגבוהה ביותר
for (i in carsStr){
    if (carsStr[i].length>strCunter){
        strCunter=carsStr[i].length
        longName=carsStr[i]
    }   
}
console.log(carsArray);

// שינוי שם רכב לפי מקט
let a = "10";
let b = "toyota";
let c = 897;
carsArray[carsNumbers.indexOf(a)]=b.toString()+c
console.log(carsArray);

//שינוי מקט לרכב ספציפי
let namePro = "subaru";
let newNamePro = "dizu";
let newMcatPro = "12345";
carsArray[carsStr.indexOf(namePro)]=newMcatPro.toString()+newNamePro
console.log(carsArray);
// 
console.log(" ");
console.log(" ");
console.log(carsStr);
console.log(carsNumbers);
console.log(numCunter);
console.log(longName +" "+ carsNumbers[carsStr.indexOf(longName)]);

