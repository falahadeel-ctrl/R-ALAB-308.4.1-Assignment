let string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let new_array1 = [];
let object_array = [];
row = string.split("\n");

for (i = 0; i < row.length; i++) {
    cell_element = row[i].split(",");
    new_array1.push(cell_element)
}
// console.log(new_array1)
function Lcase (element){
    return element.toLowerCase();
}

header = new_array1[0].map(Lcase);

for(let i=1;i<new_array1.length;i++){
    let object = {};
    for(let z=1; z<header.length;z++){
 object[header[z]]=new_array1[i][z];
    }
object_array.push(object);
}
console.log(object_array)



// // // // // ROUGH WORK

// let table ={}

// for(let string[i]<0;string[i] === "\n";i++){
//   console.log(string+=table.keys());
// }

// const students = [`dfdd`,`dsesv`,`sdvdsvd`,`dcsdd`];

// function ucase (){
// return toUpperCase();
// }

// let aa = students.map(ucase);
// console.log(aa);

// let space = {
//     user: [1,2,3] ,
//     df: [4,5,6]
// }

// space.user= 4
// console.log(space.user)
