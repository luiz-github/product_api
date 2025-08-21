# Product API

## Descrição:
O projeto consiste no desenvolvimento de uma API RESTful para gerenciamento de produtos, implementando operações CRUD (Create, Read, Update, Delete) e suporte à paginação para melhor desempenho e organização dos dados.

## Requisitos:
- Node.js
- Docker

## Rotas da API:

### Criar Produto
- **POST** "/api/v1/product"<br>
    - **Descrição:** Criar um novo produto.
    - **Parametros (Body JSON):**
        - name: Nome do produto.
        - description: Descrição do produto.
        - price: Preço do produto
      #### Exemplo:
        ``` bash
        {
            "name": "product1",
            "description": "product1 description",
            "price": 10
        }
        ```
### Atualizar Produto
- **PUT** "/api/v1/product/:id"<br>
    - **Descrição:** Atualizar produto por id.
    - **Parametros (Body JSON):**
        - name: Nome do produto.
        - description: Descrição do produto.
        - price: Preço do produto
      #### exemplo:
        ``` bash
        {
            "name": "product1",
            "description": "product1 description",
            "price": 10
        }
        ```
### Deletar Produto
- **DELETE** "/api/v1/product/:id"<br>
    - **Descrição:** Deletar produto por id.
    - **Parametros (query string):**
        - id: Identificador único de um produto.

### Listar Produtos
- **GET** "/api/v1/product?take=[value]&page=[value]&order=[value]"<br>
    - **Descrição:** Buscar todos os produtos.
    - **Parametros (query string):**
        - take(Padrão: 10): Indica quantos itens aparecerão por página.
        - page(Padrão: 0): Indica qual pagina aparecerá.
        - order(Padrão: "DESC"): Indica a ordem em que os itens aparecerão.
### Buscar Produto por ID
- **GET** "/api/v1/product/:id"<br>
    - **Descrição:** Buscar produto por id.
    - **Parametros (query string):**
        - id: Identificador único de um produto.

## Como executar:
``` bash
git clone https://github.com/luiz-github/product_api.git
git cd product_api
npm i
npm run dev
```
