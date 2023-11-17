// type Foods={
//     [key:string]:number | string;
// };

// const fruits:Foods={
//     apple:21,
//     orange:11,
//     banana:33
// };

// const icefoods:Foods={
//     iceCream:12,
//     fish:22
// }; 

// function iden(arg){
//     console.log(arg)};
//     let output1=iden("string");
//     let output2=iden(12);

const student = {
  name: "John",
  age: 25,
  numberG:12
};

// type Student = {
//   name: string;
//   age: number;
// };

function getProperty<T,K extends keyof T>(obj: T, key: K):T[K] {
  return obj[key];
}

let studentName = getProperty(student, "name");
console.log(studentName); // "John"

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined
import {fish} from "./12";
console.log(fish)