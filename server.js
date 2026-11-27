
const http = require("http");

const port = process.env.PORT || 3000;
const nome = process.env.NOME_SITE || "Mostra Tech Escolar";

http.createServer((req, res) => {
  console.log("Acesso recebido: " + req.url);

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>${nome}</title>

<style>
body {
  font-family: Arial;
  background-color: #eeeeee;
  margin: 30px;
}

header {
  background-color: #234d70;
  color: white;
  padding: 20px;
  text-align: center;
}

main {
  background-color: white;
  padding: 20px;
}

h2 {
  color: #234d70;
}

li {
  margin: 10px;
}

footer {
  background-color: #234d70;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
</head>

<body>

<header>
<h1>${nome}</h1>
<p>Projetos de tecnologia feitos por Murilo de Almeida e Rafael Ventura da Silva</p>
</header>

<main>

<h2>Sobre o projeto</h2>
<p>
A MumuRafafaInc tem como objetivo apresentar projetos
de tecnologia feitos pelos alunos, mostrando suas ideias
e o que aprenderam durante o desenvolvimento.
</p>

<h2>Projetos apresentados</h2>
<ul>
<li>Robô seguidor de linha</li>
<li>Casa inteligente</li>
<li>Horta automatizada</li>
</ul>

<h2>Contato</h2>
<p>Organização: Equipe MumuRafafaInc</p>
<p>Número de Telefone: (XX) XXXXX-XXXX</p>
<p>Atendimento: Segunda a sexta-feira.</p>
<p>Local: Ambiente escolar, Jundiaí.</p>

</main>

<footer>
<p>Projeto de Computação em Nuvem II</p>
</footer>

</body>
</html>`);
}).listen(port, () => {
  console.log("Servidor iniciado na porta " + port);
});
