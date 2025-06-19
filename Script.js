let numeroSecreto;
let tentativasRestantes;
const tentativasMaximas = 10;

iniciarJogo();

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número entre 1 e 100
  tentativasRestantes = tentativasMaximas;

  document.getElementById("tentativas").textContent = tentativasRestantes;
  document.getElementById("mensagem").textContent = "";
  document.getElementById("palpite").value = "";
  document.getElementById("palpite").disabled = false;
  document.querySelector("button[onclick='verificarPalpite()']").disabled = false;
  document.getElementById("reiniciarBtn").style.display = "none";
}

function verificarPalpite() {
  const palpiteInput = document.getElementById("palpite");
  const mensagem = document.getElementById("mensagem");
  const palpite = parseInt(palpiteInput.value); // Converte string para número inteiro

  // Validação
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
    return;
  }

  // Estrutura condicional
  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Parabéns! Você acertou!";
    encerrarJogo();
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "📉 O número secreto é menor que " + palpite + ".";
    tentativasRestantes--;
  } else {
    mensagem.textContent = "📈 O número secreto é maior que " + palpite + ".";
    tentativasRestantes--;
  }

  document.getElementById("tentativas").textContent = tentativasRestantes;

  if (tentativasRestantes <= 0 && palpite !== numeroSecreto) {
    mensagem.textContent = "😢 Você perdeu! O número era " + numeroSecreto + ".";
    encerrarJogo();
  }
}

function encerrarJogo() {
  document.getElementById("palpite").disabled = true;
  document.querySelector("button[onclick='verificarPalpite()']").disabled = true;
  document.getElementById("reiniciarBtn").style.display = "inline-block";
}

function reiniciarJogo() {
  iniciarJogo();
}
