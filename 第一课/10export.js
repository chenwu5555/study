export class Person{
    // 属性
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 方法
    jieshao(){
        console.log(`我叫${this.name},今年${this.age}岁了`)
    }
}


