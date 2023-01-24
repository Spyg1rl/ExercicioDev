import sqlite3
import json

# conectando ao banco de dados
conn = sqlite3.connect('banco.db')

# criando um cursor
cursor = conn.cursor()

# executando uma consulta
cursor.execute("SELECT * FROM CLIENTES LIMIT 1")

# recuperando o resultado
result = cursor.fetchone()

# fechando o cursor e a conexão
cursor.close()
conn.close()

# salvando o resultado em um arquivo JSON
with open('clientes.json', 'w') as json_file:
    json.dump(result, json_file)