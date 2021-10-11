const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.3;
const num: number = 3e10;

const message: string = "Hello world!";

// Arrays

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
//  OR
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

// Tuples different datatypes in Array

const contact: [string, number] = ['Alex', 123465];

// ANY   -    beck TO JS!! 

let variable: any = 42;
variable = 'Ooo_-0';

// ====

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('opps');

// Never

function throwError(message: string): never {
    throw new Error(message)
}

// CREATION NEW TYPES  /  aliases

type login = string;
const login: login = 'admin';
// const login2: login = 34234;   - ERROR

type ID = string | number;
const login3: ID = 'admin';
const login4: ID = 1534;   // no error


type SomeType = string | null | undefined;



