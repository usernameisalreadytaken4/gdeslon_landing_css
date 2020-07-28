$(function() {

	$(".bar").click(function(){
		$('#navbarMain').toggleClass('d-block');
	});
	
	$(document).mouseup(function (e){
		var div = $('.navbar-main');
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('#navbarMain').removeClass('d-block');
		}
	});
  
});
