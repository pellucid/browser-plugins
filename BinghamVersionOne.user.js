// ==UserScript==
// @name           Auto Login Boston Libraries
// @description    input username password to login
//
// Urls process this user script on
// @include        http://www.ocln.org/wp-public/*
//
// Chrome ignores the following
// Add any library dependencies here, so they are loaded before your script is loaded.
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js
// @run-at         document-end
// ==/UserScript==

//
//  var script = document.createElement("script");
//  script.setAttribute("src", "//code.jquery.com/jquery-latest.min.js");
//  script.addEventListener('load', function() {
//    var script = document.createElement("script");
//    script.textContent = "(" + callback.toString() + ")();";
//    document.body.appendChild(script);
//  }, false);
//  document.body.appendChild(script);

//	var header = $("a.sortable:contains('Estimate')")[0];

//	if(header!=null){
//		var total=0; $('tr[_v1_nest="0"] td:nth-child(6)').each(function() {
//			total += parseInt($(this).text()) || 0; // empty string -> 0
//		});  
//		$('<div>' + total + '</div>').insertBefore(header);
//	}

function MyCode(){
	if(document.loginform){
		document.getElementsByName("user_id")[0].value="23490000301560"
		document.getElementsByName("password")[0].value="2609"
		document.loginform.submit();
	}
}
var jQuery = document.createElement("script"),
    inject = document.createElement("script");

jQuery.setAttribute("type", "text/javascript");
jQuery.setAttribute("src", "http://code.jquery.com/jquery-latest.js");

inject.setAttribute("type", "text/javascript");
inject.appendChild(document.createTextNode("(" + MyCode + ")()"));

document.body.appendChild(jQuery);
document.body.appendChild(inject);