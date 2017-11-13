<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submit();
  });            
});            

function submit(){
	var name = $('#nameText').val();
	var email = $('#emailText').val(); 
	var telephone = $('#telNumb').val();
	var dob = $('#dobDate').val();
	var password =$('#pasHidden').val();

}