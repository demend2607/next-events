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

def proxy_handler(proxy):
    time.sleep(random.uniform(0.7, 3.5))
    link = f"http://icanhazip.com/"
    
    proxies = {
        'http': f'http://{proxy}',
        'https': f'https://{proxy}'
    }
    
    try:
        response = requests.get(link, proxies=proxies, timeout=2).text
        print(f'id: {response}')
        return proxy
    except:
        print('not')
        return None

def multi_proxy_check():
    with open('proxy/Raw.txt', 'r') as file:
        proxy_base = ''.join(file.readlines()).strip().split('\n')
        
    with multiprocessing.Pool(multiprocessing.cpu_count()) as process:
        results = process.map(proxy_handler, proxy_base)
        
    valid_proxy = [proxy for proxy in results if proxy is not None]
        
    
    with open('proxy/Valid.txt', 'w') as file:
        file.write('\n'.join(valid_proxy))

@app.route('/api/home', methods=['GET'])
def return_home():
    print(multi_proxy_check())
    
    with open('proxy/Valid.txt') as file:
        proxy_base = ''.join(file.readlines()).strip().split('\n')
    


    return jsonify({"result": f'ok', "proxy": proxy_base})

if __name__ == '__main__':
    app.run(debug=True, port=8000) 
