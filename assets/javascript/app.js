
//obeject 

var question1 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow", Answer: "white" };
var question2 = { hint: "What color is the ground", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question3 = { hint: "What color is the ocean", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question4 = { hint: "What color is the moon", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
var question5 = { hint: "What color is the chair", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
// var question6 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };
// var question7 = { hint: "What color is the sky", guess1: "blue", guess2: "white", guess3: "red", guess4: "yellow" };

//------------------------------------------------------------------------------------------------------
//vars 
var wins = 0;
var losses = 0;
var misses = 0;
var nextUp = 0;
var currentQuestion = 0;
var test = [question1, question2, question3, question4, question5]
var testGuess = ["guess1", "guess2", "guess3", "guess4"]

var clearImg;
//------------------------------------------------------------------------------------------------------
//function to set question objects to DOM
function nextQuestion(nextUp) {
  currentQuestion++
  clearInterval(clearImg);
  countDown();
  // $('#timeToGo').each(countDown);   //starts counter
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);
  console.log(currentQuestion)


}
//------------------------------------------------------------------------------------------------------
//adds gif if correct guess
function correctGuess() {
  $(`.choice:contains(${testGuess[0]})`).on('click', function () {
    $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
    var nq = setInterval(function () {
      console.log(currentQuestion + "  correct")
      nextQuestion(currentQuestion)
      $("#test").attr("src", "");
      clearInterval(nq);
    }, 3000);
  });
}
//------------------------------------------------------------------------------------------------------
//wrong guess
function wrongtGuess() {
  $(`.choice:contains(${testGuess[1]})`).on('click', function () {
    $("#test").attr("src", "animated-gifs-ghosts-16.gif");
    var nq = setInterval(function () {
      console.log(currentQuestion + "  wrong")
      nextQuestion(currentQuestion)
      $("#test").attr("src", "");
      clearInterval(nq);
    }, 3000);
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
  var $elem = $('#timeToGo');
  var display = function () {
    $elem.text(ct--);
  }

  var iv = setInterval(function () {
    display()
    if (ct === -1) {
      clearInterval(iv)
      misses++
      $(".misses").html(misses);
      // console.log(currentQuestion + "   miss")
      // var nq = setInterval(function () {
      //   console.log(currentQuestion + "  number")
      //   nextQuestion(currentQuestion)
      //   clearInterval(nq);
      // }, 3000);
      $("#test").attr("src", "animated-gifs-ghosts-16.gif");
          clearInterval(iv);
          console.log("hello again")
          nextQuestion(currentQuestion)
           clearImg = setInterval(function () {
            $("#test").attr("src", "");
          }, 3000);
   


    }


  }, 1000);
  // var iv = setInterval(function () {
  //   // console.log(ct)
  //   countTime = ct
  //   display();
  //   if (ct === -1) {
  //     misses++
  //     $(".misses").html(misses);

  //     // var nq = setInterval(function () {

  //     //   console.log(currentQuestion + "  number")
  //     //   nextQuestion(currentQuestion)
  //     //   clearInterval(nq);
  //     // }, 3000);

  //     $("#test").attr("src", "animated-gifs-ghosts-16.gif");
  //     clearInterval(iv);
  //     console.log("hello again")
  //     nextQuestion(currentQuestion)
  //     //  clearImg = setInterval(function () {
  //     //   $("#test").attr("src", "");
  //     // }, 3000);

  //     // $('#timeToGo').each(countDown);   //starts counter

  //   }
  // }, 1000);
  display();
};

//------------------------------------------------------------------------------------------------------
//click function to start game
$("#start").click(function (countTime) {
  console.log("hello")
  nextQuestion(currentQuestion)
  // currentQuestion++
  // countDown();
  // $('#timeToGo').each(countDown);   //starts counter

  // correctGuess()

});





