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

// for(let i=1;i<new_array1.length;i++){
//     let object = {};
//     object_array.push(header[i]);
//     for(let z=0; z<new_array1.length;z++){
// object_array.push(object);
//     }

// }

console.log(header)



// let table ={}

// for(let string[i]<0;string[i] === "\n";i++){
//   console.log(string+=table.keys());
// }

