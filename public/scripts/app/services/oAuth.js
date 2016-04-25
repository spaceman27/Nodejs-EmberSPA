var urlBuilder = [];
urlBuilder.push('response_type=code', 'client_id=', 'redirect_uri=', 'scope=profile email credential')
var linkedin = function() {
	var url = "https://www.linkedin.com/uas/oauth2/authorization?"+urlBuilder.join('&');
	var options = "width=500,height=500,left=" + (window . outerWidth - 500) / 2 + ',top=' + (window.outerHeight - 500) 2.5;
	window.open(url, '', options)
}