/**
 * 
 */

function setCookie(name, value, daysToLive){
	if(navigator.cookieEnabled == true){
		var cookie = name + "=" + encodeURIComponent(value);
		if(typeof daysToLive === "number"){
			cookie += "; max-age=" + (daysToLive*60*60*24);
		}
		document.cookie = cookie;
	}
}

function getCookie(requested_name){
	if(navigator.cookieEnabled == false)return null;
	
	var cookies = {};
	var all = document.cookie;
	if(all === "")return null;
	var list = all.split("; ");
	for(var i=0; i < list.length; i++){
		var cookie = list[i];
		var p = cookie.indexOf("=");
		var found_name = cookie.substring(0,p);
		if(found_name == requested_name){
			var value = cookie.substring(p+1);
			value = decodeURIComponent(value);
			return value;
		}
	}
	return null;
}