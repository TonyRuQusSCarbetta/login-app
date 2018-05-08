//LOG IN APP

var users = [
  {
    name: 'Thomas',
    gender: 'Male',
    age: 29,
    race: 'White'
  },
  {
    name: 'Maria',
    gender: 'Female',
    age: 33,
    race: 'Filipino',
  },
  {
    name: 'Pedro',
    gender: 'Male',
    age: 8,
    race: 'Hispanic',
  },
  {
    name: 'Leroy',
    gender: 'Male',
    age: 14,
    race: 'African American',
  },
  {
    name: 'Shrada',
    gender: 'female',
    age: 52,
    race: 'Indian',
  },
]

//get ID userInputId from html
var userInputId = document.getElementById('userInput');
//get ID loggedIn from html
var loggedIn = document.getElementById('loggedIn');
//get ID notLoggedIn from html
var notLoggedIn = document.getElementById('notLoggedIn');
// get ID for registered users List
var registeredUsers = document.getElementById('registeredUsers');



//onclick function
function logIn() {
  var userInput = userInputId.value;
  console.log(userInput);
  for (var i = 0; i < users.length; i++) {
    if (users[i].name == userInput) {
      loggedIn.innerText = 'Hi ' + userInput + ', You are now logged in!'
      //break; will STOP A FOR LOOP
      //return; will STOP A FUNCTION
      return;
    }
  }
notLoggedIn.innerText = userInput + ' is not a valid username. You are not logged in.'
}

//get ID userInputId from html
var userInput1Id = document.getElementById('userInput1');
var newRegister = document.getElementById('newRegister');

//onclick function
function register() {
  var userInput1 = userInput1Id.value;
  console.log(userInput1);
  //add new user to users array list
  users.push(
    {
      name: userInput1
  }
  );
      newRegister.innerText = 'Hi ' + userInput1 + ', You are now registered! Log in above.'
      //break; will STOP A FOR LOOP
      //return; will STOP A FUNCTION
      return;
    }
