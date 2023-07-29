// const arrss = [1,2,3]
// const arr = arrss.map((value)=>{
//     return value * 2;
// })

// console.log(arr);
// ?????
/////////////////////////////////////
// Using maps
let array = [{
    name: "Rishav",
    age: 21
},{
    name: "Rahul",
    age: 24
},{
    name: "Raman",
    age: 28
}]

// let newArray = [];
// for(let i =0; i< array.length; i++){
//     if(array[i].age>25){
//         newArray.push({
//             name: array[i].name,
//             age: array[i].age,
//             isAllowed: false
//         })
//     }else{
//         newArray.push({
//             name: array[i].name,
//             age: array[i].age,
//             isAllowed: true
//         })
//     }
// }
// console.log(newArray);


let newArray = array.map((value)=>{
    if(value.age){
        return {
            name: value.name,
            age: value.age,
            isAllowed: false
        }
    }else{
        return {
            name: value.name,
            age: value.age,
            isAllowed: true
        }
    }
})