
<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

var m;

$(document).on("pagecreate","#pageone",function(){
  $('#rnButton').on("click", function(){
      m = random();
      $('#rn').text(m);
      console.log(m);
      navigator.vibrate(200);
      navigator.notification.beep(1);
      //if(m==true){
        //navigator.notification.beep();
      //}else{
        //navigator.notification.beep();  
      //}
  });            
});            

function random(){
	return !Math.round(Math.random());
}
