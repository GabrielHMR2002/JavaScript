// let, const and var

// to declarate a variable can use let, var and const

// we use "let" to declare variable that can change later during the executing our program

//we use "const" to declare a variable that is not supposed to change any point in the future
//the value cannot be changed while using const
//when we use const we have to initializer a value

const a; // Missing initializer in const declaration

const x = 2;
x = 7;

//AS A BEST PRATICE FOR WRITTING CLEAN CODE IT IS RECOMMENDED TO USE 'CONST' BY DEFAULT AND 'LET' ONLY WHEN YOU ARE REALLY SURE THAT THE VARIABLE NEEDS TO CHANGE IN SOME POINT IN THE FUTURE

// 'VAR' is the old way to declare/define a variable

var age = 21;

// we can declare/define a variable not using a key word like 'let', 'const' and 'var'
// however, It's a terrible ideia to declarate using this way, because this does not create the variable in the currentyli scope

myName = 'gabriel';
console.log(myName);





