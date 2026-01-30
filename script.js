const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("msg").value;

  let erros = [];

  if (nome.trim() === "") {
    erros.push("O nome é obrigatório!");
  }

  const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(email)) {
    erros.push("Por favor, insira um e-mail válido.");
  }

  if (mensagem.trim().length < 10) {
    erros.push("A mensagem deve ter pelo menos 10 caracteres!");
  }

  const erroDiv = document.getElementById("erro");

  if (erros.length > 0) {
    erroDiv.innerHTML = erros.join("<br>");
    erroDiv.style.color = "red";
  } else {
    erroDiv.innerHTML = "Formulário enviado com sucesso!";
    erroDiv.style.color = "green";
    formulario.reset();
  }
});
