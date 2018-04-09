
//obeject 

var question1  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow", Answer: "2" };
var question2  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};
var question3  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};
var question4  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};
var question5  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};
var question6  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};
var question7  = {hint:"What color is the sky", guess1:"blue", guess2:"white",guess3:"red",guess4:"yellow"};

//------------------------------------------------------------------------------------------------------
//vars 
var wins = 1;
var losses = 1;
//------------------------------------------------------------------------------------------------------

$("#start").click(function(){
  $("#question").html(question1.hint);
  $("#guess1").html(question1.guess1);
  $("#guess2").html(question1.guess2);
  $("#guess3").html(question1.guess3);
  $("#guess4").html(question1.guess4);

  $(".wins").html(wins);
  $(".losses").html(losses);
});


$('.choice:contains("guess1")').on('click',function(){
  $("#test").attr("src","animated-gifs-ghosts-16.gif");
});

//------------------------------------------------------------------------------------------------------
//timer
// var count = document.getElementById('timeToGo');
// timeoutfn = function(){
//       count.innerHTML = parseInt(count.innerHTML) - 1;

// };
// setTimeout(timeoutfn, 1000);

// $.each(
//   $('#timeToGo'), function(el) {
//     setInterval( function() { 
//       $(this).text($(this).text()*1 -1);
//     }, 1000);
//     }
//   }
// );
var countDown = function() {
  var ct = 15;
  var $elem = $(this);
  var display = function() {
    $elem.text(ct--);
  }
  var iv = setInterval(function() {
    display();
    if (ct === 0) {
      clearInterval(iv);
    }
  }, 1000);
  display();
};
$('#timeToGo').each(countDown);