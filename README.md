# GastroMatch

Plataforma de experiências gastronômicas que conecta usuários a chefs e restaurantes por meio de receitas exclusivas, técnicas profissionais, videoaulas e experiências gastronômicas.

## Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3, JavaScript

* **Back-end:** Python, FastAPI, Uvicorn

* **Banco de Dados:** MySQL

## Estrutura do projeto

```
GastroMatch/
├── index.html          # Página principal
├── README.md           # Documentação do projeto
├── main.py             # Servidor e rotas da API (FastAPI)
├── conexao.py          # Script de conexão com o MySQL
├── assets/             # Imagens, ícones e recursos estáticos
├── css/
│   └── style.css       # Estilos e responsividade
└── js/
    └── script.js       # Interações e lógica da interface

```

## Como Executar o Projeto

### 1. Front-end

1. Baixe ou clone o repositório.

2. Mantenha a estrutura de pastas exatamente como apresentada acima.

3. Abra o arquivo `index.html` em qualquer navegador (ou utilize a extensão **Live Server** no VS Code).

### 2. Back-end e Documentação Swagger (`/docs`)

1. Abra o terminal na raiz do projeto (`GastroMatch`).

2. Instale as dependências necessárias:

   ```
   pip install fastapi uvicorn mysql-connector-python
   
   ```

3. Certifique-se de que o MySQL está rodando e execute o servidor FastAPI com o Uvicorn:

   ```
   uvicorn main:app --reload
   
   ```

4. Acesse a documentação interativa e página de testes automática no seu navegador:  **`http://127.0.0.1:8000/docs`**

## Como Testar a API pelo Swagger UI

1. Com o servidor rodando, abra `http://127.0.0.1:8000/docs`.

2. Clique no endpoint que deseja testar (ex: `POST /api/auth/register` ou `GET /api/receitas`).

3. Clique em **"Try it out"**.

4. Preencha os campos com os dados desejados e clique em **"Execute"**.

5. Verifique a resposta em JSON emitida pela API e enviada diretamente ao MySQL.

## Organização

* **HTML:** Estrutura da interface em `index.html`.

* **CSS:** Estilos, layout, responsividade e animações em `css/style.css`.

* **JavaScript:** Navegação e comportamentos do Front em `js/script.js`.

* **Python (FastAPI):** Lógica da API, endpoints e regras de negócio em `main.py`.

* **MySQL:** Persistência de dados para usuários, criadores, receitas e transações.