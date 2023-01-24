const xhr = new XMLHttpRequest();
xhr.open("GET", "clientes.json", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const clientes = JSON.parse(xhr.responseText);
        let clientesHtml = "";
        for (var i = 0; i < clientes.length; i++) {
            var cliente = clientes[i];
            clientesHtml += cliente.Id + " - " + cliente.Nome + " - " + cliente.Cpf + " - " + cliente.Telefone + "<br>";
        }
        document.getElementById("clientes").innerHTML = clientesHtml;
    }
};
//código para exibir os dados na página
