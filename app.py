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
    #data = db.table.find_one()
    return render_template('index.html')
    #render_template("index.html", data=table)


# app.config['SECRET_KEY'] = 'top_secret'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite3'
# db = SQLAlchemy(app)


# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/WomenInTech"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)


@app.errorhandler(404)
def not_found(e):
    return render_template('404.html')


if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
    # app.run_server(debug=True)

