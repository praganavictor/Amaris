# README

Encurtador de URL.
Esse projeto foi feito com nodejs, reactjs e mongodb

Para rodar o teste você precisa

- Fazer o download do codigo.
- Rodar o comando "docker-compose up -d"
- Em seguida entrar na pasta "client" então rodar "npm install" e "npm start"
  OBS: isso foi necessario pelo fato de eu não ter conseguido criar o servidor docker para rodar o frontend

## Teste

- Todos meus testes foram feitos enviando requisições para a aplicação via Postman
- Eu gostaria de ter tentado desenvolver testes automatizados, porém eu não estudo testes a algum tempo e decidi focar naquilo que eu mais sabia que é o desenvolvimento da aplicação.

## Rotas Backend

- POST /url
  Envia uma url para encurtar

- GET /urls
  Mostra todas as urls cadastradas

- GET /\*
  Verifica se existe alguma url modificada

- POST /login
  Autenticação do sistema

- POST /registrar
  Registrar usuario no sistema

## Rotas Frontend

- /
  Tela inicial e possibilita o cadastro de novas urls

- /login
  Permite autenticar no sistema

- /registrar
  Permite registrar um usuario

- /app
  É apenas uma rota privada

- /\*
  Qualquer outra URL será verificado se existe alguma URL modificada e será redirecionado para o endereço original anteriormente cadastrado
