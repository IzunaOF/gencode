// const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const special = ['!', '@', '#', '$', '%', '&', '*', '?'];

// // if (this.numbers + this.chars > this.length) {
// //     this.numbers = (this.length % 3 * 2).toFixed();
// //     this.chars = this.length / this.numbers;
// // }
// const lettersQuantity = 7;
// const specialQuantity = 1;
// const numsQuantity = 5;

// const total = lettersQuantity + numsQuantity > 9

// const upperCase = true;
// const lettersBool = true;
// const specialBool = true;
// const numsBool = true;

// const result = [];
// function codeGenerator(){
   
// const counter = {
//     letters: 0,
//     special: 0,
//     numbers: 0
// }

// while(result.length< 9){ 
//     const random = Math.floor(Math.random() * 3);
//     const number = Math.floor(Math.random() * 10)
//     const alfabetIndex = Math.ceil(Math.random() * alfabet.length -1);
//     const specialIndex = Math.floor(Math.random() * special.length);


//     if(random <= 0 && counter.letters < lettersQuantity && lettersBool){
//         const randomCase = Math.floor(Math.random() * 2)
//         if(upperCase && randomCase === 1 ) result.push(alfabet[alfabetIndex].toUpperCase())
//         else result.push(alfabet[alfabetIndex]);
//         counter.letters++
//     }
//     if((random <= 1 && random >0) && counter.numbers < numsQuantity && numsBool){
//         result.push(number);
//         counter.numbers++
//     }
//     if((random <= 2 && random >1) && counter.special < specialQuantity && specialBool){
//         result.push(special[specialIndex]);
//         counter.special++
//     }
// }
// }

// console.log(codeGenerator());
// console.log(result);