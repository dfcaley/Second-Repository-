// var generateMessage = function (salutation, visitor_name) {
//     var salutation_message = salutation + visitor_name;
//     return salutation_message;
// };
//
//
// var greet = function () {
//     var greeting = 'Hi ';
//     var name = prompt('What is your name?');
//     var greeting_message = generateMessage (greeting, name);
//     alert(greeting_message);
// };
//
// greet();

// var greet = function (event_details) {
//     alert ('Greet function ran');
//     event_details.preventDefault();
// };

var greet = function (event_details) {
    var greeting = 'Thanks ';
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var greeting_message = greeting + name + ' You have been signed up as ' + email;
    alert(greeting_message);
    event_details.preventDefault();
};


var form = document.getElementById ("signup-form");
form.addEventListener("submit", greet);

