let username = "sheshadri"
console.log(username)

let a:number= 12
let b:string = '6'
let c:number = 2

console.log(a/c)

function sum(a:number,b:string):string{
  return a+b
}


type obj = {
  name?: (string|number),
  age?: number,
  object?: obj,
  city?: string
}

let person1:obj ={
  name:"sheshu",
  object:{},
  age:34,
  city: "banglore"
}


let arr = ['sh',45,true]
arr.push("sheshu")

let arr2:number[][] = [[],[],[]]
arr2 = [[2]]
console.log(arr2)
console.log(sum(a,b))
console.log("hi")




let sumall = function(a:number,b:number,c:number):number{
  return a + b + c
}

console.log(sumall(5,3,4))

let total = (...nums:number[]):number => {
  return nums.reduce((prev,curr)=> prev+ curr)
}

console.log(total(1,2,5,6))