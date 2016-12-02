//Declare variables so buttons go to a prompt that displays questions
//jQuery
$('.littleQuestions').hide();
$('.liloQuestions').hide();
$('.aladdinQuestions').hide();

$( document ).ready(function() {
    console.log( "ready!" );
});
//DECLARE VARIABLES
let score = 0;

$littleButton = $('.little');
$liloButton = $('.lilo');
$aladdinButton = $('.aladdin');

//SHOW AND HIDE QUESTIONS
$littleButton.click(function(){
$('.littleQuestions').show();
$('.liloQuestions').hide();
$('.aladdinQuestions').hide();
});



$liloButton.click(function(){
$('.liloQuestions').show();
$('.littleQuestions').hide();
$('.aladdinQuestions').hide();
});


$aladdinButton.click(function(){
$('.aladdinQuestions').show();
$('.liloQuestions').hide();
$('.littleQuestions').hide();
});





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
// $littleButton.on("click", littleQuestions);
// $interButton.on("click","");
// $aladdinButton.on("click","");


// When little question() is clicked {we want this to happen}
// prompt is being stored in userAnswer

 // function littleQuestions(){};
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
