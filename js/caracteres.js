$(document).ready(function(){

  /* INPUT SEARCH */
  $(".inp").keyup(function(){

    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    // if(!filter){
    //     $(".commentlist tr").hide();
    //     return;
    // }

    var regex = new RegExp(filter, "i");
    // Loop through the comment list
    $(".commentlist tr").each(function(){

        // If the list item does not contain the text phrase fade it out
        if ($(this).text().search(regex) < 0) {
            $(this).hide();

        // Show the list item if the phrase matches and increase the count by 1
        } else {
            $(this).show();
            count++;
        }
    });

    // Update the count
    var numberItems = count;
    $(".inp-count").text("Number of Comments = "+count);
  });

  /* INPUT SEARCH X RESET */
    $(".inp").keyup(function() {
          if ($(this).val().length != 0) {
              $(".search-reset").show();
          } else {
              $(".search-reset").hide();
          }
      });
    $('.inp').keydown(function(e){
        if (e.keyCode == 27) {
            $(this).val("");
            $(".search-reset").fadeOut();
        }
    });
    $('.search-reset').click(function(event) {
        $(".commentlist tr").show();
        $('.inp').val('');
        $('.search-reset').fadeOut();
        });

/* END READY */
});
    
      
/* BTN TWITTER */
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');




