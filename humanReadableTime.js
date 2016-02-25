// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// humanReadable(0), '00:00:00',
// humanReadable(5), '00:00:05',
// humanReadable(60), '00:01:00',
// humanReadable(86399), '23:59:59',

var humanReadable = function(num){
	var hour = 0, min = 0, sec = 0;
	if(num < 60){
		sec = num;
	} else if(num < 3600) {
		min = Math.floor(num/60);
		sec = (num%60);
	} else {
		hour = Math.floor(num/3600);
		min = Math.floor((num - (3600*hour))/60);
		sec = num - (3600*hour) - (min*60);
	};
	if(hour === 0){
		hour = "00";
	};
	if(min === 0){
		min = "00";
	};
	if(sec === 0){
		sec = "00";
	};
	if(hour < 10 && hour != 0){
		hour = "0" + hour;
	};
	if(min < 10 && min != 0){
		min = "0" + min;
	};
	if(sec <10 && sec != 0){
		sec = "0" + sec;
	};
	return hour + ":" + min + ":" + sec;
}


