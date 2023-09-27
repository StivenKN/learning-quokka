from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'Aquí se generará el certificado'

if __name__ == '__main__':
    app.run(port = 3002, debug = True)

