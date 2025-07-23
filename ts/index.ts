// let a1:number = 34;
// let a2:number = 64;

// function newOne1(a1:number,a2:number){
//     console.log(`addition of two numbers will be ${a1+ a2}`);   
// }

// newOne1(a1,a2);

//data types in js, Implementing in ts

//PRIMITIVE
// 1. number
let a:number = 3_4_3;
console.log(a);

//number - bigint
let b:bigint = 334543534_44554645_34353534n;
console.log(b);

//3. string
let sent:string = "this is a string";
console.log(sent);


//null and undefined types
let first:undefined = undefined;
console.log(first);

let second:null = null;
console.log(second);

//4. boolean
let booldata: boolean = false;

//5. symbol
const symbolVar: symbol = Symbol("unique");
const symbolVar2: symbol = Symbol("unique");
console.log(symbolVar);
console.log(symbolVar==symbolVar2);

// NON PRIMITIVE
//1. arrays
let arr:number[] = [2,4,5,9];
console.log(arr);

let char_arr:string[] = ['this','is','a','string array'];
console.log(char_arr);

//objects
let firstObj:object = {
    name: 'andy rubin',
    age: 28
}
console.log(firstObj);

let secondObj:object = {...firstObj, gender:'male'};
console.log(secondObj);

//creating a blueprint interface for creating objects
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

let obj3: {name: string, school_id: string, phone: number} = {
    name: "ssps",
    school_id: '454df',
    phone: 3457564
}
console.log(obj3);

//ts datatypes 
// 1. any - Opts out of type checking for a variable, allowing it to hold any type of value. Use with caution.
// (by default when we do not specify any type it becomes any type)
let tempvar:any = 343;
console.log(tempvar);
tempvar = 'aj';
console.log(tempvar);

//2. tuple - Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
let tupleVar: [string, number,boolean] = [ `string here`, 44, true];
console.log(tupleVar);

// 3. ENUMS
enum colorEnum {
    RED = 3,
    BLUE,
    GREEN,
    PEACH,
    ORANGE
} 

let c: colorEnum = colorEnum.GREEN;
let d: string = colorEnum[3];
console.log(c);
console.log(d);





