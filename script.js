/* =====================================================
   SCRIPT DO SITE ART STYLO
   Faz só 3 coisas simples:
   1) abre e fecha o menu no celular
   2) esconde a foto quebrada (quando a imagem ainda não foi colocada)
   3) coloca o ano atual no rodapé
===================================================== */


/* ---------- 1) MENU DO CELULAR ---------- */
var botaoMenu = document.getElementById("botaoMenu");
var menu = document.getElementById("menu");

// Clicou no botão "Menu": abre ou fecha
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// Clicou em um link do menu: fecha o menu
var linksMenu = document.querySelectorAll(".menu a");

for (var i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
}


/* ---------- 2) FOTOS QUE AINDA NÃO FORAM COLOCADAS ---------- */
// Se a imagem não existir na pasta "imagens", a gente esconde
// a imagem e fica só o espaço com o texto "Foto ..."
var fotos = document.querySelectorAll(".foto img");

function esconderFoto(img) {
  img.style.display = "none";
}

for (var j = 0; j < fotos.length; j++) {
  fotos[j].addEventListener("error", function () {
    esconderFoto(this);
  });

  // Caso o erro já tenha acontecido antes do script rodar
  if (fotos[j].complete && fotos[j].naturalWidth === 0) {
    esconderFoto(fotos[j]);
  }
}


/* ---------- 3) ANO NO RODAPÉ ---------- */
document.getElementById("ano").textContent = new Date().getFullYear();
