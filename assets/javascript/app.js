
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
var correctG = [".choice1", ".choice2", ".choice3", ".choice4"]
var cl = 0
var clearImg;
//------------------------------------------------------------------------------------------------------
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
  console.log(nextUp)
  countDown();
  // $('#timeToGo').each(countDown);   //starts counter
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);
  nextUp++
  console.log(currentQuestion)
}
//------------------------------------------------------------------------------------------------------
function clearQuestion() {
  var nq = setInterval(function () {
    console.log(currentQuestion + "  clear")
    nextQuestion()
    $("#test").attr("src", "");
    clearInterval(nq);
  }, 3000);
}

$(correctG [0]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  console.log("hello")
  clearQuestion()
});

$(correctG [1]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  console.log("hello...2")
  clearQuestion()
});

$(correctG [2]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  console.log("hello...2")
  clearQuestion()
});

$(correctG [3]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  console.log("hello...2")
  clearQuestion()
});

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
  console.log("here")
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

    console.log()
    if (ct === -1) {
      clearInterval(iv)

    }
    // correctGuess2()

  }, 1000);


  display();
};







