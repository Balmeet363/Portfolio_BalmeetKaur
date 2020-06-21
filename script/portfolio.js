jQuery(document).ready(function(){
		$('.project_description').hide();
		 $('h2').click(function(){
			$('.project_description').hide();
			$(this).next('.project_description').toggle();
		});
		
		$('.job-detail').hide();
		 $('h2').click(function(){
			$('.job-detail').hide();
			$(this).next('.job-detail').toggle();
		});
		
		$('.concept-detail').hide();
		 $('h2').click(function(){
			$('.concept-detail').hide();
			$(this).next('.concept-detail').toggle();
		});
		
});
