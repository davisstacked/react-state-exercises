// Stuff after colon and before equal is the typescript 
let id: number = 5;
let company: string = 'traversy media';
let isPublished: boolean = true;
let x: any = 'Hello';
// defines this as an array which only takes numbers
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];
// Tuple array
let employee: [number, string][];
employee = [[1, 'Brad'], [2, 'John'], [3, 'Jill']]

// Union
let pid: string | number
  pid = '22';

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid;
// or
let customerId = cid as number 

// Functions
function addNum(x: number, y: number) : number { // function return value is after params before {}
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces