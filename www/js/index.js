
<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->


var q;
var a = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"  
];

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
      var q = $('#questionText').val();
      $('#questionAsked').text(q);
      navigator.notification.alert(a[random()]);
  });            
});            

function random(){
	return Math.floor(Math.random()*20);
}
