from flask import Flask

from flask_mysqldb import MySQL

 

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
    data = cur.fetchall()
    print(data)
    return 'Cursos tecnologies'

 

if __name__ == '__main__':
    app.run(port = 3002, debug = True)