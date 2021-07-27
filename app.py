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
# IMAGES_FOLDER = os.path.join('static', 'images')
# app.config['UPLOAD_FOLDER'] = IMAGES_FOLDER 


# Endpoint-GET Request for index.html files
@app.route('/')
def index():
#     full_filename = os.path.join(app.config['UPLOAD_FOLDER'], 'THEQUESTION.png')
    return render_template('index.html')
#     return render_template("index.html", question_image = full_filename)

  
@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    app.run(debug=True)



@app.route('/about/')
def about():
    return render_template('about.html')


@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
    # app.run_server(debug=True)

