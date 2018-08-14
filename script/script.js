$(document).ready(function(){
    $('.filter a').on('click', function(){
		// Current class assigniment
		$('.filter li.current').removeClass('current');
        $(this).parent().addClass('current');
        

        $('h1.head').text($(this).text());
        // Get & filter link text
            var category = $(this).text().toLowerCase();
            
            // Remove hidden class if 'all-projects' is selected
            if(category == 'sve'){
                $('ul.slike li:hidden').fadeIn('slow').removeClass('hidden');
            } else {
                $('ul.slike li').each(function(){
                    if(!$(this).hasClass(category)){
                        $(this).hide().addClass('hidden');
                    } else {
                        $(this).fadeIn('slow').removeClass('hidden');
                    }
                    
                    
                      });
                    }	

                    // Stop link behaviour
                    return false;
             });
 });  
   