/* RESOURCES USED:

https://www.youtube.com/watch?v=ahCwqrYpIuM - TypeScript - The Basics
https://www.youtube.com/watch?v=zQnBQ4tB3ZA - TypeScript in 100 Seconds

variable types

*/
let lucky;

type Style = 'bold' | 'italic';
let number:Style = "bold";


//interfaces
interface Person {
    first: "",
    last: ""
}

const person: Person = {
    first: '',
    last: ''
}

//function typing
function pow(x:number, y:number) : string {
    return Math.pow(x,y).toString();
}

pow(5, 5);

//array typing
const array: string[] = []
array.push(pow(3, 3))
array.push(pow(3, 3))


//more interface
interface MyListInterface {
    listItem1:0
    listItem2:1
}

const objectArray : MyListInterface[] = []

//optional types with ? and array containing objects
type MyList = [number?, string?, boolean?]

const superArray : MyList[] = []


//Generics
class Observable<T> {
    constructor(public value: T) {}
}
