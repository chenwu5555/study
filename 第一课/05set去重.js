//set数据结构
// 在es6中新的数据结构set，类似于数组，但是成员都是唯一的，没有重复的值。
let arr1 = [1,2,3,4,3,2,42,4,4,3,3,4];
let arr2 = [...new Set(arr1)];
console.log(arr2)

// Array.from() 也可以将set结构转换为数组结构
let arr3 = Array.from(new Set(arr1))
console.log(arr3)

// 字符串去重
let str = "hello";
let str2 = [...new Set(str)];
console.log(str2.join(''));

// for (of)方法
let arr5 = [1,2,3,4,5];
for(let item of arr5){
    console.log(item)
}
//   遍历数组