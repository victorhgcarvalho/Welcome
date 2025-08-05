function mostrarMensagem() {
  document.getElementById("intro").classList.add("oculto");
  document.getElementById("main").classList.remove("oculto");
}

function tocarMusica() {
  const audio = document.getElementById("audio");
  audio.play();
}

