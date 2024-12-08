from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def receive_data():
    distancia = request.form.get('distancia')
    temperatura = request.form.get('temperatura')
    print(f"Distancia: {distancia} cm, Temperatura: {temperatura} °C")
    return "Datos recibidos correctamente"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
