//=========================================================
//=========================variable declaration============
// var name = "Rafsan";
// var age = 22;
// var skills = ['Java', 'JavaScript', 'Angular'];

// console.log(name);

// ========================================================
//======================for loop===========================
// for (var i = 0; i < 10; i++){
//     console.log('Hello ' + name);
// }

// for (var i =0; i<skills.length; i++){
//     console.log(skills[i]);
// }

// =========================================================
//==================function declaration====================

// function add(a, b){
//     return a + b;
// }

// console.log(add(10, 12));

// var add = function(a, b){ //this type declaration is called function expression
//     return a + b;
// }

// var addition = add;

// console.log(add(10,25));
// console.log(addition(20,30));

// ================================================
// ==================Callback======================

 //var names = ['Rafsan', 'Jany', 'DCC'];

// names.forEach(function(name){
//     console.log(name);
// })
//------------------------------------------

//var names = ['Rafsan', 'Jany', 'DCC'];
//names.forEach(print);

// function print(name){
//     console.log(name);
// }

// ------------------------------------------
// var names = ['Rafsan', 'Jany', 'DCC'];
// var good = function(name){
//     console.log(name);
// }

// names.forEach(good)

//-----------------------------------------------

// function operation(a, b, callback){
//     var c = a+b;
//     var d = a-b;

//     callback(c, d);
// }

// function print(c, d){
//     console.log(c, d);
// }

// operation(5, 10, print);

//------------------------------------------------

// function operation(a, b, callback){
//     var c = a+b;
//     var d = a-b;

//     callback(c, d);
// }

// operation(10, 5, function(c, d){
//     console.log(c, d);
// })

//-------------------------------------------------

var names = ['Rafsan', 'Jany', 'DCC'];

function traverse(names, callback){
    for(var i=0; i<names.length; i++){
        name = names[i];
        callback(name);
    }
}

traverse(names, function(name){
    console.log(name);
})