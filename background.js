/*
 * 
 * 
 */

var enabled = false;

chrome.browserAction.onClicked.addListener(function() {
	if(!enabled) {
		enabled = true;
		caffeineEnable();
	} else {
		enabled = false;
		caffeineDisable();
	}
});


function caffeineEnable() {
	chrome.experimental.power.requestKeepAwake( function(result) { 
		//console.log(result); 
	});
	chrome.browserAction.setIcon({path: '/caffeineEnabled.png'});
	//chrome.browserAction.setBadgeText({ text: "mmm" });
	console.log('requestKeepAwake: '+enabled);
}

	
function caffeineDisable() {
	chrome.experimental.power.releaseKeepAwake( function(result) { 
		//console.log(result); 
	});
	chrome.browserAction.setIcon({path: '/caffeineDisabled.png'});
	//chrome.browserAction.setBadgeText({ text: ''});
	console.log('releaseKeepAwake: '+enabled);
}

