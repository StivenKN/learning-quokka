from flask import Flask, render_template, request, url_for, redirect, jsonify
from flask_mysqldb import MySQL
import json

 

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tecnologie_data'
mysql = MySQL(app)


@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM tecnologies')
    datas = cur.fetchall()
    
    tecnologies = [{"id_tecnology": data[0], "name_tecnology": data[1], "description_tecnology": data[2]} for data in datas]
    print (tecnologies)
    
    jsonToSend = json.dumps(tecnologies, ensure_ascii=True)
    return jsonify(jsonToSend)
 
 

if __name__ == '__main__':
    app.run(port = 3002, debug = True)