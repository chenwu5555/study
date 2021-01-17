// 常见的Es5中的通过构造函数来实现

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.jieshao = function(){
    console.log("我叫"+this.name+",今年"+this.age+"岁了.")
}
let zhangsan = new Person("蜡笔小新",25);
let lisi = new Person("野原新之助",25)
console.log(zhangsan.jieshao() === lisi.jieshao())

class Person2 {
    //属性
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 方法
    jieshao2(){
        console.log("我叫"+this.name+",今年"+this.age+"岁了.")
    }
}
let wangwu = new Person2("王五",26);
console.log(wangwu)
wangwu.jieshao2()