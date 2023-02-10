//realizei utilizando a criação de inputs conforme o n° solicitado pelo usuário. para isso, utilizei o for.

function criarInputs() {
  const qtdNotas = parseInt(document.getElementById("qtdNotas").value);
  const form = document.getElementById("form");

  if (!qtdNotas) {
    return erro();
  }

  for (let i = 0; i < qtdNotas; i++) {
    const label = document.createElement("label");
    label.innerHTML = `Nota ${i + 1}: `;
    const input = document.createElement("input");
    input.type = "number";
    input.setAttribute("min", "0");
    input.name = `info${i + 1}`;
    form.appendChild(label);
    form.appendChild(input);
  }

  const btnEnviar = document.createElement("input");
  btnEnviar.type = "button";
  btnEnviar.classList.add("botao");
  btnEnviar.value = "Calcular Média";
  btnEnviar.addEventListener("click", () => {
    calcularMedia(qtdNotas);
  });
  form.appendChild(btnEnviar);
}

function calcularMedia(qtdNotas) {
  const resultado = document.getElementById("resultado");
  let total = 0;

  for (let i = 0; i < qtdNotas; i++) {
    const inputValue = document.forms[0][`info${i + 1}`].value;

    if (!inputValue) {
      return erro();
    }

    total += parseInt(inputValue, 10);
  }

  const media = qtdNotas / total;
  resultado.textContent = media.toFixed(2);
}

function erro() {
  const x = document.getElementById("snackbar");
  x.classList.add("show");
  setTimeout(() => {
    x.classList.remove("show");
  }, 3000);
}
