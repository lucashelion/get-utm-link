function addOrigemNoLink(id_link, parametro_destino = 'src', parametro_origem = 'utm_content'){
	var link_href = document.getElementById(id_link).href;
	var link_conector = link_href.indexOf("?") > -1 ? "&" : "?";
	link_href += link_conector + parametro_destino + '=' + getOrigem(parametro_origem);
	document.getElementById(id_link).href = link_href;
}

function addOrigemParametro(id_parametro, parametro_origem = 'utm_content'){
	var origem_ = getOrigem(parametro_origem);
	document.getElementById(id_parametro).value = origem_;
}

function getOrigem(parametro = 'utm_content') {
	var origem = getQueryVariable(parametro);
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

function addSourceLL(parametro_origem = 'utm_content') {
	var origem = getOrigem(parametro_origem);
	document.getElementById("source").value = origem;
}
