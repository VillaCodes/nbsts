//you can not put another required after an optional (param? etc)

function printIngredient(quantity: string, ingredient: string, extra? :string) {
  console.log(`${quantity} ${ingredient}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more")

interface User {
  id: string; 
  info?: {
    email?: string;
  }
}


//can use ! to overwrite potential error, but not good practice
function getEmail(user: User): string {
  if (user.info) {
    return user.info!.email!;
  }

  return "";
}

//coalescing operator, if the fields are null, return empty string
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

//the adding ? to the function call makes it so you only call if callback exists
function addWithCallback(x: number, y: number, callback? : ()=>void) {
  console.log([x,y]);
  callback?.();
}