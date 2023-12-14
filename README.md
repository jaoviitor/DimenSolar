# DimenSolar
<p align="center"><i>Repositório do projeto DimenSolar</i></p>
API Flask  to collect solar irradiation data

##  Sobre o projeto

Esse projeto foi desenvolvido com o intuito de facilitar que o usuário descubra quantas placas de energia solar são necessárias para sua residência/empresa.

Para isso é realizado um calculo baseado no consumo mensal de energia em KWh, tipo de instalação desejada e insidência solar na região.

O site utiliza uma API desenvolvida em Python com Flask onde, utilizando Pandas, busca numa base de dados CSV a menor insidência solar anual na cidade selecionada para realizar o calculo da demanda do usuário e então retornar pra ele a quantidade de placas que ele deve instalar para sua demanda.

### Tecnologias
<p display="inline-block">
  <img width="48" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="python-logo"/>
  <img width="48" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="js-logo"/>
</p>

### Ferramentas de desenvolvimento

<p display="inline-block">
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>
</p>

## Running
```python app.py```

## Endpoints
**Retorna as cidades do estado selecionado**

```GET /cidades/<estado>```

**Retorna o menor nível de irradiação solar da cidade selecionada**

```GET /irradiacao/<cidade>```
