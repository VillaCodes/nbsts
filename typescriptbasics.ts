let userName:string = "Johnny"
let hasLoggedIn:boolean = true;
console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

const myPerson: {
  first: string;
  last: string;
} = {
  first: "Johnny",
  last: "Villa"
};

interface Person {
  first: string;
  last: string;
};


//define key type and value type with Record
const ids: Record<number, string> = {
  10: "a",
  20: "b"
};



[1, 2, 3].forEach((v) => console.log(v))
const out = [4, 5, 6].map((v) => v * 10);