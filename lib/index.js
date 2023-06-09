"use strict";
// Function
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// type add = (a: number, b: number) => number;
// let addition: add = (a, b) => {
//   return a + b;
// };
// console.log(addition( 2 , 3))
/* @type  Structural Design
@type
*/
// type dimension2D = {
//   x: number;
//   y: number;
// };
// type dimension3D = {
//   x: number;
//   y: number;
//   z: number;
// };
// let value1:dimension2D = {
//     x:1,
//     y:2
// }
// let value2:dimension3D ={
//     x:1,
//     y:2,
//     z:3
// }
// function val1 (value2:dimension3D){
//     console.log(value2)
// }
// val1(value1)
// @ts-check Class
// class Animal {
//   private name: string;
//   constructor(name: string) {
//     console.log(name);
//     this.name = name;
//   }
//  public bark() {
//     return this.name;
//   }
// }
// const dog = new Animal("Jimmy");
// class Cat extends Animal
// {
//     sound (){
//         return "Sound"
//     }
// }
// const val = new Cat("test")
// val.bark()
// @Generics
// class Queue<T> {
//   data = [];
//   push(item: T) {
//      this.data.push(item);
//   }
//   pop(): T {
//     return this.data.shift();
//   }
// }
// const action = new Queue<number>();
// console.log(action.push(1));
// console.log(action.push("test"));
// console.log(action.pop().toPrecision(1));
// console.log(action.pop().toPrecision(1));
// const toArray = (x: number, y: number, z: number) => {
//   return [x, y, z];
// };
// let arr = toArray(1, 2, 3);
// console.log(arr);
//@ Generics
// const toArray = <T>(x: T, y: T, z: T) => {
//     return [x, y, z];
//   };
//   let arr = toArray<string>("x", "x", "x");
//   console.log(arr);
// const toArray = <X ,Y , Z>(x: X, y: Y, z: Z) => {
//     return [x, y, z];
//   };
//   let arr = toArray<string , number , boolean>("x", true , 1);
//   console.log(arr);
/// @ UNKOWn
// let test :unknown
// test = "123"
// if (typeof test == "string")
// {
// test.trim()
// }
// const test = (data:unknown) =>{
//     if(typeof data === "string")
//     {
//         data.trim()
//     }
// }
// test(123)
// console.log(process.env.USER)
// declare const process:any
// const main = () => {
//   setTimeout(() => {
//     console.log("1s")
//     return setTimeout(() => {
//         console.log("2s")
//       return setTimeout(() => {
//         console.log("3s")
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// main()
// const delay = 
// const update = async (time:number , value:string)=>{
//     setTimeout(()=>{
//         console.log(value)
//     }, time) 
//     }
//     update(1000 , "1s")
//     update(2000 , "2s")
//     update(3000 , "3s")
/**
 * @async @await
 */
const delay = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(res => setTimeout(res, ms));
});
const timeout = () => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    console.log("1s");
    yield delay(1000);
    console.log("2s");
    yield delay(1000);
    console.log("3s");
});
timeout();
