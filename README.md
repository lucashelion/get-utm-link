Funcionalidade que busca o parâmetro utm_content na url do site e adiciona esse dado no link referenciado

Exemplo de uso:

<code>
<script src="https://lucashelion.com.br/dev/get-utm-link/assets/get-utm-link.js"></script>
<script>
addOrigemNoLink("botao1");
</script>
</code>

A função addOrigemNoLink é a responsável por buscar o parâmetro utm_content na url e adicionar esse dado no link referenciado. 
Essa função recebe como parâmetro o ID do elemento hyperlink o qual deseja-se adicionar o dado informado no utm_content.

O dado do utm_content é então adicionado no conteúdo do atributo href do hyperlink, com o parâmentro src.

Suponha que parâmetro utm_content possua o valor teste_lucas. 
Através da função addOrigemNoLink o seguinte dado será adicionado no hyperlink referenciado: &src=teste_lucas
