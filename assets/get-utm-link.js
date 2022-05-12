function addOrigemNoLink(id_link, parametro_destino = 'src', parametro_origem = 'utm_content'){
	var link_href = document.getElementById(id_link).href;
	var link_conector = link_href.indexOf("?") > -1 ? "&" : "?";
	link_href += link_conector + parametro_destino + '=' + getOrigem(parametro_origem);
	document.getElementById(id_link).href = link_href;
}

function addOrigemUrl(parametro_origem = 'utm_content', parametro_destino = 'src'){
	var parametroDestino = getQueryVariable(parametro_destino);
	if(parametroDestino == null){
		var origem_ = getOrigem(parametro_origem);
		insertParam(parametro_destino, origem_);
	}
}

function addOrigemCampoOculto(id_campo, parametro_origem = 'utm_content'){
	var origem_ = getOrigem(parametro_origem);
	document.getElementById(id_campo).value = origem_;
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

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    var kvp = document.location.search.substr(1).split('&');
    let i=0;

    for(; i<kvp.length; i++){
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if(i >= kvp.length){
        kvp[kvp.length] = [key,value].join('=');
    }

    var site_url = document.location.href;
    var params = '';
    
    if(site_url.includes("?"))
    	params = kvp.join('&');
    else
    	params = kvp.join('?');

    document.location.search = params;
}

function addSourceLL(parametro_origem = 'utm_content') {
	var origem = getOrigem(parametro_origem);
	document.getElementById("source").value = origem;
}
