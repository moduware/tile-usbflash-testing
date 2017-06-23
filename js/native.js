
/** ================ Handlers == */
function nativeDataUpdateHandler(data) {	
	
	if(data.state=='pluggedIn') {
			document.getElementById('usbStatus').textContent = "Connected";
	}
	else if(data.state=='pluggedOut') {
			document.getElementById('usbStatus').textContent = "Disconnected";
	}
}
