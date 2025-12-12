
let string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let new_array1 = [];
let object_array = [];
row = string.split("\n");

for (i = 0; i < row.length; i++) {
    cell_element = row[i].split(",");
    new_array1.push(cell_element)
}
function Lcase(element) {
    return element.toLowerCase();
}

header = new_array1[0].map(Lcase);

for (let i = 1; i < new_array1.length; i++) {
    let object = {};
    for (let z = 0; z < header.length; z++) {
        object[header[z]] = new_array1[i][z];
    }
    object_array.push(object);
}
object_array.pop()

object_array.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })

object_array.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

let unpacking = ...object_array"
console.log(object_array)