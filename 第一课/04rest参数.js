//rest参数  (...变量名) 用来获取函数中多余的参数，多余的数组
// rest参数只能放在参数的最后一个位置上。
function func(...sums){
    let num = 0;
    for(let i=0;i<sums.length;i++){
        num+=sums[i]
    }
    console.log(num)
}
func(1,2,3,4,5,6,7,8,9)

// rest可以用来获取函数中多余的参数，或数组
function func2(x,y,z,...arr){
    console.log(arr)
}
func2(1,2,3,4,5,6,7,8,9)