let titulo = document.createElement("h1");

titulo.id = "titulo";

titulo.innerText = "Produto:";

const body = document.querySelector("body");

body.appendChild(titulo);

const produto = document.createElement("div");

produto.innerHTML = `
<p>Notebook Dell Alienware 17 R5<p/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S3JS4Jx0DxafQURTyjEZhwRO87Zj72UZDA&s"/>
<p> O Alienware 17 R5 é um notebook gamer de alta performance, equipado com uma tela de 17.3" Full HD antirreflexo, processador Intel Core i7 de 8ª geração, placa de vídeo NVIDIA GeForce GTX 1070 com 8GB de memória dedicada, 16GB de RAM e armazenamento híbrido com SSD de 256GB e HD de 1TB. Ideal para jogos de última geração e tarefas intensivas. Possui design robusto e iluminação RGB personalizável.<p/>
<p><strong>Preço: 12.500,00R$<strong/><p/>
`;

body.appendChild(produto);
