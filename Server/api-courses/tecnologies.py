from flask import Flask, jsonify, request
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
    cur.execute('SELECT * FROM tecnologies')
    datas = cur.fetchall()
    tecnologia = [{"NombreTecnologia":data[1]} for data in datas]
    
    cur.execute('SELECT * FROM tecnologies')
    datos = cur.fetchall()
    tecdes = [{"Descripcion":dato[2]} for dato in datos]
    arr = []
    arr.append([tecnologia, tecdes])
    return (arr)




@app.route('/section/<int:id>')
def section(id):  
    # id = request.args['id']
    cur = mysql.connection.cursor()
    cur.execute(f'SELECT * FROM section_description where id_section_description = {id}')
    dates = cur.fetchall()
    tectitle = [{"Titulo":date[2],"Informacion":date[3], "number": date[1], "id": date[0]} for date in dates]
    
    # cur = mysql.connection.cursor()
    # cur.execute('SELECT * FROM videos')
    # datas = cur.fetchall()
    # video = [{"video":data[1]} for data in datas]
    # print(id)
    
    # arr = []
    # arr.append([tectitle,video])
    return (tectitle) 

if __name__ == '__main__':
    app.run(port = 3002, debug = True)