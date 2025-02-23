let message: string = "Hello, TypeScript!";
console.log(message);

function greet(name: string): string {
    return "Hello, " + name;
}
console.log(greet("Sanjay"));


function welcome(name: string, age?: number): string {
    return age ? `${name} is ${age} years old.` : `Hello, ${name}!`;
}
console.log(welcome("Sanjay")); // Hello, Sanjay!
console.log(welcome("Sanjay", 25)); // Sanjay is 25 years old.




// let isDone: boolean = true;
// let age: number = 25;
// let firstName: string = "Sanjay";
// let list: number[] = [1, 2, 3, 4, 5];
// let tuple: [string, number] = ["Sanjay", 25]; 
// let anything: any = ""; 
