# MVP Arquitetura de Software - Projeto de Frontend

Este é o repositório do projeto de frontend do MVP Arquitetura de Software da PUC-Rio. Neste projeto, desenvolvemos uma interface de usuário utilizando React Vite e StyledComponents que se comunica com uma API REST em Python Flask. Além disso, utilizamos a API pública Fake Store API para enriquecer nossa aplicação.

## Requisitos do Projeto

Certificamos que este projeto atende aos seguintes requisitos:

### Componente A (Frontend)

- Desenvolvimento de uma interface do usuário utilizando React Vite e StyledComponents.
- A interface do usuário faz chamadas a pelo menos 5 rotas diferentes da nossa API Python Flask.
- Documentação da interface do usuário está disponível neste README.
- Dockerfile com todo o processo de implementação da solução em um container Docker.

### Componente B (Integração com API Externa)

- Usamos a API pública Fake Store API para enriquecer nossa aplicação.
- A documentação do componente A (frontend) menciona a API externa utilizada, incluindo informações sobre licença de uso, cadastro (se necessário) e rotas utilizadas.

### Organização dos Códigos

- Criamos um repositório separado para o componente A (frontend).
- Mantemos a qualidade da organização do código neste repositório.

## Como Executar

Para executar este projeto em sua máquina, siga os passos abaixo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/mvp_arquitetura_software_pucrio_frontend.git
      ```

   Navegue para o diretório do projeto:


```
cd mvp_arquitetura_software_pucrio_frontend
```

Instale as dependências:

```
npm install
```

Inicie a aplicação:

```
npm run dev
```

A aplicação estará disponível em http://localhost:5173.

## Documentação da Interface do Usuário

A interface do usuário foi desenvolvida com React Vite e StyledComponents. Ela se comunica com a API Python Flask, que está disponível neste repositório.

A interface do usuário é composta por várias páginas e componentes que fazem chamadas para as rotas da API Flask. Abaixo, listamos as principais funcionalidades da interface:

- Página Inicial: Exibe informações gerais da aplicação.
- Produtos: Lista produtos obtidos da Fake Store API.
- Carrinho de Compras: Permite adicionar produtos ao carrinho e realizar compras fictícias.


Docker
Este projeto inclui um Dockerfile que permite empacotar a aplicação em um container Docker. Certifique-se de que o Docker esteja instalado em sua máquina e execute o seguinte comando para criar e executar o container:

```
docker build -t mvp-frontend .
```

```
docker run -p 80:80 mvp-frontend
```

A aplicação estará disponível em http://localhost.

