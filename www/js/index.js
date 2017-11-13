
<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

var m;

$(document).on("pagecreate","#pageone",function(){
  $('#rnButton').on("click", function(){
      m = random();
      $('#rn').text(m);
      console.log(m);
      navigator.vibrate(2000);
      
      if(m==true){
        //navigator.notification.beep(1); 
      }else{
        //navigator.notification.beep(2);  
      }
  });            
});            

function random(){
	return !Math.round(Math.random());
}
