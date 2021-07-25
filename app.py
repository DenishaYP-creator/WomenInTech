import os
import signal
from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_restful import Resource, Api, request
#from flask.ext.sqlalchemy import SQLAlchemy
import json
import plotly
import plotly.graph_objs as go
import pandas as pd
import numpy as np


app = Flask(__name__)
bootstrap = Bootstrap(app)


# Endpoint-GET Request for index.html files
@app.route('/')
def index():
    # return render_template('index.html')
    return render_template('index.html')

  
@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    app.run(debug=True)
