
// document.write("hello this i js file ")
//     console.log('1')

//     let arr =  []
//     let arr1 = []
//     console.log(arr==arr)
// console.log([1, 2] + [3, 4]);


// sum()

// function sum(){
//     console.log("normal function ")
// }
// let sum1 = ()=>{
//     console.log("hehehe");
// }

// let a=5
// let b=4
// let c=1
// //  let d = ((c++)-(b++)+(b++)+(--a)+(a++))
//  console.log(d)

arr = [1,2,3,4,5,6,7]


let data1 = arr.filter(function(a,b,c){
    return(a>2 && a%2==0)
})

let single = arr.find(function(a,b,c){
    return(a==3)
})

console.log(single)


let data = data1.filter(function(a,b,c){
    return(a%2==0)
})

console.log(data1)

//  let data = arr.map(function(a,b,c){
//     console.log(a*3)
// });

// console.log(data)


// arr.forEach(function(a,b,c) {
//     console.log(a)
// });

// arr.forEach(function(a,b,c) {
//     console.log(b)
// });

// arr.forEach(function(a,b,c) {
//     console.log(c)
// });

// for(let i of arr){
//     console.log(i)
// }

// for(let i of arr){
//     console.log(arr)
// }

//  for(let i in arr){
//     console.log(i)
//  }
 
//  for(let i in arr){
//     console.log(arr[i])
//  }


