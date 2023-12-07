from flask import Flask, jsonify
from flask_cors import CORS  # Importe o módulo CORS
import pandas as pd

d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)
df

app = Flask(__name__)
CORS(app)

dados = pd.read_csv("tilted_latitude_means_sedes-munic.csv", on_bad_lines="warn", sep= ';')

@app.route('/')
def homepage():
  return 'API ON'

@app.route('/cidades/<estado>')
def obter_cidades(estado):
  cidades_do_estado = dados[dados['STATE'] == estado]['NAME'].unique().tolist()
  cidades_do_estado.sort()
  return jsonify(cidades_do_estado)

@app.route('/irradiacao/<cidade>')
def obter_irradiacao(cidade):
  dados_cidade = dados[dados['NAME'] == cidade]
  menor_irradiacao = dados_cidade[['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']].min().min()
  response = {'menor irradiação': menor_irradiacao}
  return jsonify(response)

app.run()
        
        
app.run(debug = False)