// 扩展运算符 ...相当于rest参数的逆运算符，将一个数组转换为用逗号隔开的参数序列
// 对于函数的调用
function push(index,...item){
    arr1.push(...item)
}
let arr1 = []
push(arr1,1,2,3,4,5,6,7,8,9,)
console.log(arr1)

let func1 = (x,y)=>x+y;
let arr2 = [15,10];
console.log(func1(...arr2))

//复制数组
let arr3 = [1,2,3,4,5];
let arr4 =[...arr3];
console.log(arr4)

// 合并数组
let arr5 = [...arr3,...arr4];
console.log(arr5)

// 字符串去重
let str = "hello";
console.log(Array.from(new Set([...str])));