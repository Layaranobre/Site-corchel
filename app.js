function toggleBotao() {  //Botão para o MENU no Mobile.
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

//Para surgir o texto quando rola a pagina
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
});

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));

