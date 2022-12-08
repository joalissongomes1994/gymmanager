

<!-- Logotipo -->
<h1 align="center">
  Gymmanager
</h1>

<!-- Badges -->
<p align="center">
<img src="https://img.shields.io/badge/made%20by-Joalisson%20Gomes-7159c1?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joalissongomes1994/coffee-delivery?color=7159c1&style=flat-square">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joalissongomes1994/coffee-delivery?color=7159c1&style=flat-square">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/joalissongomes1994/coffee-delivery?color=7159c1&style=flat-square">
</p>

<!-- Sobre o Projeto -->
## Sobre o Projeto

O projeto Gymmanager foi desenvolvido visando fixar conceitos de desenvolvimento web, ministrados durante o bootcamp [LaunchBase](https://rocketseat.com.br/launchbase) da [Rocketseat](https://rocketseat.com.br/). Nele, além do frontend, também temos um CRUD responsável pelo controle de instrutores e membros.

<br>

## Tecnologias utilizadas

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [Javascript](https://devdocs.io/javascript/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [PostgreSQL](https://www.postgresql.org/)

<br>

## Instalação e uso

Para rodar a aplicação, você precisa ter instalado em sua máquina o [Node](https://nodejs.org/en/) e o [Postgres](https://www.postgresql.org/).

Siga os passos abaixo:
```bash
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/joalissongomes1994/gymmanager.git
# ou use a opção de download.
    
# Entre na pasta com 
$ cd gymmanager

# Instale as dependências
$ npm install
    
# Crie e importe o banco de dados
$ psql -U postgres -c "CREATE DATABASE gymmanager"
$ psql -U postgres -d gymmanager <gymmanager.sql
# Você também pode criar e importar manualmente o banco de dados usando o Postbird ou pgAdmin.
    
# Conexão com o banco de dados: edite o arquivo db.js dentro da pasta src/config com o seu user e password do Postgres.

# Rode a aplicação
$ npm start
```

<br>
