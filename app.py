# Import Dependencies
from flask import Flask, jsonify  # import the Flask & Jsonify class
from flask import render_template, redirect, url_for
from flask_restful import Resource, Api

app = Flask(__name__)  # Create an app Instance of the Flask class

#***REMOVE ONCE WE HAVE A DB 
gender_table = []

# MAIN HOMEPAGE
@app.route('/')  # Root home
def index():
    return render_template('index.html')




# TEST PAGE-----------------------
# use route() decorator to tell Flask what URL should trigger our function.
@app.route("/hello/")
def hello_world():  # Function returns the message we want to display in the user’s browser.
    return "<p>Hello, World!</p>"
# END OF TEST PAGE------------------------------------



app.run(port=500)
