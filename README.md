# Fundamentos NodeJS

## Padrão de importação

O nodejs utiliza como padrão de importação o CommonJS, que é um padrão de importação de módulos do javascript. O padrão de importação do CommonJS é o `require` e o `module.exports`.

O `require` é uma função que recebe como parâmetro o caminho do módulo que deseja importar. O `module.exports` é uma variável que recebe o módulo que deseja exportar.

Exemplo de importação:

```js
const express = require("express");
```

Exemplo de exportação:

```js
module.exports = app;
```

Por outro lado, o nodejs também possui o padrão de importação/exportação do ESModules, que é o padrão de importação do javascript. O padrão de importação do ESModules é o `import` e o `export`.

Para utilizar o padrão de importação do ESModules, é necessário adicionar a seguinte configuração no `package.json`:

```json
"type": "module"
```

Exemplo de importação:

```js
import express from "express";
```

Exemplo de exportação:

```js
export default app;
```

## Importação de módulos nativos do node

Recentemente o node recomenda a utilização do prefixo `node:` para importar módulos nativos para distinguir os módulos nativos do node dos módulos do npm. Por exemplo, para importar o módulo `http` do node, é necessário utilizar o seguinte código:

```js
import http from "node:http";
```

## Httpie

O httpie é uma ferramenta de linha de comando para fazer requisições http. Para utilizar o httpie, é necessário instalar o pacote `httpie` no seu sistema operacional.

O httpie possui uma sintaxe parecida com o curl, porém é mais simples de utilizar. Para fazer uma requisição GET, é necessário utilizar o seguinte comando:

```bash
http GET http://localhost:3333
```

A ferramenta auxilia na visualização dos dados da requisição, como o status code, o header e o body.

## Executando no modo de desenvolvimento

Para facilitar o desenvolvimento, as últimas versões do node trouxeram o recurso `--watch` que faz com que o nodejs fique observando as alterações nos arquivos e reinicie o servidor automaticamente.

Para executar o nodejs no modo de desenvolvimento, é necessário utilizar o seguinte comando:

```bash
node --watch server.js
```

## Rotas com nodejs

Para criar uma rota com o nodejs de forma nativa, é necessário utilizar o módulo `http` do node. O módulo `http` possui uma função chamada `createServer` que recebe como parâmetro uma função que recebe como parâmetro o objeto `request` e o objeto `response`. O objeto `request` possui as informações da requisição, como o método, a url, o header, o body, etc. O objeto `response` possui as funções para enviar a resposta da requisição, como o status code, o header, o body, etc.

Exemplo de rotas com o nodejs:

```js
const http = require("http");

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return res.end("Listagem de usuários");
  }

  if (method === "POST" && url === "/users") {
    return res.end("Cadastro de usuários");
  }

  return res.end("Hello, world!");
});
```

## Stateful e Stateless

A diferença entre os dois tipos de aplicações é que as aplicações stateful mantém o estado da aplicação em memória, enquanto as aplicações stateless não mantém o estado da aplicação em memória.

Com manter em memória, quer dizer que as aplicações stateful mantém o estado da aplicação em uma variável, enquanto as aplicações stateless não mantém o estado da aplicação em uma variável, mantendo então o estado da aplicação em um banco de dados.

## Headers

Os headers são informações que são enviadas junto com a requisição. Os headers são utilizados para enviar informações como o tipo de conteúdo, o tamanho do conteúdo, o tipo de autenticação, etc.

Em se tratando desses headers, podemos tanto passa-los na requisicão, como também modificalos na resposta.

## Buffers

Os buffers são uma forma de armazenar dados de forma binária. Os buffers são utilizados para armazenar dados de forma binária, como por exemplo, os dados de uma imagem, um vídeo, um arquivo, etc.

## Middlewares

Os middlewares são funções que recebem como parâmetro o objeto `request`, o objeto `response` e a função `next`. O objeto `request` possui as informações da requisição, como o método, a url, o header, o body, etc. O objeto `response` possui as funções para enviar a resposta da requisição, como o status code, o header, o body, etc. A função `next` é uma função que é utilizada para executar o próximo middleware.

Exemplo de middleware:

```js
function middleware(request, response, next) {
  console.log("Middleware executado");

  next();
}
```

## Query params, route params e request body

- Os query params são parâmetros que são enviados na url da requisição. Os query params são utilizados para enviar informações como filtros, paginação, etc.

```bash
http GET http://localhost:3333/users?name=Diogo
```

- Os route params são parâmetros que são enviados na url da requisição. Os route params são utilizados para enviar informações como identificadores, etc.

```bash
http GET http://localhost:3333/users/1
```

- O request body é um objeto que é enviado na requisição. O request body é utilizado para enviar informações como dados de cadastro, dados de atualização, etc.

```bash
http POST http://localhost:3333/users name=Diogo
```
