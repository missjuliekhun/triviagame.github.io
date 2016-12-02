//Declare variables so buttons go to a prompt that displays questions
//jQuery
$( document ).ready(function() {
    console.log( "ready!" );
});
//always put variables at top
let score = 0; //this is your variable

$futureButton = $('.future');
$interButton = $('.interstellar');
$thgButton = $('.thg');

$('.q1 .correct').click(function(){
score++;
$(".myScore").html(score);
alert("Correct"); //anytime you want to access a variable - no quotes
$(".q1").remove();


});

$('.q1 .wrong').click(function(){
alert('wrong');
$(".q1").hide();
});


$('.q2 .correct').click(function(){
score++;
$(".myScore").html(score);
alert("Correct"); //anytime you want to access a variable - no quotes
$(".q2").remove();


});

$('.q2 .wrong').click(function(){
alert('wrong');
$(".q2").hide();
});

$('.q3 .correct').click(function(){
score++;
$(".myScore").html(score);
alert("Correct"); //anytime you want to access a variable - no quotes
$(".q3").remove();


});

$('.q3 .wrong').click(function(){
alert('wrong');
$(".q3").hide();
});



//CLICK HANDLERS
$futureButton.on("click", futureQuestions);
$interButton.on("click","");
$thgButton.on("click","");


// When future question() is clicked {we want this to happen}
// prompt is being stored in userAnswer

 function futureQuestions(){};
//   var userAnswer = prompt("What is the name of the mall?");
//   if (userAnswer == "Pine Mall"){
//     console.log(userAnswer);
//     alert("You got it!");
// }
//   else {
//     console.log("nah chill");
//     alert("Not Quite");
//   }
//
// }
