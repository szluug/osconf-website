$(document).ready(function(){
	$('nav a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$.get($(this).attr('href'), function(data){
			$('#content').replaceWith($(data).find('#content'));
			history.pushState(null, $(data).filter('title').text(), $this.attr('href'));
		}, 'html');
	});
});