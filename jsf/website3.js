let name,avg,cityArray=[],populationArray=[];
name =prompt("entr a name")
while (name.length<4){
  name =prompt("entr a name agine")
}
for (i=0;i<5;i++){
  cityArray[i] = prompt("enter city name")
  populationArray[i] =parseInt(prompt("enter the number of pipole"))
}
function mixA (city,population){
  let numP = 0,sum=0,indx=0; 
  for(i in city){
   if (population[i]>numP){
    numP = population[i]
    indx=i
   } 
   sum+=population[i]
}
console.log("your name is: " + name)
console.log("the most city number is:  " + city[indx] + ". number of pipole is: "+ numP)
console.log("the avg number of pepole is: " + sum/5)
}
mixA (cityArray,populationArray)