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
$liButton = $('li');

$('.correct').click(function(){
score++;
$(".myScore").html(score);
alert("Correct"); //anytime you want to access a variable - no quotes

});

$('.wrong').click(function(){
alert('wrong');

});




//CLICK HANDLERS
$futureButton.on("click", futureQuestions);
$interButton.on("click","");
$thgButton.on("click","");


// When future question() is clicked {we want this to happen}
// prompt is being stored in userAnswer

 function futureQuestions(){
  var userAnswer = prompt("What is the name of the mall?");
  if (userAnswer == "Pine Mall"){
    console.log(userAnswer);
    alert("You got it!");
}
  else {
    console.log("nah chill");
    alert("Not Quite");
  }

}
