from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="GastroMatch API", version="1.0")

# Configuração do CORS (Permite a comunicação com o Front-end)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite qualquer origem durante o desenvolvimento
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Função para obter conexão com o MySQL
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="", # Coloca a tua senha se definires uma
        database="gastromatch"
    )

# Modelos de dados para as requisições (Pydantic)
class UsuarioRegister(BaseModel):
    nome: str
    email: str
    senha: str

class UsuarioLogin(BaseModel):
    email: str
    senha: str

class ReceitaCreate(BaseModel):
    id_criador: int
    titulo: str
    descricao: str
    instrucoes_passo_a_passo: str
    link_videoaula: str
    categoria_restricao_alimentar: str
    tempo_preparo: int
    modelo_venda: str

# ---------------------------------------------------------
# ENDPOINTS DA API
# ---------------------------------------------------------

@app.get("/")
def home():
    return {"message": "API GastroMatch a rodar com sucesso!"}

# 1. Rota de Registo de Usuário (RF05)
@app.post("/api/auth/register", status_code=status.HTTP_201_CREATED)
def registrar_usuario(usuario: UsuarioRegister):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Verificar se o e-mail já existe
        cursor.execute("SELECT id_usuario FROM usuario WHERE email = %s", (usuario.email,))
        if cursor.fetchone():
            raise HTTPException(status_code=400, detail="E-mail já cadastrado!")

        # Inserir novo usuário
        sql = "INSERT INTO usuario (nome, email, senha, autenticado) VALUES (%s, %s, %s, TRUE)"
        cursor.execute(sql, (usuario.nome, usuario.email, usuario.senha))
        conn.commit()
        
        return {"message": "Usuário cadastrado com sucesso!"}
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))
    finally:
        cursor.close()
        conn.close()

# 2. Rota de Login (RF05)
@app.post("/api/auth/login")
def login(usuario: UsuarioLogin):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    cursor.execute("SELECT * FROM usuario WHERE email = %s AND senha = %s", (usuario.email, usuario.senha))
    user = cursor.fetchone()
    
    cursor.close()
    conn.close()
    
    if not user:
        raise HTTPException(status_code=401, detail="E-mail ou senha incorretos.")
        
    return {"message": "Login bem-sucedido!", "usuario": {"id": user["id_usuario"], "nome": user["nome"], "email": user["email"]}}

# 3. Rota para Listar Receitas Públicas (RF02)
@app.get("/api/receitas")
def listar_receitas(categoria: Optional[str] = None):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    
    if categoria:
        cursor.execute("SELECT * FROM receita WHERE categoria_restricao_alimentar = %s", (categoria,))
    else:
        cursor.execute("SELECT * FROM receita")
        
    receitas = cursor.fetchall()
    
    cursor.close()
    conn.close()
    
    return {"receitas": receitas}
