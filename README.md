## Trabalho 1

#### Disciplina: COM241 – Administração e Gerência de Redes de Computadores Professor: Bruno Guazzelli Batista

---

## Visão Geral

O objetivo principal desse projeto é que um jardim virtual seja gerenciado por múltiplos usuários ao mesmo tempo.

O funcionamento ocorre da seguinte forma:

- Jardim:

Existe um jardim composto por frutas, flores, animais e objetos.

- Frutas:

As frutas podem ser colhidas e regadas. Todas as frutas precisam ser regadas.

- Flores:

As flores podem ser polinizadas e regadas. Todas as flores precisam ser regadas.

- Animais:

Animais podem ser acariciados e precisam ser alimentados.

- Objetos:

Objetos podem ou não ter uma ação e essa ação pode ser executada por mais de um usuário. Os objetos como por exemplo banco, precisam ser limpos.

- Usuários

Os usuários podem interagir com todas as entidades do jardim. O estado da entidade precisa acompanhar a ação do usuário. Por exemplo:
Caso o usuário interaja com o objeto banco e execute a ação de sentar, ninguém deve conseguir sentar no banco até que esse usuário se levante.

- Tempo:

Conforme os usuários forem executando as ações como por exemplo regar plantas e alimentar os animais, de tempo em tempo essas plantas precisarão ser regadas novamente e os animais alimentados, como na vida real. O objetivo é que todos os usuários presentes no jardim cuidem dele sempre que for necessário. Será possível ver na tela cada usuário online e cada ação que ele realiza.

- Estatísticas:

Conforme os usuários vão executando as ações elas vão sendo contabilizadas e salvas no banco. Há um ranking de todos os usuários e todas as ações que eles fizeram. Quem executou mais ações serão os primeiros do ranking. Além disso, também é possível filtrar por categorias, como por exemplo filtrar quem alimentou mais os animais, regou as plantas, ou todas as ações no geral.

## Conceitos utilizados

- Arquitetura REST e Server-Sent Events para comunicação com o client.

- Execução de Jobs/Tasks repetidas ou únicas\.

- JsonWebToken para comunicação segura com o cliente.

- Utilizado conceito parcial de Clean Architecture do Robert C. Martin nas entidades do Jardim, <br>aplicando o conceito de Injeção de Dependências.

- Configuração Human-Friendly em YAML.

- MongoDB para armazenar IDs e estatísticas de cada usuário e estatísticas gerais.

- Gerenciamento de Erro e Response customizado.

## Tecnologias utilizadas

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

## Imagens do Jardim

Homepage
![Home1](https://i.imgur.com/k2dpQYz.png)

Ícones indicadores de atividades necessárias
![Home2](https://i.imgur.com/jWxUQY7.png)

Estatísticas Globais (Todas as interações em um dia)
![Stats1](https://i.imgur.com/1tlS4iG.png)

Top 10 Usuários que mais fizeram uma certa interação
![Stats2](https://i.imgur.com/oSl4tTc.png)

Tela de Login
![Login](https://i.imgur.com/iWtP0JY.png)

Página de erro 404
![404](https://i.imgur.com/JkHqvFY.png)

## Hierarquia de Entidades do Jardim

![Hierarquia](https://i.imgur.com/JJeTsHA.png)

## Rotas da REST API

- POST /api/v1/auth/login - Login único, cria um usuário e salva um cookie contendo as informações
- GET /api/v1/auth/checkSession - Utilizado para checar se o usuário está logado de forma rápida
- GET /api/v1/listen - Tenta comunicação com o servidor para se inscrever como usuário do Jardim
- POST /api/v1/update - Envia uma informação para o servidor
- GET /api/v1/stats/global - Recebe informações estatísticas dos dados globais daquele dia (Parâmetro: Data, formato YYYY-MM-DD)
- GET /api/v1/stats/users - Recebe informações estatísticas dos usuários em Rank Top 10 (Parâmetro: Ação feita (Harvest, Pollinate, Water e etc.)

# :rocket: Instruções para a replicação do ambiente desenvolvido

```bash
# Clone o repositório
$ git clone https://github.com/rodrigodsluz/server-sent-events-little-garden.git
```

## Backend

```bash
# Entre na pasta do back-end
$ cd server-sent-events-little-garden/back-end

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn run dev
```

## Front-end

```bash
# Entre na pasta do front-end
$ cd server-sent-events-little-garden/front-end

# Instale as dependências
$ yarn

# Rode a aplicação
$ yarn start
```

Vá para http://localhost:3000 para ver a aplicação rodando :)

## Bibliotecas utilizadas no front-end

- Toastify para notificações In-Browser
- Axios para requisições pro Backend

## Configuração em YAML

```

# Time Intervals Example: 1 h, 30 m, 15 m, 5 h...
# Always separate it with a space.

## Garden:
## This will be the initial amount
garden:
  fruits:
    strawberries: 3
    apples: 2
  flowers:
    sunflowers: 3
    roses: 2
    orchids: 2
  decorations:
    benches: 1
  animals:
    dogs: 2
    ducks: 1

# max = maximum instances of fruit spawned
fruits:
  apple:
    max: 5 <--- Número máximo de frutas em uma só vez
    growth_interval: '35 m'  <--- Quanto tempo para crescer até chegar no limite
    harvesting_interval: '1 h'
    watering_interval: '4 h'
  strawberry:
    max: 4
    growth_interval: '35 m'
    harvesting_interval: '30 m'
    watering_interval: '45 m'

flowers:
  sunflower:
    watering_interval: '1 h'
    pollination_interval: '45 m'
  rose:
    watering_interval: '1 h'
    pollination_interval: '45 m'
  orchid:
    watering_interval: '1 h'
    pollination_interval: '1 h'

decorations:
  bench:
    cleaning_interval: '30 m'

animals:
  dog:
    petting_interval: '5 m'
    feeding_interval: '35 m'
  duck:
    petting_interval: '15 m'
    feeding_interval: '45 m'

users:
  max_users: 4  <-- Usuarios Máximos do Jardim
  max_nickname_length: 15  <--- Número de Caracteres Máximos de um Usuário
```

## Feito por:

- Rodrigo Duarte Silva Luz - 2019003520
- João Lucas Ribeiro - 2019005856
- Robson de Arruda - 2019013624
- Lucas Eduardo Barbos De Siqueira - 2019000045

## Muito obrigado :)
