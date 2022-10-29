//callback functions are typed/defined like any other function
//can have params inside that are typed

import addNumbers from "./functions";

export function printToFile(text: string, callback: () => void) : void {
  console.log(text);
  callback();
}

export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

//typing functions kinda like interfaces for objs

export type MutationFunction = (v: number) => number;

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;


export type adderFunction = (val: number) => number
export function createAdder(num: number):adderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55))