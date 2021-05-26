# -*- coding: utf-8 -*-
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/JustStreamIt/')
def dashboard():
    return render_template("JustStreamIt.html")

if __name__ == "__main__":
    app.run(debug=True)