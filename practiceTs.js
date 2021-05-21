"use strict";
// interface Person {
//     firstName: string;
//     secondName: number;
// }
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + person.secondName
// }
// let user = { firstName: 'xiaoLi', secondName: 22 }
// document.body.innerHTML = greeter(user)
//方式1
// let a:number=null;
//方式2
// let a:number=undefind;
//方式3
// let a: null;
// let b: number = a;
// a = void
// b = 123
//方式4
// let a: undefined;
// a = null;
// let b: number = a;
// b = void
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// console.log(dad,'dad')
// let foo:any = {
//     bar: number,
// }
// let foo: any = {};
// for (let i = 0; i < 100; i++) {
//     foo[String(i)] = i;
// }
// ---------
// interface MyInterface {
//     // new () : MyInterface;
//     name: string;
// }
// class Bar implements MyInterface {
//     constructor(public name: string) {
//         this.name = name;
//     }
// }
// class Foo implements MyInterface {
//     constructor(public name: string) {
//         // this.name = name;
//         // return this
//     }
// }
// function myfn(Klass: MyInterface, name: string) {
//     return new Klass(name);
// }
// myfn(Bar, 'xiaoLi');
// myfn(Foo, 'xiaoHua');
// interface Person {
//     name: string;
//     age: number;
//     location: string;
//   }
//   type K1 = keyof Person; // "name" | "age" | "location"
//   type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
//   type K3 = keyof { [x: string]: Person };  // string | number
// function fn(value: number): string {
//     return String(value);
// }
// const foo: any = fn;
// const foo:Map<string,number> = new Map();
// foo.set('bar', 1);
// declare class Foo {
//     a:string;
// }
// module.exports = Foo;
// module.exports.Bar = 1;
// console.log(getProperty(x, "a"),'ss')
// implements 实现的意思
// interface MyInterface {
//     // calssName: string;
//     namer: string;
//     greeter(str: string): void;
// }
// class Bar implements MyInterface {
//     namer: string;
//     constructor(public name: string) {
//         this.namer = name;
//     }
//     greeter() {
//         // return 'hello' + this.namer
//         console.log(this.namer,'Bar class')
//     }
// }
// class Foo implements MyInterface {
//     namer: string;
//     constructor(public name: string) {
//         this.namer = name;
//     }
//     greeter() {
//         return 'hello' + this.namer
//     }
// }
// let fun = new Bar('xiaoLI');
// console.log(fun)
// function myfn(Klass: MyInterface, name: string): string {
//     return new Klass(name);
// }
// myfn(Bar, 'xiaoLi');
// myfn(Foo, 'xiaoHua');
// 定义数组两种方式
// let arr:number[] = [1,2,3]
// let arr2:Array<string> = ['11','22']
// // 接口类型约束类型
// interface UserArr {
//     [index:number]:string;
// }
// let arr3:UserArr = ['1','2']
// interface UserObj {
//     [index:string]:string;
// }
// let arr4:UserObj = {name:'22',age:'222',lo:'122'}
// interface Animal {
//     eat():void;
// }
// interface Person extends Animal {
//     work():void;
// }
// class Program {
//     public name:string;
//     constructor(name: string){
//         this.name = name;
//     }
//     codings(code:string){
//         console.log(this.name + code)
//     }
// }
// class Web extends Program implements Person {
//     // public name:string;
//     constructor(name: string){
//         super(name)
//         // this.name = name;
//     }
//     eat(){
//         console.log(this.name,'吃东西')
//     }
//     work(){
//         console.log(this.name,'写代码')
//     }
// }
// // console.log(new Web('xiaoHua'))
// let w = new Web('xiaoHua');
// // w.work();
// // w.eat()
// w.codings('oo')
//泛型写法 用<T>
function getData(value) {
    return value;
}
//调用的时候定义参数的类型
getData('123');
