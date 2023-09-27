from flask import Flask, render_template, request, url_for, redirect

from flask_mysqldb import MySQL

 

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tecnologie_data'
mysql = MySQL(app)


@app.route('/')
def index():
    return render_template('cursos.html')


@app.route('/cursos')
def cursos():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM tecnologies')
    data = cur.fetchall()
    return render_template('cursos.html', tecnology = data)
 

if __name__ == '__main__':
    app.run(port = 3002, debug = True)