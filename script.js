// DAY - 04 - TASK
// Quuestion 1 To compare two json have the same properties without order in javascript.


let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

let check = 1;

if(Object.keys(obj1).length==Object.keys(obj2).length)
{
  for(let key in obj1) { 
      if(obj1[key] == obj2[key]) {
          continue;
      }
      else {
          check = 0;
          break;
      }
  }
}
else {
  check = 0;
}

if(check == 1)
{
    console.log("The Objects are equal");

}else{
    console.log("The Objects are not equal");
}
// Queation 2 and 3 

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {

var result = JSON.parse(req.response);
//console.log(result);


let l = result.length;
for(let i=0;i<l;i++)
{
console.log("Country : ",result[i].name.official,"\t","Region :", result[i].region," \t","Sub-Region :",result[i].subregion,"\t ","Population :",result[i].population);
console.log("Flag :",result[i].flags.png);
}


};