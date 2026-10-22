import mysql.connector
from mysql.connector import Error

def testar_conexao():
    try:
        # Estabelece a conexão com o MySQL sem senha
        conexao = mysql.connector.connect(
            host='localhost',
            database='gastromatch',
            user='root',
            password=''  # Deixe a string vazia se não tiver senha
        )

        if conexao.is_connected():
            db_info = conexao.get_server_info()
            print(f"Conexão bem-sucedida ao servidor MySQL Versão: {db_info}")
            
            cursor = conexao.cursor()
            cursor.execute("SELECT DATABASE();")
            nome_bd = cursor.fetchone()
            print(f"Conectado ao banco de dados: {nome_bd[0]}")

    except Error as e:
        print(f"Erro ao conectar ao MySQL: {e}")

    finally:
        if 'conexao' in locals() and conexao.is_connected():
            cursor.close()
            conexao.close()
            print("Conexão com o MySQL encerrada.")

if __name__ == "__main__":
    testar_conexao()