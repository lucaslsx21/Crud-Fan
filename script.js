document.getElementById("fanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Captura dos dados
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cpf = document.getElementById("cpf").value;
  const interesses = document.getElementById("interesses").value.toLowerCase();
  const eventos = document.getElementById("eventos").value.toLowerCase();
  const documento = document.getElementById("documento").files[0];
  const socialLink = document.getElementById("socialLink").value;
  const esportsLink = document.getElementById("esportsLink").value;

  // Simulação de "validação AI" no documento
  let docValid = false;
  if (
    documento &&
    (documento.type.includes("image/") || documento.type.includes("pdf"))
  ) {
    docValid = true;
  }

  // Simulação de leitura da rede social
  const redeSocialValida =
    socialLink.includes("instagram.com") || socialLink.includes("twitter.com");

  // Simulação de validação do link de e-sports
  const keywords = ["furia", "csgo", "valorant", "lol", "esports"];
  let perfilValido = keywords.some((keyword) =>
    esportsLink.toLowerCase().includes(keyword)
  );

  // Montar o resultado
  let output = `<h3>Resultado:</h3>`;
  output += `<p><strong>Nome:</strong> ${nome}</p>`;
  output += `<p><strong>Endereço:</strong> ${endereco}</p>`;
  output += `<p><strong>CPF:</strong> ${cpf}</p>`;

  output += `<p><strong>Documento:</strong> ${
    docValid ? "Documento válido ✅" : "Documento inválido ❌"
  }</p>`;
  output += `<p><strong>Rede Social:</strong> ${
    redeSocialValida ? "Conectado ✅" : "Não reconhecido ❌"
  }</p>`;
  output += `<p><strong>Perfil eSports:</strong> ${
    perfilValido ? "Relevante ✅" : "Não relevante ❌"
  }</p>`;

  if (docValid && redeSocialValida && perfilValido) {
    output += `<p style="color:green;"><strong>Status Final: Cadastro aprovado! 🎮</strong></p>`;
  } else {
    output += `<p style="color:red;"><strong>Status Final: Cadastro incompleto. Verifique seus dados.</strong></p>`;
  }

  document.getElementById("result").innerHTML = output;
  document.getElementById("result").style.display = "block";

  // Adiciona esta linha para limpar os campos
  document.getElementById("fanForm").reset();

  document.getElementById('documento').value = '';


  // Mostra alerta de sucesso
  alert("Cadastro enviado com sucesso! 🎉");
});
