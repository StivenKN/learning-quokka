from flask import Flask, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import json

 

app = Flask(__name__)
CORS(app)
CORS(app, origins=['*'])
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tecnologie_data'
app.config['MYSQL_CHARSET']='utf8mb4'
mysql = MySQL(app)


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute("ALTER TABLE tecnologies CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
    cur.execute('SELECT * FROM tecnologies')
    datas = cur.fetchall()
    tecnologia = [{"NombreTecnologia":data[1]} for data in datas]
    
    
    cur.execute('SELECT * FROM tecnologies')
    datos = cur.fetchall()
    tecnologiades = [{"Descrippcion":dato[2]} for dato in datos]
    arr = []
    arr.append([tecnologia, tecnologiades])
    return (arr)
 
 

if __name__ == '__main__':
    app.run(port = 3002, debug = True)