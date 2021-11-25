# Instruções Para Rodar o projeto

1. Instale as dependencias do projeto
bash
 npm i 


2. crie o arquivo .env com as environment do projeto caso queira rodar mysql localmente
PORT=3000
MYSQL_DATABASE=plugWithUs
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_ROOT_PASSWORD=root
MYSQL_ROOT_HOST: 127.0.0.1
TZ=America/Sao_Paulo



3. rode docker-compose up no diretório do projeto ( caso não tenha docker-compose seguir os passos da instalação https://docs.docker.com/compose/install/)

4. rode
bash
 npx sequelize db:migrate
 
dentro do diretório do projeto

5. Agora é só chamar as rotas

/POST '/user'
/PUT '/user/:id'
/PATCH '/user/:id'
/GET '/user'
DELETE '/user/:id'