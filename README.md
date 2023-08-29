# Api Motor Shop

Este projeto tem como objetivo ,criar uma API para um ecommerce de carros<br/>

### Tecnologias utilizadas:
- Node.js
- Express.js
- TypeORM
- PostgreSQL

### Requisitos:
-  Node.js instalado 
-  PostgreSQL instalado 

### Configuração do banco de dados
Antes de executar a aplicação, é necessário configurar o banco de dados PostgreSQL. Certifique-se de que tenha criado um arquivo .env na raiz do projeto e edite suas informações de conexão com os dados necessários, substituindo as variáveis de ambiente de acordo com o arquivo .env.example.

## Rodando a aplicação

Para testar a aplicação deste projeto é necessário:

- clonar o repositório para sua máquina local;
- Na pasta raiz do projeto, execute o  seguinte comando para instalar as   dependências 
do backend:

- ####  execute o comando no seu terminal:
```bash
  npm install
```
ou
```bash
  npm i
```
### executando a aplicação:
<br/>

#### Backend

- Após terem sido adicionadas as variáveis de ambiente e instaladas as dependências, execute o seguinte comando no terminal.
```bash
  npm run typeorm migration:run -- -d src/data-source
```

- Para iniciar o servidor backend, na pasta raiz do projeto, execute o seguinte comando:
```bash
  npm run dev
```

O servidor backend será iniciado na porta 3000.
- Se preferir é possível ter acesso as requisições por um cliente HTTP de sua escolha, como o Insomnia ou Postman

### Features
<br/>
- [x] Criação de Usuário, o seu login<br/>
- [x] Recuperação de senha via Email<br/>
- [x] CRUD completo de carros (cadastrar, listar, atulizar e deletar)<br/>
- [x] CRUD completo de images dos carros<br/>
- [x] CRUD completo de comentários dos carros<br/>


## Endpoints:
<br/>

## Rotas para manipular o User

#### Para realizar o CRUD do usuário:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /user                      | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /user                      | Lista todos os usuários                           | Qualquer usuário, não necessita token  |
| PATCH  | /user/:id/                 | Atualiza parcialmente informações de  um usuário  | Apenas o dono da conta, necessita do token de autenticação |
| DELETE | /user/:id/                 | Exclui a conta                                    | Apenas o dono da conta, necessita do token de autenticação |       

.POST -/user<br/>
{<br/>
	"email": "user@mail.com",<br/>
	"password": "1234",<br/>
	"name": "User",<br/>
	"cpf": "00000000000",<br/>
	"phone": "000000000",<br/>
	"birthdate": "2000-01-01",<br/>
	"zipcode": "123-123",<br/>
	"state": "state",<br/>
	"city": "city",<br/>
	"street": "street",<br/>
	"number": "0",<br/>
	"account_state": "seller" <br/>
}<br/>

Obs. O campo "account_state" pode ser definido como "seller" caso o usuário seja um vendedor, ou como "buyer" caso o novo usuário seja um comprador.

#### Para realizar o login:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /login                     | Login de usuário                                  | Qualquer usuário, não necessita token  |

.POST -/login<br/>
{<br/>
  "email":"user@mail.com",<br/>
  "password":"1234"<br/>
}<br/>

#### Envio do Email e atualização de senha:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /user/resetUserPassword    | Envio de Email para ecuperação de senha           | Qualquer usuário, não necessita token  |
| PATCH  | /user/resetUserPassword/:rest_token | Acesso através do Email para atualização de senha | Qualquer usuário, não necessita token  |

.POST -/user/resetUserPassword<br/>
{<br/>
  "email":"user@mail.com",<br/>
}<br/>

.PATCH -/user/resetUserPassword/:reset_token<br/>
{<br/>
  "password":"1234"<br/>
}<br/>

## Rotas para manipular o Car
### Para realizar o CRUD do carro:
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
|GET     | /car                       | Lista todos os carros cadastrados                 | Qualquer usuário, não necessita token |
|GET     | /car/user                  | Lista todos os carros cadastrados quer pertencem a um usuário | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
|GET     | /car/:id                   | Lista um dos carros cadastrados                   | Qualquer usuário, não necessita token |
|POST    | /car                       | Cria um novo carro                                | Usuário com nivel de "seller" que esteja logado, necessita do token de autenticação |
|PATCH   | /car/:id                   | Atualiza o contato                                | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
|DELETE  | /car/:id/                  | Exclui uma contaro                                | Usuário dono da conta ques esteja logado, necessita do token de autenticação |                

.POST -/car<br/>
{<br/>
  "name": "Car",<br/>
  "brand": "Car Brand",<br/>
  "model": "Car Model",<br/>
	"color": "Color",<br/>
	"km": 0,<br/>
  "year": "2000",<br/>
  "fuel": "Gasolina",<br/>
  "value": 100,<br/>
  "description": "The Car",<br/>
  "is_published": true,<br/>
  "carImages":<br/> 
    [{<br/>
      "url": "https://example.com/car2.jpg"<br/>
    },<br/>
		{<br/>
      "url": "https://example.com/car2.jpg"<br/>
    }]<br/>
}<br/>

### Para adicionar e remover imagens dos carros:
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /car/car-Image/:id         | Adição eu uma nova imagem a um carro especifico   | Usuário dono da conta ques esteja logado, necessita do token de autenticação  |
| DELETE | /car-Image/:id/image:imageId | Deleçã de uma imagem que pertence a um carro especifico | Usuário dono da conta ques esteja logado, necessita do token de autenticação   |

.POST -/car/car-Image/:id<br/>
{<br/>
	"url": "https://example.com/car2.jpg"<br/>
}
