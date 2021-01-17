// 对象的扩展  
let {x,y,...z} = {x:1,y:2,b:3,c:4,d:5};
console.log(z)

// 可以用于复制对象到新的数组里面去。
let obj = {a:1,b:2,c:3};
let obj2 = {...obj}
console.log(obj2)