let myname:string="Suasnta"
let number:number=10
let condition:boolean=true

console.log(myname);
console.log(number);
console.log(condition);

// array --
let numbers:number[]=[24,325,456,56]
let names:string[]=["susanta","bittu","santu"]

// alternet---
let mark:Array<number>=[10,20,30,40,54]
console.log(numbers);
console.log(names); 
console.log(mark);

// tuple ------
let myuser:[number,string,boolean]=[123,"Susanta",true]
console.log(myuser);

// Any --------
let data:any=345
    data="hello_world"
console.log(data);

// union ---- | (pipe symbol)  1 ||  2
let myid:number | string
myid="abc01"
myid=101

console.log(myid);

// literal type -----
let mystatus:"success" | "pending" | "error"

mystatus=true
console.log(mystatus);

// object ----------
const user:{
    name:string,
    number:number,
    condition:boolean
}={
    name:"susanta",
    number:2989,
    condition:true
}
console.log(user);

// interface ----------same to same object (blueprint)  *****
interface allUser{
    id:number,
    name:string,
    salary:number
}

let student:allUser={
    id:112,
    name:"bittu",
    salary:23423
}
let admin:allUser={
    id:113,
    name:"santu",
    salary:23
}
console.log(student);
console.log(admin);


// function -------------







// npx tsc index.ts

// typescript => javascript => run 
// automatic surver restart-----------------------

// npm i -d tsx 

// package.json =>   
//  "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "tsx watch index.ts"
//   },