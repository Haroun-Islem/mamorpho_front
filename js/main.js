$(document).ready(function() {
    $('#show').click(function() {
      $('.show-commentary').removeClass('visually-hidden');
    });

    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.show-commentary').length && !target.is('#show')) {
          $('.show-commentary').addClass('visually-hidden');
        }
      });
  });

 
    $('#nos_suggestions').click(function() {
      $('#section_1').addClass('visually-hidden');
      $('#section_2').removeClass('visually-hidden');
    });
  
    $('#decouvrir').click(function() {
      $('#section_2').addClass('visually-hidden');
      $('#section_1').removeClass('visually-hidden');
    });
    
    let compteur = 0;
    $('.ico_2').click(function() {
      if (compteur === 0) {
        compteur = 1;
        $('.ico_2').css('color', 'red');
      } else {
        compteur = 0;
        $('.ico_2').css('color', 'white');
      }
    
    });

  $('.')
