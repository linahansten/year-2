let k = prompt("Write something")

function checkNumber() {
    if(!isNaN(k)) {
        k = Number(k)
        if (Number.isInteger(k)) {
            console.log("its integer")
        } else {
            console.log( "its a float value")
        }
    } else {
        console.log("its a string")
    }
}
checkNumber()

//------------------------------------------------------------

// let input = prompt("Write smth")
// console.log(input, "is a" + getTypeFromString(input))

// function getTypeFromString(str){

//     const intNum = parseInt(str)
//     if (isNaN(intNum)){
//         return "string"
//     }

//     const floatNum = parseFloat(str)
//     if(intNum === floatNum){
//         return "int"
//     }
//      return "float"
// }

//----------------------------------------------

// let input = prompt("Write smth")

// let num = parseInt(input)

// if(isNaN(num)){
//     console.log(input,"its a string")
// }
// else{
//     let num2 = parseFloat(input)
//     if (num === num2){
//         console.log(num,"its integer")
//     }else{
//         console.log(num2, "its a float value")
//     }
// }

//-------------------------------------------------------------

// function ask() {
//     let answer = prompt('type')
//     let nmr = parseFloat(answer)
  
//     if (isNaN(nmr)) {
//       console.log('this a string')
//     } else console.log('this a number')
//   }
//   ask()

//--------------------------------------------------------------