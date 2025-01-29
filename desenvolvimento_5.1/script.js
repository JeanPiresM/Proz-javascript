const titulo = document.getElementById("titulo");

const lista_nao_ordenada = document.querySelector("ul");

const link_proz = document.querySelector("a");

const lista_ordenada = document.getElementById("lista-ordenada");

titulo.innerText = "PROZ - Cursos Tecnicos";

link_proz.innerText = "Você pode aprender sobre os 3 temas aqui!!!";

lista_nao_ordenada.innerHTML = `
  <li>JavaScript</li>
  <li>HTML</li>
  <li>CSS</li>
`;

lista_ordenada.innerHTML = `
  <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">Mais sobre JavaScript</a></li>
  <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">Mais sobre HTML</a></li>
  <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">Mais sobre CSS</a>
</li>
`;
