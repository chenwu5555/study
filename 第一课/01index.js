var afunc = [];
for(let i=0;i<10;i++){
   afunc[i]=function(){
       console.log(i)
   }
}
afunc[2]()

// for(var i=0;i<10;i++){
//    setTimeout(function(){
//     console.log(i)
//    },2000)
// }
