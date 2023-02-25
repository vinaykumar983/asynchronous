console.log("Hello world")
//Asynchronous javaScript

//1. old method of making api calls

const request=new XMLHttpRequest();

request.open('GET',"https://dummyjson.com/users")

request.send();

request.addEventListener('load',function(){
    console.log(JSON.parse(request.responseText))
})


//using Promises

fetch("https://dummyjson.com/users") //it return a promise which is consumed by then method
.then((response)=>{
    return response.json();   //this method converts json data in to objects and returns another promise 
})
.then((data)=>{
    console.log(data);
})

//using async and await

const func=async function(){
    const response=await fetch("https://dummyjson.com/users");

    const data=await response.json();

    console.log(data)
}

func();



//setTimeout

setTimeout(()=>{
    console.log("This is setTime out")
},10000)