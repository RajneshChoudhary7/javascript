
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

// arr = [1,2,3,4,5,34,234,4,567,345,9]



// console.log(null+null) /// 0 
// console.log(undefined+undefined) //// NaN

// console.log(null+undefined) /// NaN

// let obj = {
//     id:1,
//     name:"Rajnesh",
//     sum: function(){
//         console.log("hehehe")
//     }
// }


// console.log(obj.id)
// obj.sum()
// console.log(obj.sum())


// const nums = [10,5,2,100]
// nums.sort();
// console.log(nums)

// console.log(a)
//  a=5


// arrr = [ "Apple" , "banana" , "cat"]


// let data = arrr.sort((a,b) =>{
//     return a-b
// })

// console.log(data)


// let data = arr.sort((a,b) =>{
//     return b-a
// })

// console.log(data)



// let data1 = arr.sort((a,b) =>{
//     return a-b
// })

// console.log(data1)




// let  sum = arr.reduce((a,b,c,d) =>{
//     return a+b;
// })


// console.log(sum)



// let  sum1 = arr.reduce((a,b,c,d) =>{
//     return a+b;
// },1)

// console.log(sum1)


// let arr1 = [ 1,2,3,4,5,64,3,5,2,5,2,34]


// let s = arr1.filter(function(a,b,c){
//     return(a>2 && a%2==0)
// })

// console.log(s)



// let ss = s.reduce((a,b,c,d) =>{
//     return a+b
// })

// console.log(ss)

// let data1 = arr.filter(function(a,b,c){
//     return(a>2 && a%2==0)
// })

// let single = arr.find(function(a,b,c){
//     return(a==3)
// })

// console.log(single)


// let data = data1.filter(function(a,b,c){
//     return(a%2==0)
// })

// console.log(data1)

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


// var a=5
// function   sum (){
//     var b =10
//     console.log(a)
// }

// sum()


// console.log(c)
// const c=2


// console.log(sum())
// var sum = () =>{
//     console.log("hello")
// }


// type of function in js 

// 1 function declaration / Named function 

// function greet(){
//     console.log("hello world ")
// }
// greet()

// 2 function Expression 

// const greet = function(){
//     console.log("hello")
// }
// greet();


// 3 arrow function 

// const greet = () => {
//     console.log("hello world ")
// }
// greet();



// anonymous function 

// setTimeout(function() {
//     console.log("hello world")
// }, 2000);

// let sum = function(){
//     console.log("hehe")
// }
// sum()

// function sum1(){
//     console.log('hii')
// }
// sum1()

// var b=10
// {
//     var b =90   
// }

//  console.log(b)


// function raj(){
//     var a= 5
// }
// console.log(a)

// let arr = [1,3,4,5,6,7]
// arr.push(12); 
// console.log(arr)
// arr.pop();
// console.log(arr)

// arr.shift()    //// delete element in front 
// console.log(arr)
// arr.unshift(23)  //// add element in front 
// console.log(arr)

// function outer(){
//     function inner(){
//         function orinner(){
//             console.log("inner print")
//         }
//         return orinner
//     }
//     return inner
// }

// var a = outer()
// var b = a()
// b()

// console.log(typeof(outer))

// console.log(typeof(typeof(true)))

let arr = [2,"hello",true]

 let data1 = arr.filter(function(a,b,c){
    return(typeof(a===Number))
});

console.log(data1)

    let data2 = arr.filter(function(a,b,c){
        return(typeof(a===String))
    })

console.log(data2)

    let data3 = arr.filter(function(a,b,c){
        return(typeof(a===Boolean))
    })

console.log(data2)


////////////////////////////////////////////


// let arr1 = [2,"hello",true];    

// let data4 = arr1.find(function(a){
//     return typeof a === "string";
// })
// console.log(data4);   // "hello"

// let data5 = arr1.find(function(a){
//     return typeof a === "number";
// })
// console.log(data5);   // 2

// let data6 = arr1.find(function(a){
//     return typeof a === "boolean";
// })
// console.log(data6);   // true


////////////////////

// let arr1 = [2,"hello",true,false,true,false,true]; 


// let data7 = arr1.filter(function(a,b,c){
//     return typeof a === "boolean";
// })
// console.log(a); 


let arr2 = [23,45,56,78,896,5,2,"hello","hi","hello","raj","can","do",true,false,true,false,true]; 

let data8 = arr2.filter(function(a,b,c){
    return typeof a === "boolean";
})

console.log(data8);

let data9 = arr2.filter(function(a,b,c){
    return typeof a === "String";
})

console.log(data9);

let data10 = arr2.filter(function(a,b,c){
    return typeof a === "Number";
})

console.log(data10);

num





// let data2 = arr.filter(a,b){
    
// }





