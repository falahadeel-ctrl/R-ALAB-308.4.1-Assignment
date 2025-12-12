let string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let new_array = [];

row = string.split("\n");

for (i = 0; i < row.length; i++) {
    cell_element = row[i].split(",");
    new_array.push(cell_element)
}
console.log(new_array)

// // // // // ROUGH WORK

// let string= 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// let cell1=[""];
// let cell2=[""];
// let cell3=[""];
// let cell4=[""];
// // let Newline="\n";
// Newline=0;
// for(let i=0;i<string.length;i++){
//     let text=string[i];
//      Newline++
//     if(Newline==0){
//         cell1=+text;
//     }else if(Newline==1){
//         cell2=+text;
//     }else if(Newline==2){
//         cell3=+text;
//     }else{
//         cell4=+text;
//     }
// console.log(cell1,cell2,cell3,cell4);
// }

// string.split(","|"\n")
// if(text==","){
//     concatinate array
// }
// console.log(string)

//what do we know?

// //cells are commas
// //rows are /n
// //everything else is char

//what can we infer?

// //what is the input?
// //string

//what do they want(for output and datatype)?
// //print cells useing arrays

// let string= 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
// rows= string.split("\n");
// let new_array=[]
// for (i=0; i<rows.length;i++){
//    cells=rows[i].split(",");
//    new_array.push(cells);
// }


// for(i=0;i<cell_element.length;i++){
// new_array.push(cell_element[i]);
// console.log(new_array);
// }

