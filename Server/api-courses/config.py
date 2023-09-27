from flask import Flask
from flask_mysqldb import flask_mysqldb

app = Flask(__name__)


@app.route('/')
def index():
    return 'Aquí se generará el certificado'

if __name__ == '__main__':
    app.run(port = 3002, debug = True)

