// 箭头函数
// 在es6中允许用箭头=>来定义函数，只能是匿名函数

// 1.如果箭头函数中不需要参数或者有多个参数时，就使用()来代替参数部分，如果只有一个参数，那么就可以省略()。
// let  func = function(x){
//     return x
// }
// console.log(func(12345))
// let func=(x)=>{
//     return x
// }
let func=x=>x
console.log(func(12345))

// 2.如果箭头函数的代码块部分多于一条语句时，需要用{}起来，并且使用return语句返回，如果代码块部分为一条语句时，可以省略{}
// let func1 = function(x,y){
//     return x+y
// }
let func1 = (x,y)=>x+y
console.log(func1(1,5))

// 当返回的值为对象时，{}会被当成代码块，必须在对象外面加上()。
// let func3 = function({name,age}){
//     console.log(`他是${name},今年${age}岁`)
// }
let func3 = ({name,age})=> console.log(`他是${name},今年${age}岁`);
func3({name:"薛之谦",age:45});


