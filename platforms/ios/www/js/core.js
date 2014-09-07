// var keyStatus = document.getElementById('status');

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	// Keyboard.hideFormAccessoryBar(true);
	// Keyboard.shrinkView(true);
	// Keyboard.disableScrollingInShrinkView(true);
	StatusBar.overlaysWebView(false);
	StatusBar.backgroundColorByHexString("#E27252;");

	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	cordova.plugins.Keyboard.disableScroll(true);

	/*if (navigator.userAgent.match(/(iPad.*|iPhone.*|iPod.*);.*CPU.*OS 7_\d/i)) {
		document.getElementById("top-header").style.marginTop="20px";
		document.getElementById("text-area").style.paddingTop="64px";
	}*/
	// document.getElementById("text-area").style.height = window.innerHeight+'px';
// var windowWidth = window.innerWidth;
// var windowHeight = window.innerHeight;
// alert("height : " + windowHeight +" /+ width : "+ windowWidth);
}




window.addEventListener('native.showkeyboard', keyboardShowHandler);
function keyboardShowHandler(e){
    // alert('Keyboard height is: ' + e.keyboardHeight);
	// var windowWidth = window.innerWidth;
	// var windowHeight = window.innerHeight;
	// alert("height : " + windowHeight +" /+ width : "+ windowWidth);
}

window.addEventListener('native.hidekeyboard', keyboardHideHandler);
function keyboardHideHandler(e){
    // alert('Goodnight ' + e.keyboardHeight);

	// var windowWidth = window.innerWidth;
	// var windowHeight = window.innerHeight;
	// alert("height : " + windowHeight +" /+ width : "+ windowWidth);
}



$("#close-keyboard").click(function(){
	cordova.plugins.Keyboard.close();
});

$(document).ready(function() {
	$("#text-box").kooy();
});

$(".share-button").click(function(){
	var shareMessage = document.getElementById("text-box").value;
    var shareTitle = $(this).attr("data-shareto");

    switch (shareTitle){
    	case 'clear':
    		document.getElementById("text-box").value = "";
    		break;
    	case 'copy':
    		cordova.plugins.clipboard.copy(shareMessage);
    		break;
    	case 'paste':
    		cordova.plugins.clipboard.paste(function(pasteText){
    			if (pasteText) {
		    		document.getElementById("text-box").value = shareMessage+" "+pasteText;
    			}
    		});
    		break;
    	case 'facebook':
	    	window.plugins.socialsharing.shareViaFacebook(shareMessage, null /* img */, null /* url */, 
	    		function() {
	    			console.log('share ok');
	    		}, function(errormsg){
	    			console.log("nadannilla" + errormsg);
	    		});
    		break;
    	case 'twitter':
			window.plugins.socialsharing.shareViaTwitter(shareMessage);
    		break;
    	case 'sms':
	    	window.plugins.socialsharing.shareViaSMS(shareMessage, null /* see the note below */, 
	    		function(msg) {
	    			console.log('ok: ' + msg);
	    		}, function(msg) {
	    			console.log('error: nadannilla ' + msg);
	    		});
    		break;
    	case 'email':
			window.plugins.socialsharing.share(shareMessage);
    		break;
    	case 'whatsapp':
	    	window.plugins.socialsharing.shareViaWhatsApp(shareMessage, null /* img */, null /* url */, 
	    		function() {
	    			console.log('share ok');
	    		}, function(errormsg){
	    			console.log("nadannilla " + errormsg);
	    		});
    		break;
    	default:
    		alert("you haven\'t select anything yet");
    }

});