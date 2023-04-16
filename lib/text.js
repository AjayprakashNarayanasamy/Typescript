"use strict";
// Function
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
// let hello = load();
// const trimmed = (hello as string).trim()
// function load() {
// return "123"
// }
/**
 *
 * @value
 *
 *
 */
// const palindrome = (value:string):boolean =>{
// return value === value.split("").reverse().join("")
// }
// console.log(palindrome("madam"))
// console.log(palindrome("Madan"))
console.log("Logger", process.env.USER);
