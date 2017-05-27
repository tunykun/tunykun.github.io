function main() {
 $('.menu-item').hide(); 
 $('.menu-selection').on('click', function() {
    $(this).next().slideToggle(300);
    //Turn classes on/off with toggle to change
    //$(this).toggleClass('active');
  });

}
//Waits for the html/css to load before starting js
$(document).ready(main);