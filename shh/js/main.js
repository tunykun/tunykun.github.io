var ayAi = new Array;
    $.get('ai.txt', function(data){
            var newScript = data.split('\n');
            ayAi = newScript.concat();
            console.log(ayAi[1]);
            console.log(newScript[1]);
        });

var ai = ["....", "Who are you?"];
var curDia = 0;

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {

  showText("#msg", ayAi[curDia], 0, 100);   

});

function advanceText() {
	curDia++;
}