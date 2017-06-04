function main() {
 $('.menu-item').hide(); 
 $('.menu-selection').on('click', function() {
    $(this).next().slideToggle(300);
    //Turn classes on/off with toggle to change
    //$(this).toggleClass('active');
  });

}

$(document).ready(function($){
    var $container = $('.grid');
    setTimeout(function(){
        // initialize
        $container.masonry({
          columnWidth: 50,
          itemSelector: '.item'
        });
    }, 100);
});

$(document).ready(main);