from flask import Flask, render_template, request
import requests
import json


app = Flask(__name__)


@app.route('results', methods=['GET', 'POST'])
def result():
	if request.method == 'POST':
		field_list = request.args.get('data', None)
		mobile_no = request.args.get('mobile_no', None)


if __name__ == "__main__":
	app.run(debug=True)