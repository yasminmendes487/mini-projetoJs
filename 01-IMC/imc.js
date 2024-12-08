// Selecionar elementos do DOM
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

// Função para calcular o IMC
function calcularIMC() {
  const nome = document.getElementById("nome").value.trim();
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Validar campos de entrada
  if (!nome || !altura || !peso || altura <= 0 || peso <= 0) {
    resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  // Calcular o IMC
  const imcValor = peso / (altura * altura);

  // Determinar a classificação do IMC
  let classificacao = "";
  if (imcValor < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imcValor >= 18.5 && imcValor < 24.9) {
    classificacao = "Peso normal";
  } else if (imcValor >= 25 && imcValor < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  // Mostrar o resultado
  resultado.textContent = `Olá, ${nome}! Seu IMC é ${imcValor.toFixed(2)} (${classificacao}).`;
}

// Função para alternar o modo noturno
function alternarModoNoturno() {
  document.body.classList.toggle("dark-mode");
}

// Associar eventos aos botões
calcular.addEventListener("click", calcularIMC);

