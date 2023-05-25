/* RESOURCES USED:

https://www.youtube.com/watch?v=nViEqpgwxHE - Typescript Generics Tutorial

Generics

*/

/*CONTEXT:
    Generics are like the following in C#
     
    List<int> 
    Dictionary<StatType, object>();

    It specifies the type.
*/

//t[] and Array<T> are the same thing
//Array<any> removes type decloration.
//Array<T> doesnt know what the type is ahead of time.
//This also helps visual studio cover ur code better with type decloration
//so Array<T> makes it so the type is passable
//T is a variable, can be whatever u want, could be Element, could be U 
const last = <T>(arr: T[] ) => {
    return arr[arr.length - 1]
}

//the type of l variable is a number and can use number attributes/methods
const l = last([1, 2, 3]); //number

//this type is specified to be a string
const l2 = last<string> //string

//but strings can also be inferred 
const l3 = last(["a", "b", "c"]) //string

//It allows for things to be easily told from what they are. 
//they carry the type you pass in.


//See how specifing the type makes it so you cant use any type.
const makeArr = (x: number) => {
    return [x];
}

const v = makeArr(5);
const v2 = makeArr("a");

//Doing so makes it so you can make a array of any type
//<T> is necessary to send the type to the parameter
const makeArr2 = <T, Y>(x: T, y: Y) => {
    return [x, y];
}

//these variables are a array of numbers
const v3 = makeArr2(5, 5);
//and this one lets you know that its strings and numbers
// using the union string | number, "|" => being the unifier  
const v4 = makeArr2("a", 3);

//array with 2 values is a Tuple so lets make it return a tuple.
const makeArr3 = <T, Y>(x: T, y: Y):[T, Y] => {
    return [x, y];
}

//now the variables are tuples
const v5 = makeArr3(5, 5);
const v6 = makeArr3("a", 3);

//You can also specify the default typing for these generics
const makeArr4 = <T = number, Y = string>(x: T, y: Y):[T, Y] => {
    return [x, y];
}

//This works as normal
const v7 = makeArr4(2, 3) 

//example of when it doesnt work, 
//as only one type is specified, 
//you need to specify the second one or goes to the default type 
//specified in the function T = string
const v9 = makeArr4<string | null>("2", 3) 
//default in the makeArr4 method makes it so this works
const v8 = makeArr4<string | null>("2", "")


