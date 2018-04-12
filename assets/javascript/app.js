
//obeject 

var question1 = { hint: "What is yoga?", guess1:"Breath, body awareness & stretching" , guess2: "A religion ", guess3:"80’s workout", guess4: "A clothing line", Answer: 1 };
var question2 = { hint: "What is Tadasana?", guess1: "Crane posture", guess2: "Breath", guess3: "Mountain posture", guess4: "Release", Answer: 2 };
var question3 = { hint: "What is Bandha?", guess1: "Flavor of yoga tea", guess2: "postural alignment", guess3: "A yoga mat", guess4: "Meditation", Answer: 3 };
var question4 = { hint: "How many Bandha’s are there?", guess1: "7", guess2: "1", guess3: "5", guess4: "3", Answer: 4 };
var question5 = { hint: "What posture has the same benefits as a 2 hour nap?", guess1: "Uttanasana", guess2: "Viparita karani", guess3: "Padmasana", guess4: "Vrksasana", Answer: 4 };

//------------------------------------------------------------------------------------------------------
//vars 

var wins = 0;
var losses = 0;
var misses = 0;
var nextUp = 0;
var timersUp = 6;
var currentQuestion = 0;
var test = [question1, question2, question3, question4, question5]
var correctG = [".choice1", ".choice2", ".choice3", ".choice4"]
var cl = 0
var clearImg;
//------------------------------------------------------------------------------------------------------
//slide up tally board
$( ".rollUp" ).hide( "slow", function() {
  alert( "Animation complete." );
});
//------------------------------------------------------------------------------------------------------
//click function to start game
$("#start").click(function (countTime) {
 
  // console.log("hello")
  nextQuestion()

});
//------------------------------------------------------------------------------------------------------
//function to set question objects to DOM
function nextQuestion() {
  // currentQuestion++
 
  // console.log(nextUp)
  countDown();
  // $('#timeToGo').each(countDown);   //starts counter
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);
  var anser = (test[nextUp].Answer);
  // console.log(test[nextUp].Answer +  "  answer")
  nextUp++
  // console.log(currentQuestion)

//-------------------------------------------------------------------------------------------------------
//clicks for answer 1
$(".choice1").on('click', function () {
  var button1 = 1
  console.log(anser + "  button 1")
  if ( button1 === anser){
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  winsCount()
  clearQuestion()
  }
  else{
    $("#test").attr("src", "animated-gifs-ghosts-16.gif");
    lossesCounter()
    clearQuestion()
  }
});
//-------------------------------------------------------------------------------------------------------
//clicks for answer 2
$(".choice2").on('click', function () {
  var button1 = 2
  console.log(anser + "  button 2")
  if ( button1 === anser){
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  winsCount()
  clearQuestion()
  }
  else{
    $("#test").attr("src", "animated-gifs-ghosts-16.gif");
    lossesCounter()
    clearQuestion()
  }
});
//-------------------------------------------------------------------------------------------------------
//clicks for answer 3
$(".choice3").on('click', function () {
  var button1 = 3
  console.log(anser + "  button 3")
  if ( button1 === anser){
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  winsCount()
  clearQuestion()
  }
  else{
    $("#test").attr("src", "animated-gifs-ghosts-16.gif");
    lossesCounter()
    clearQuestion()
  }
});
//-------------------------------------------------------------------------------------------------------
//clicks for answer 4
$(".choice4").on('click', function () {
  var button1 = 4
  console.log(anser + "  button 4")
  if ( button1 === anser){
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  winsCount()
  clearQuestion()
  }
  else{
    $("#test").attr("src", "animated-gifs-ghosts-16.gif");
    lossesCounter()
    clearQuestion()
  }
});
}
//------------------------------------------------------------------------------------------------------
function clearQuestion() {
  var nq = setInterval(function () {
    
    $("#test").attr("src", "");

    currentQuestion++
    console.log(currentQuestion + "   game")
    if (currentQuestion === 5){

      $( ".rollUp2" ).hide( "slow", function() {
      });
      $( ".rollUp" ).show( "slow", function() {
      });

      console.log(currentQuestion + "  end of game")
    }
    clearInterval(nq);
if ( currentQuestion < 5){
    nextQuestion()
  }
  }, 3000);

}
//------------------------------------------------------------------------------------------------------
//misses counter
function missesCount() {
  misses++
    $(".misses").html(misses);

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
  // console.log("here")
  var ct = 15;
  var $elem = $('#timeToGo');
  var display = function (cl) {
    $elem.text(ct--);
  }

  var iv = setInterval(function () {

    $(correctG [0]).on('click', function () {
      clearInterval(iv)
    });

    $(correctG [1]).on('click', function () {
      clearInterval(iv)
    });

    $(correctG [2]).on('click', function () {
      clearInterval(iv)
    });

    $(correctG [3]).on('click', function () {
      clearInterval(iv)
    });

    display()
   
    if (ct === -1) {
      clearInterval(iv)
      $("#test").attr("src", "animated-gifs-ghosts-16.gif");
      missesCount()
      clearQuestion()
      
    }
    

  }, 1000);

  timersUp--
  console.log("time count to end  " + timersUp)
  if (timersUp === 0){
    clearInterval(iv)
  }

  display();
};







