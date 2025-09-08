
// document.write("hello this i js file ")
//     console.log('1')

// const { use } = require("react");

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

// let arr = [2,"hello",true]

//  let data1 = arr.filter(function(a,b,c){
//     return(typeof(a===Number))
// });

// console.log(data1)

//     let data2 = arr.filter(function(a,b,c){
//         return(typeof(a===String))
//     })

// console.log(data2)

//     let data3 = arr.filter(function(a,b,c){
//         return(typeof(a===Boolean))
//     })

// console.log(data2)


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


// let arr = [23,45,56,78,896,5,2,"hello","hi","hello","raj","can","do",true,false,true,false,true];

// function getString(i){
//     return typeof i === "string";
// }

// function getNum(i){
//     return typeof i === "number";
// }

// function getBool(i){
//     return typeof i === "boolean";
// }

// function getFun(arr, f1, f2, f3){
//     let res = [];
//     for(let i of arr)
//     {
//         if(f1(i)){
//             res.push(i);
//         }
//         if(f2(i)){
//             res.push(i);
//         }
//         if(f3(i)){
//             res.push(i);
//         }
//     }
//     return res;
// }

// console.log(getFun(arr, getString, getNum, getBool));

// //////////////////////////////


// let arr1 = [23,45,56,78,896,5,2,"hello","hi","hello","raj","can","do",true,false,true,false,true];

// function getFun(arr1, ...checks){
//     let res = [];
//     for(let i of arr1){
//         for (let check of checks) {
//             if(check(i)){
//                 res.push(i);
//                 break; // ek type match ho गया तो आगे check की जरूरत नहीं
//             }
//         }
//     }
//     return res;
// }

// // Define checks
// const isString = i => typeof i === "string";
// const isNumber = i => typeof i === "number";
// const isBoolean = i => typeof i === "boolean";

// // Call
// console.log(getFun(arr1, isString, isNumber, isBoolean));


// const result = arr1.filter(i => ["string","number","boolean"].includes(typeof i));
// console.log(result);




// let data8 = arr2.filter(function(a,b,c){
//     return typeof a === "boolean";
// })

// console.log(data8);

// let data9 = arr2.filter(function(a,b,c){
//     return typeof a === "String";
// })

// console.log(data9);

// let data10 = arr2.filter(function(a,b,c){
//     return typeof a === "Number";
// })

// console.log(data10);






// let data2 = arr.filter(a,b){
    
// }


/// this is a code of higher order function and closers and 

/// higher order function are that type of functioni which returns function and get function as a argument 

//// closers is a function that rembers and can access its lexical scope even when that function is executed 

// function outer(){
//     let user = "rajnesh"
//     function inner(){
//         console.log(user)
//     }
//     return inner
// }
// let b = outer()
// b()
// for(var i=1;i<6;i++)
// {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000*i);
// }


// for(let i=1;i<6;i++)
// {
//     setTimeout(() => {
//         console.log(i)
//     }, 10000*i);



// }


// a=5
// console.log(a)
// console.log(window)
// console.log(this)
// console.log(this==window)

// let obj ={
//     id:1,
//     name:"Rajnesh",
//     sum:()=>{
//         console.log(this)
//     }
// }
// obj.sum()
// a=5
// let obj ={
//     id:1,
//     a:10,
//     name:"Rajnesh",
//     sum:()=>{
//         console.log(this.a)
//     }
// }
// obj.sum()



// a=5
// let obj ={
//     id:1,
//     a:10,
//     name:"Rajnesh",
//     sum(){
//         console.log(this.a)
//     }
// }
// obj.sum()

// let obj = {
//     id: 1,
//     a: 10,
//     name: "Rajnesh",
//     sum: () => {
//         console.log(this.a);
//     }
// }
// console.log(obj.toString())

// let person = {
//   name: "Rajnesh"
// };

// console.log(person.toString()); 

// let arr = [2,3,234,234,2]
// console.log(Array.prototype)
// console.log(String.prototype)


// arr.map((a,b,c)=>{
//     console.log(a)
// })
// this is a actual code of map function 

// arr = [12,23,345,234,234]

// Array.prototype.rajnesh= function(callback){
//     let res =[]
//     for(let i =0;i<this.length;i++){
//         res.push(callback(this[i],i,this))

//     }
//     return res
        
// }

// let data = arr.rajnesh((a,b,c)=>{
//     return a
// })
// console.log(data)


///////////////////

/// this is a actual code of filter function 

// arr = [12,23,345,234,234]

// let data = arr.filter((a,b,c)=>{
//     return a%2==0
// })
// console.log(data)



// Array.prototype.rajnesh= function(callback){
//     let res =[]
//     for(let i=0;i<this.length;i++){

//         if(callback(this[i],i,this)){

//             res.push((this[i]))
//         }

//     }
//     return res
        
// }

// let data1 = arr.rajnesh((a,b,c)=>{
//     return a%2==1
// })
// console.log(data1)


///////////////////////    
// synchronized and asynchronized 

// function getData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     callback("Data aagaya!");
//   }, 2000);
// }

// getData((result) => {
//   console.log(result);
// });

// function get(callback){
//     console.log("data aa raha h ....")
//     setTimeout(() => {
//         callback("data aa gya ")
//     }, 4000);
// }

// get((result) => {
//     console.log(result)
// })


// function step1(fn){
//     setTimeout(() => {
//         console.log("photo choose ")
//     }, 5000);
//     setTimeout(() => {
//         console.log("filter lagao")
//     }, 4000);
//     setTimeout(() => {
//         console.log("gana lagao")
//     }, 3000);
//     setTimeout(() => {
//         console.log("post ")
//     }, 1000);
//     fn()
// }

// function step2(cb1){
//     setTimeout(() => {
//         console.log("filter lagao")
//     }, 4000);
// }


// step1((result) =>{
//     console.log(result)
// })





//////////////////////////////


// setTimeout(()=>{
//     console.log("A")
// }, 1000 )


// setTimeout(()=>{
//     console.log("D")
// }, 0 )


// setTimeout(()=>{
//     console.log("C")
// }, 4000 )

// console.log("B")


// function step1(fn){
//     setTimeout(() => {
//         console.log("Photo select")
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(() => {
//         console.log("caption")
//         fn()
//     },4000)
// }

// function step3(fn){
//     setTimeout(() => {
//         console.log("filter")
//         fn()
//     },3000)
// }

// function step4(fn){
//     setTimeout(() => {
//         console.log("Post")
//         fn()
//     },1000)
// }


//     step1(() =>{
//         step2(() => {
//             step3(() => {
//                 step4(() => {

//     })
//     })
//     })
// })

// const myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("Data mil gaya!");
//     }, 2000);

//     resolve()
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// let promise = new Promise((resolve,reject)=>{

// })

// promise.then(()=>{
//     console.log("Me Collage aagya ")
// })

// .catch(()=>{
//     console.log("Me collage nahi aaunga ")
// })

// let step1 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res()
//             console.log("photo select ho gye ")
//         }, 4000);
//     })
// }

// let step2 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res()
//             console.log("Captions ")
//         }, 3000);
//     })
// }

// let step3 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res()
//             console.log("Filter lag gya ")
//         }, 2000);
//     })
// }

// let step4 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res()
//             console.log("Song bhee lag gya ")
//         }, 3000);
//     })
// }

// let step5 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res()
//             console.log("photo Post Ho gye ...! ")
//             }, 3000);
//     })
// }

//         async  function call(){
//             await step1()
//             await step2()
//             await step3()
//             console.log("hello rajnesh")
//             await step4()
//             await step5()
//         }

//         call()


// step1().then(()=>{
//     return step2().then(()=>{
//         return step3().then(()=>{
//             return step4().then(()=>{
//                 return step5().then(()=>{
        
//                 })
        
//             })
//         })
//     })
// })


let promise = new Promise(()=>{
    console.log("helllo")
})
console.log("h1")