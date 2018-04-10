
//obeject 

var question1 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow", Answer: "2" };
var question2 = { hint: "What color is the ground", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question3 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question4 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question5 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question6 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question7 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };

//------------------------------------------------------------------------------------------------------
//vars 
var wins = 0;
var losses = 0;
var misses = 0;
var nextUp = []
var test = [question1, question2, question3, question4, question5]
//------------------------------------------------------------------------------------------------------
//function to set question objects to DOM
function nextQuestion() {
  var i = 0
  $("#question").html(test[i].hint);
  $("#guess1").html(test[i].guess1);
  $("#guess2").html(test[i].guess2);
  $("#guess3").html(test[i].guess3);
  $("#guess4").html(test[i].guess4);
}
//------------------------------------------------------------------------------------------------------
//adds gif if correct guess
function correctGuess(){
$('.choice:contains("guess1")').on('click', function () {
  $("#test").attr("src", "animated-gifs-ghosts-16.gif");
});
}
//------------------------------------------------------------------------------------------------------
//misses counter
function missesCount() {
  if (ct = 0) {
    $(".misses").html(misses);
  }
}
//-------------------------------------------------------------------------------------------------------
//wins counter
function winsCount() {
  wins++
  $(".wins").html(wins);

}

//-------------------------------------------------------------------------------------------------------
//losses counter
function lossesCounter() {
  losses++
  $(".losses").html(losses);
}
//-------------------------------------------------------------------------------------------------------
//timer
var countDown = function () {
  var ct = 15;
  var $elem = $(this);
  var display = function () {
    $elem.text(ct--);
  }
  var iv = setInterval(function () {
    console.log(ct)
    display();
    if (ct === -1) {
      misses++
      $(".misses").html(misses);
      $("#test").attr("src", "animated-gifs-ghosts-16.gif");
      clearInterval(iv);
    }
  }, 1000);
  display();
};
//------------------------------------------------------------------------------------------------------
//click function to start game
$("#start").click(function () {
  $('#timeToGo').each(countDown);   //starts counter
  nextQuestion()                    //sets text to DOM
  correctGuess()
});





