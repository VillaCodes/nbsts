interface Coordinate {
  x: number;
  y: number;
}


//define the possible function typing and then implement it
//arg2 must be made optional because of the single param case 1
//AS keyword is used inside of the implementation to define what the argument's type is since it is initially unknown
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str:string): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown) : Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  };

  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate)
    }
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(',').forEach(str => {
      const [key, value] = str.split(':');
      coord[key as 'x' | 'y'] = parseInt(value, 10)
    })
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  return coord;
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 52, y: 34}))
console.log(parseCoordinate("x:34,y:55"))