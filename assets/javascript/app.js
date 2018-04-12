
//obeject 

var question1 = { hint: "What is yoga?", guess1:"Breath, body awareness & stretching" , guess2: "A religion ", guess3:"80’s workout", guess4: "A clothing line", Answer: 0 };
var question2 = { hint: "What is Tadasana?", guess1: "Crane posture", guess2: "Breath", guess3: "Mountain posture", guess4: "Release", Answer: 1 };
var question3 = { hint: "What is Bandha?", guess1: "Flavor of yoga tea", guess2: "postural alignment", guess3: "A yoga mat", guess4: "Meditation", Answer: 2 };
var question4 = { hint: "How many Bandha’s are there?", guess1: "7", guess2: "1", guess3: "5", guess4: "3", Answer: 3 };
var question5 = { hint: "What posture has the same benefits as a 2 hour nap?", guess1: "Uttanasana", guess2: "Viparita karani", guess3: "Padmasana", guess4: "Vrksasana", Answer: 2 };
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
  if (nextUp === 5){
    console.log("end of game")
  }
  console.log(nextUp)
  countDown();
  // $('#timeToGo').each(countDown);   //starts counter
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);
  console.log(test[nextUp].Answer +  "  answer")
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
//-------------------------------------------------------------------------------------------------------
//correct answer
$(correctG [0]).on('click', function () {
  
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  
  clearQuestion()
});

$(correctG [1]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  
  clearQuestion()
});

$(correctG [2]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  
  clearQuestion()
});

$(correctG [3]).on('click', function () {
  $("#test").attr("src", "dancing-while-mowing-the-lawn.gif");
  
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
  var ct = 5;
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
      clearQuestion()
    }
    

  }, 1000);


  display();
};







