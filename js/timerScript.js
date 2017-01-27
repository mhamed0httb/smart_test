

$(document).ready(function() {
    var timer = 'true',
        min = 0,
        sec = 0,
        perc = 612,
        percm = perc;

    startTimer(timer);
    

    function startTimer(func) {
        timer = !timer;
        if (func) {

            timerInt = setInterval(function() {
                sec++;
                perc = perc - (percm / 5);

                if (sec >= 5) {
                    clearInterval(timerInt);
                }
				
				
				

                if (sec <= 9)
                    sec = '0' + sec;

                $('.c-c').css('stroke-dashoffset', perc);
                $('.t-time').text(min + ':' + sec);

                
            }, 1000);
        } else {
            clearInterval(timerInt);

        }
    };

});