function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	navigator.splashscreen.show();
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personal_info() {
	i = 'Name: Paloma' + '\n' + '=====' + '\n' + 
	       'Surname : Gołębiowska' + '\n' + 
		   'Age : 25' + '\n';
	navigator.notification.alert(i);
}

function network() {
		var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
	navigator.notification.alert('Connection type: ' + states[networkState]);
}

function onSuccess(acceleration) {
		alert('Acceleration X: ' + acceleration.x + '\n' +
          		'Acceleration Y: ' + acceleration.y + '\n' +
          		'Acceleration Z: ' + acceleration.z + '\n' +
          		'Timestamp: '      + acceleration.timestamp + '\n');
}


function onError() {
    	alert('onError!');
}

var options = {
		frequency: 3000
};

function motionInfo(){
		var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		if (watchID) {
				setTimeout(function () {
					navigator.accelerometer.clearWatch(watchID);
					watchID = null;
				}, 7000);
		}
}
	
	

