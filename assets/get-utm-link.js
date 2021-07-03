function addOrigemNoLink(id_link){
	var link_href = document.getElementById(id_link).href;
	link_href += '&src=' + getOrigem();
	document.getElementById(id_link).href = link_href;
}

function getOrigem() {
	var origem = getQueryVariable('utm_content');
	origem = (origem == null || origem == 'null') ? getQueryVariable('src') : origem;
	origem = (origem == null || origem == 'null') ? getQueryVariable('website') : origem;
	origem = (origem == null || origem == 'null') ? 'link-direto' : origem;
	return origem;
}

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return null;
}
