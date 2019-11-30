//======================================
//===========object=====================
// var person = {};

// person.name = 'Rafsan Jany';
// person.age = '26';
// person.print = function(){
//     console.log(this.name + ' ' + this.age);

// }

// person.print();

var person = {
    name: 'Rafsan Jany',
    age: 22,
    skills: ['JavaScript', 'Java', 'Python'],

    print: function(){
        console.log(this.name, this.age, this.skills );
    }
}

person.print();