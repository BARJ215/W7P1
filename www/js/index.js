
<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

var m;

$(document).on("pagecreate","#pageone",function(){
  $('#rnButton').on("click", function(){
      m = random();
      $('#rn').text(m);
      
      if(m==true){
        navigator.notification.beep(1); 
      }else{
        navigator.notification.beep(2);  
      }
      
      console.log(m);
      
  });            
});            

function random(){
	return !Math.round(Math.random());
}
