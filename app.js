console.log("Hello world")

// function x(){
//     console.log("hello ji")
// }


// function y(abc){
//     abc()
// }

// y(x)


// const radius=[1,2,3,4]

// function area(radius){
//     const arr=[]
//     for(let i=0;)

// }


// const radius = [1, 2, 3, 4];
// const radiusArr = [10, 2, 30, 4];
// // const calculateArea = function (radius) {
//   function hello (radius) {
//         const output = [];
//         for (let i = 0; i < radius.length; i++) {
//           output.push(Math.PI * radius[i] * radius[i]);
//         }
//         return output;
//       };
// console.log(hello(radius));

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }

// const calculate = function(radiusArr, operation) {
//     const output = [];
//     for (let i = 0; i < radiusArr.length; i++) {
//         output.push(operation(radiusArr[i]));
//     }
//     return output;
// }
// console.log(calculate(radiusArr, area));

// console.log(x)
// var x=10;
// console.log(x)
// let x=10;
// console.log(x())

// var x=function (){
// console.log("hellooooo")
// }
// x()

// var x=10;
// console.log(x)
// // let x=10;
// {
//     var x=100;  
//     console.log(x)
// }

// console.log(x)

// var x=10;
// console.log(x)
// // let x=10;
// {
//     let x=100;  
//     console.log(x)
// }

// console.log(x)

// function y(){
//     var a=10;
//     function x(){
//         console.log(a)
//     }
//     x()
// }
// y()

// function x(){
//     var i=1
//     setTimeout(function x(){
//         console.log(i)
//         console.log("Under Timeout")
//     },5000)
//     console.log("Under Loop")
// }

// console.log("Calling b func")
// x()
// console.log("Calling a func")

// function callEventListnet(){
//     var count=0;
// count=100;
// document.getElementById("onclick").addEventListener("click",function(){
//     console.log("Hello World", ++count)
// } )
// }

// callEventListnet()

// const arr=[1,2,3,4,5,6,7,8,9]
// function doubly(x){
//     return Math.PI *x*x
// }
// const output=arr.map(doubly)
// console.log(output)

// const output=arr.map(function doubly(x){
//     return Math.PI *x*x
// })

// const output=arr.map((x)=> Math.PI *x*x);


// console.log(output)

// const binary = arr.map(x => x.toString(2));
// console.log(binary); // ['101', '1', '11', '10', '110']

// const sum = arr.reduce((acc, current) => acc + current, 0);
// console.log(sum); // 17

// const max = arr.reduce((max, current) => current > max ? current : max, 0);
// console.log(max); // 6

// const heading=document.createElement("h1");
// heading.innerHTML="Hello Creating A Javascrit";
// const root=document.getElementById("root");

// root.appendChild(heading);

const heading=React.createElement("h1",{id: "hello"},"Hello World in the react");
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);