// Remove the last element from the sorted array.
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


// 2. Insert the following object at index 1:
// // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
object_array.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })


// 3. Add the following object to the end of the array:
// // { id: "7", name: "Bilbo", occupation: "None", age: "111" }
object_array.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(object_array)


// Finally, use the values of each object within the array and the array’s length property to calculate the 
// average age of the group. This calculation should be accomplished using a loop.
let age = 0;
for (i = 0; i < object_array.length; i++) {
    age += object_array[i].age * 1;
}
let avg = age / object_array.length;
console.log(`average age is ${avg}`);