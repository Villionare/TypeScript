// let a1:number = 34;
// let a2:number = 64;

// function newOne1(a1:number,a2:number){
//     console.log(`addition of two numbers will be ${a1+ a2}`);   
// }

// newOne1(a1,a2);

let a:number = 3_4_3;
console.log(a);

let b:bigint = 334543534_44554645_34353534n;
console.log(b);

let sent:string = "this is a string";
console.log(sent);

let arr:number[] = [2,4,5,9];
console.log(arr);


let char_arr:string[] = ['this','is','a','string array'];
console.log(char_arr);

//null and undefined types
let first:undefined = undefined;
console.log(first);

let second:null = null;
console.log(second);

//objects
let firstObj:object = {
    name: 'andy rubin',
    age: 28
}
console.log(firstObj);

let secondObj:object = {...firstObj, gender:'male'};
console.log(secondObj);

interface User {
    name: string,
    age: number,
    gender: string
}

let userObj: User = {
    name: 'again mary',
    age: 44,
    gender: 'female'
}
console.log(userObj);


