// // console.log("Tet")

// class Dog {
//      #name:string
//     constructor(name:string){
//         this.#name = name
//     }
//     display(){
//         console.log("Name", this.#name)
//     }
// }
//  class Animal extends Dog {
//     test(){
//         this.#name
//     }
//  }

// class Stack<T> {
//   arr:T[] = [];
//   push(value: T) { this.arr.push(value)}

//   pop(): T {
//     return this.arr.pop()!;
//   }
// }
// const stack = new Stack<Number>()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// console.log(stack.arr)

// let value:any
// let value1:unknown

// value = "Ajay"
// value1 = "pavi"
// value.trim()
// if(typeof value1 === "string"){
//     value1.trim()
// }

/**
 * @TypeAsssertion
 */

// let calcuate =  add("Aj" , "ay")
// function add (a:string  , b:string):string{
//  return a + b
// }
// console.log((calcuate as any).trim())

/**
 * @Generics
 */
/**
 * @Defintions The T is similar to an variable it accepts any type of DataType. No Need of defining 2 new classes just defining the type of the class fixes the problem.
 */
//Exmaple 1
// class Stack<T>{
//     arr:T[] = []
//     push(val:T)
//     {
//        return this.arr.push(val);
//     }

//     pop():T{
//         return this.arr.pop()!;
//     }

// }
// const stackOperation = new Stack<Number>()
// stackOperation.push(5)
// console.log(stackOperation.arr)
// stackOperation.push(6)
// console.log(stackOperation.arr)
// stackOperation.pop()
// console.log(stackOperation.arr)

// Example 2
// class Stack<T> {
//   #arr: T[] = [];
//   push(value:T)
//   {
//    return this.#arr.push(value)
//   }
//   pop():T
//   {
//     console.log(this.#arr)
//    return this.#arr.pop()
//   }

// }

// const operation = new Stack<String>();
// operation.push("Ajay")
// operation.pop()
// operation.pop()
// import { palindrome } from "../utilss";
// console.log(palindrome<String>("Ajay"))
// console.log(palindrome<Number>(1331))
/**
 * @Promise
 */

// let interval = (sec: number) =>
//   new Promise((res) => {
//     setTimeout(res, sec);
//   });

// async function timeout() {
//   await interval(1000);
//   console.log("1s");
//   await interval(2000);
//   console.log("2s");
//   await interval(1000);
//   console.log("3s");
//   await interval(2000);
//   console.log("4s");
// }
// timeout();
/**
 * @typeof
 */

// const person = {
//     name:"Ajay",
//     role:"Software Enginner"
// }

// let modifier:typeof person = {
//     name:person.name,
//     role:person.role
// }

// const response = {
//   Name: "Ajay",
//   Role: "Software Enginner",
//   Age: 21,
// };
// type responsed = typeof response;
// function join(response: responsed) {

// }

/**
 * @LookupTypes
 */

// type Employees = {
//   name: string;
//   age: number;
//   skills: {
//     technical: {
//       code: string;
//       problemSolving: Boolean;
//     }[];
//   };
//   address: string;
// };

// function Name(name: Employees["name"]): Employees["skills"] {
//   return {
//     technical: [{ code: "Javascript", problemSolving: true }],
//   };
// }
// type Employee = {
//   name: string;
//   age: number;
//   skills: {
//     technical: {
//       code: string;
//       problemSolving: boolean;
//     }[];
//   };
//   address: string;
// };
// const emp = Name("John");
// console.log(emp);
// function getSkillsByName(name: string): Employee["skills"] {
//   return {
//     technical: [
//       { code: "Javascript", problemSolving: true },
//       // You can add more skills here if needed
//     ],
//   };
// }

// // Example usage:
// const employeeSkills = getSkillsByName("John");
// console.log(employeeSkills);

/**
 * @keyOf
 */

// type personObject = {
//   name: string;
//   age: number;
//   role: string;
// };

// const Person: personObject = {
//   name: "Ajay",
//   age: 20,
//   role: "Software Engineer",
// };
// function getPerson<Object , Value extends keyof Object>(object:Object, value:Value) {

//     return object[value]
// }

// console.log(getPerson(Person, "age"));

// function setPerson<Object,Key extends keyof Object,Value extends Object[Key] >(obj:Object,key:Key,value:Value):Object[Key] {
//   return obj[key] = value
// }

// console.log(setPerson(Person,"name","Cah"))

/**
 * @ConditonalTypes
 */

// type isNumber<T> =
//  T extends string ? string :  T extends number ? number : null

// function typeChecker<T>(value:T):isNumber<T>{
//   return typeof value === "number" ? "number" as isNumber<T> : typeof value === "string" ? "string" as isNumber<T>  : null as isNumber<T>;
// }
// const invokeNumber = typeChecker(123)
// const invokeNumber1 = typeChecker("Test")
// const invoke = typeChecker(true)

// function returnType<T>(val:T):T
// {
// return typeof val === "string" ? "string" :1
// }
// const type:Number = returnType<Number>(123)
// const type1:String = returnType<String>("Ajay")
// console.log(type)
// console.log(type1)

/**
 * @returnType_TypeScript
 */

// function employee() {
//   return {
//     name: "Ajay",
//     age: 20,
//     role: "Software Enginner",
//   };
// }

// function createFunction(val:ReturnType<typeof employee>)
// {

// }

// let create = createFunction({
//     name: "Ajay",
//     age: 20,
//     role: "Software Enginner",
//   })

/**
 * @MappedType
 */

// type point = {
//   x: number;
//   y: number;
//   z: number;
// };
// type center<T> = {
//   readonly [obj in keyof T]: T[obj];
// };

// const Center: center<point> = {
//   x: 0,
//   y: 0,
//   z: 0,
// };
// Center.x = 1;

/***
 * @Partial_in_Typescript
 */
// class Square<T>{
//     current
// constructor( current:T){
//     this.current = current
// }
// update(val:Partial<T>){

// return this.current = {...this.current , ...val}
// }
// }
// let geometry = new Square({x:1 , y:1})

// console.log(geometry.update({y:5}))

/**
 * @Record
 */

// type role = "Admin" | "User"

// let obj: Record<role , string[]> = {
//     "Admin":["Ajay"],
//     "User":["Ajay"]
// }

// let data:string[] = obj["Admin"]
// console.log(data)

// type pages = Record<"CustomerList"|"CustomerDetail"|"Map"|"Key",{
//     id:number,
//     route:string,
// }>

// const Pages:pages ={
//     CustomerList:{
//         id:1,
//         route:"/CustomerList"
//     },
//     CustomerDetail:{
//         id:1,
//         route:"/CustomerList"
//     },
//     Map:{
//         id:1,
//         route:"/Map"
//     },
//     Key:{
//         id:1,
//         route:"/Map"
//     }

/**
 * @autoComplete
 */

// type responsive = 'small' | 'medium' | 'large' | (string & {})
// let value:responsive = 'small'
// let val1:responsive = 'medium'
// let val2:responsive = 'large'

/**
 * @Satisfies
 */

// type colour = "red" | "green" | "yellow" | "blue"
// type RGB = [r:number, g:number, b:number]
// type exact = colour | RGB

// type obj = Record<string,exact>

// const house:obj ={
// "ajay":"red",
// "money":"Pink",
// "cash":[2 , 3 , 4]
// }
// const [r , g , b] = house.cash
// console.log(r)

/**
 * @thistype
 */

// type math = {
//   double: () => void;
//   half: () => void;
// };

// export const calculate: math & ThisType<{ value: number }> = {
//   double() {
//     return (this.value = this.value * 2);
//   },
//   half() {
//     return (this.value /= 2);
//   },
// };
// const obj = {
//   value: 1,
//   ...calculate,
// };
// console.log(obj.double());
// console.log(obj.half());

// type StateDescription<D , M> = {
//    data:D;
//    methods:M & ThisType<D & M>
// }

// function createState<D , M>(desc:StateDescription<D , M> ): D & M{
// return{...desc.data , ...desc.methods}
// }

// let state = createState({
//     data:{x:0 , y:0},
//     methods:
//     {
//         moveBy(dx:number , dy:number){
//             this.x = this.x + dx
//             this.y = this.y + dy

//         }
//     }
// })
// state.x = 10;
// state.y = 20;

// console.log(state)

/**
 * @asyncawait
 */

// async function APICall() {
//   const exmaple1: Promise<string> = new Promise((res) => res("Ajay"));

//   const exmaple2: Promise<Promise<Promise<string>>> = new Promise<Promise<Promise<string>>>((res) =>
//     res(new Promise<Promise<string>>((res) => res(new Promise<string>((res) => res("TEST")))))
//   );

//   let data1 = await exmaple1;
//   console.log(data1);
//   let data2 = await exmaple2;
//   console.log(data2)
// }
// APICall();

/**
 * @StingManipulation
 */

type literal<T extends string> = `Ajay ${Capitalize<T>}`
type role = "software Engineer"

type setName = literal<role>