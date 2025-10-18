from flask import Flask, jsonify, render_template
from flask_cors import CORS

from bs4 import BeautifulSoup
import requests
from concurrent.futures import ThreadPoolExecutor
import time
import random
import multiprocessing

app = Flask(__name__)
CORS(app)


@app.route('/api/home', methods=['GET'])
def return_home():
    
    with open('proxy/Valid.txt') as file:
        proxy_base = ''.join(file.readlines()).strip().split('\n')
    


    return jsonify({"result": f'ok', "proxy": proxy_base})

if __name__ == '__main__':
    app.run(debug=True, port=8000) 