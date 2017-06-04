var ai = {
  'dialogue': ["....", "You... How did you get here?", "No, before that... Have we met before?"],
   'choices': [0, 0, 2]


}


var curDia = 0;
var running = false;

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {
  showText("#msg", ai['dialogue'][curDia], 0, 100);   
});

function advanceText() {
	curDia++;
  $('#msg').empty();
  showText("#msg", ai['dialogue'][curDia], 0, 100); 
}