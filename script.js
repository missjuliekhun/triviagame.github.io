//Declare variables so buttons go to a prompt that displays questions
//jQuery
window.globalVar = "This is global!";


$('.littleQuestions').hide();
$('.liloQuestions').hide();
$('.aladdinQuestions').hide();

$(document).ready(function() {
    console.log( "ready!" );
});
//DECLARE VARIABLES
let points = 0;

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




//QUESTION ONE IS CORRECT OR WRONG
$('.littleQuestions .correct1').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("correct");
     //anytime you want to access a variable - no quotes
    $(".littleQuestions > .q1").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.littleQuestions .wrong1').click(function(){
  alert('wrong');
  $(".littleQuestions > .q1").hide();
  });

$('.littleQuestions .correct2').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".littleQuestions .q2").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.littleQuestions .wrong2').click(function(){
  alert('wrong');
  $(".littleQuestion .q2").hide();
  });

$('.littleQuestions .correct3').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".littleQuestions .q3").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.littleQuestions .wrong3').click(function(){
  alert('wrong');
  $(".littleQuestions .q3").hide();
  });

// LILO questions
//QUESTION ONE IS CORRECT OR WRONG
$('.liloQuestions .correct1').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".liloQuestions .q1").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.liloQuestions .wrong1').click(function(){
  alert('wrong');
  $(".liloQuestions .q1").hide();
  });

$('.liloQuestions .correct2').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".liloQuestions .q2").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.liloQuestions .wrong2').click(function(){
  alert('wrong');
  $(".liloQuestions .q2").hide();
  });

$('.liloQuestions .correct3').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".liloQuestions .q3").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.liloQuestions .wrong3').click(function(){
  alert('wrong');
  $(".liloQuestions .q3").hide();
  });


$('.aladdinQuestions .correct1').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".aladdinQuestions .q1").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.aladdinQuestions .wrong1').click(function(){
  alert('wrong');
  $(".aladdinQuestions .q1").hide();
  });

$('.aladdinQuestions .correct2').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".aladdinQuestions .q2").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.aladdinQuestions .wrong2').click(function(){
  alert('wrong');
  $(".aladdinQuestions .q2").hide();
  });

$('.aladdinQuestions .correct3').click(function(){
  points++;
    $(".mypoints").html(points);
    alert("Correct"); //anytime you want to access a variable - no quotes
    $(".aladdinQuestions .q3").hide();
    });

//QUESTION TWO IS CORRECT OR WRONG
$('.aladdinQuestions .wrong3').click(function(){
  alert('wrong');
  $(".aladdinQuestions .q3").hide();
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
