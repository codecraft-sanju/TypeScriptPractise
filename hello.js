var message = "Hello, TypeScript!";
console.log(message);
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Sanjay"));
function welcome(name, age) {
    return age ? "".concat(name, " is ").concat(age, " years old.") : "Hello, ".concat(name, "!");
}
console.log(welcome("Sanjay")); // Hello, Sanjay!
console.log(welcome("Sanjay", 25)); // Sanjay is 25 years old.
// let isDone: boolean = true;
// let age: number = 25;
// let firstName: string = "Sanjay";
// let list: number[] = [1, 2, 3, 4, 5];
// let tuple: [string, number] = ["Sanjay", 25]; 
// let anything: any = ""; 
