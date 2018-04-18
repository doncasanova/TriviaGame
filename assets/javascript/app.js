
//obeject 

var question1 = { hint: "What is yoga?", guess1: "Breath, body awareness & stretching", guess2: "A religion ", guess3: "80’s workout", guess4: "A clothing line", Answer: 1 };
var question2 = { hint: "What is Tadasana?", guess1: "Crane posture", guess2: "Breath", guess3: "Mountain posture", guess4: "Release", Answer: 3 };
var question3 = { hint: "What is Bandha?", guess1: "Flavor of yoga tea", guess2: "postural alignment", guess3: "A yoga mat", guess4: "Meditation", Answer: 2 };
var question4 = { hint: "How many Bandha’s are there?", guess1: "7", guess2: "1", guess3: "5", guess4: "3", Answer: 4 };
var question5 = { hint: "What posture has the same benefits as a 2 hour nap?", guess1: "Uttanasana", guess2: "Viparita karani", guess3: "Padmasana", guess4: "Vrksasana", Answer: 2 };
//------------------------------------------------------------------------------------------------------
//restart

$("#reset").click(function () {
  console.log('restart')
  location.reload();
  
  });
//------------------------------------------------------------------------------------------------------
//vars 
var hideClicks;
var anser = 1;
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
var iv;

function hideClicks(unHide){
if ( hideClicks == 2){
  console.log(hideClicks + "  inside of guess click")
$(".choice1").on('click', function () {
  if (1 === anser) {
    $(".rollUp2").hide("slow", function () {
    });
    $("#test").attr("src", "../TriviaGame/assets/images/tumblr_mihc1eBiWZ1r7bisgo1_500.gif");
    winsCount()
    clearQuestion()
   
  }
  else {
    $(".rollUp2").hide("slow", function () {
    });
    $("#test").attr("src", "../TriviaGame/assets/images/giphy.webp");
    lossesCounter()
    clearQuestion()
  }
  
});
}
//-------------------------------------------------------------------------------------------------------
//clicks for answer 2
$(".choice2").on('click', function () {
  $(".rollUp2").hide("slow", function () {
  });
  if (2 === anser) {
    $("#test").attr("src", "../TriviaGame/assets/images/tumblr_mihc1eBiWZ1r7bisgo1_500.gif");
    winsCount()
    clearQuestion()
  }
  else {
    $(".rollUp2").hide("slow", function () {
    });
    $("#test").attr("src", "../TriviaGame/assets/images/giphy.webp");
    lossesCounter()
    clearQuestion()
  }
});
//-------------------------------------------------------------------------------------------------------
//clicks for answer 3
$(".choice3").on('click', function () {
  $(".rollUp2").hide("slow", function () {
  });
  if (3 === anser) {
    $("#test").attr("src", "../TriviaGame/assets/images/tumblr_mihc1eBiWZ1r7bisgo1_500.gif");
    winsCount()
    clearQuestion()
  }
  else {
    $(".rollUp2").hide("slow", function () {
    });
    $("#test").attr("src", "../TriviaGame/assets/images/giphy.webp");
    lossesCounter()
    clearQuestion()
  }
});
//-------------------------------------------------------------------------------------------------------
//clicks for answer 4
$(".choice4").on('click', function () {
  $(".rollUp2").hide("slow", function () {
  });
  if (4 === anser) {
    $("#test").attr("src", "../TriviaGame/assets/images/tumblr_mihc1eBiWZ1r7bisgo1_500.gif");
    winsCount()
    clearQuestion()
  }
  else {
    $(".rollUp2").hide("slow", function () {
    });
    $("#test").attr("src", "../TriviaGame/assets/images/giphy.webp");
    lossesCounter()
    clearQuestion()
  }
});
}
//------------------------------------------------------------------------------------------------------
//slide up tally board
$(".rollUp").hide("slow", function () {
  alert("Animation complete.");
});
//------------------------------------------------------------------------------------------------------
//click function to start game

$("#start").click(function (countTime) {
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);


  hideClicks(hideClicks = 2)
  nextQuestion()

});
//------------------------------------------------------------------------------------------------------
//function to set question objects to DOM
function nextQuestion() {
  // currentQuestion++
  $("#question").html(test[nextUp].hint);
  $("#guess1").html(test[nextUp].guess1);
  $("#guess2").html(test[nextUp].guess2);
  $("#guess3").html(test[nextUp].guess3);
  $("#guess4").html(test[nextUp].guess4);
  // console.log(nextUp)
  countDown();
  // $('#timeToGo').each(countDown);   //starts counter
  anser = (test[nextUp].Answer);
  nextUp++
  // console.log(currentQuestion)

  //-------------------------------------------------------------------------------------------------------
  //clicks for answer 1
}
//------------------------------------------------------------------------------------------------------
function clearQuestion() {

  clearInterval(iv);

  var nq = setInterval(function () {
     $(".rollUp2").show("slow", function () {
  });

    $("#test").attr("src", "");

    currentQuestion++
    if (currentQuestion === 5) {

      $(".rollUp2").hide("slow", function () {
      });
      $(".rollUp").show("slow", function () {
      });

    }
    clearInterval(nq);
    if (currentQuestion < 5) {
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
//roll up for pic

//-------------------------------------------------------------------------------------------------------
//timer
var countDown = function () {
  // console.log("here")
  var ct = 15;
  var $elem = $('#timeToGo');
  var display = function (cl) {
    $elem.text(ct--);
  }

  iv = setInterval(function () {

    display()

    if (ct === -1) {
      $(".rollUp2").hide("slow", function () {
      });
      $("#test").attr("src", "../TriviaGame/assets/images/giphy.webp");
      missesCount()
      clearQuestion()

    }


  }, 1000);

  timersUp--
  if (timersUp === 0) {
    clearInterval(iv)
  }

  display();
};







