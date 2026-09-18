function toggleBotao() {  //Função - Botão para o MENU no Mobile.
  let hidden = document.getElementById("hidden");//esse ("mensagem") é id da mensagem
                                        
  // A condição está em none           //opcional esse
  if (hidden.style.display === "none" || hidden.style.display === "") {
    hidden.style.display = "block"; // Mostra o conteudo
    botao.innerText = "X"; // Muda texto do botão
  } else {
    hidden.style.display = "none"; //Esconde o conteudo
    botao.innerText = "☰"; // Muda texto de volta
  }

  // Fecha o menu ao clicar em qualquer link dentro dele
document.querySelectorAll("#hidden a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("hidden").style.display = "none"; // esconde o menu quando clicado no link
    document.getElementById("botao").innerText = "☰";  // muda o texto quando clicamos em algum link
  });
});
}

//Envio do formulário de orçamento via AJAX - não sai da página nem passa pela tela do FormSubmit
const formOrcamento = document.getElementById("formOrcamento");
if (formOrcamento) {
  const btnEnviar = document.getElementById("btnEnviar");
  const formSuccess = document.getElementById("formSuccess");
  const formError = document.getElementById("formError");
  const textoOriginal = btnEnviar.textContent;
 
  formOrcamento.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o redirecionamento padrão do FormSubmit
 
    formError.classList.remove("show");
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando..."; // marca como enviando
 
    const dados = new FormData(formOrcamento);
    const urlAjax = formOrcamento.action.replace("formsubmit.co/", "formsubmit.co/ajax/"); // endpoint AJAX do FormSubmit
 
    fetch(urlAjax, {
      method: "POST",
      body: dados,
      headers: { "Accept": "application/json" }
    })
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Falha no envio");
        formOrcamento.style.display = "none"; // esconde o formulário
        formSuccess.classList.add("show"); // mostra a mensagem de sucesso
      })
      .catch(() => {
        formError.classList.add("show"); // mostra mensagem de erro
        btnEnviar.disabled = false;
        btnEnviar.textContent = textoOriginal; // volta o texto do botão
      });
  });
}
 
//Para surgir o texto quando rola a pagina
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));

