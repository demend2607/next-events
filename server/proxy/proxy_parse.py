from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC

from urllib.parse import unquote
from bs4 import BeautifulSoup
import requests

import json
import time
import random
import multiprocessing
import os
from datetime import datetime


import requests

# cookies = {
#     'cf_clearance': 'guwK9OsFPhYYCRYs_JAKYcT6I5n2eg1s_YK822Svvu4-1760497421-1.2.1.1-rD40na0tm6b2QUadPIsk1NlsbBtN6wqpSaXcKxE7JAQSeaO5psEGfeNSX7O0n.8TZpnck1DArkjoAiWVpXr_IOxW5Cn1w1Xpi7weVvWZLd5FA9TUi07VK.1Q5yqw8if2h2qtenzUsbuAQNs_TRimowl3ah59kzl0gE208U6ymk.nA4rtFN1JaPFmRRKKroiMvcaE5X5u_dTdU4PMtYiwn47.mpRHn.2nq9KtzIFh3Hg',
# }

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'accept-language': 'ru-RU,ru;q=0.7',
    'cache-control': 'max-age=0',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
    'sec-ch-ua-arch': '"x86"',
    'sec-ch-ua-bitness': '"64"',
    'sec-ch-ua-full-version-list': '"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"10.0.0"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'sec-gpc': '1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
}

params = {
    'type': '',
    'anonymity': '',
    'country': '',
    'speed': '1500',
    'port': '',
    'page': '1',
}

session = requests.Session()
page_url = 'https://www.freeproxy.world/'

def select_country():
    if not os.path.exists('proxy/countries.txt'):
        print('countries.txt not found, start collecting...')
        if not os.path.exists('proxy/initial.html'):
            print('initial.html not found, start collecting...')
            get_initial_data()
            
        with open('proxy/initial.html', 'r', encoding='utf-8') as file:
            src = file.read()
        countries_base = []
        soup_init = BeautifulSoup(src, 'lxml')
        countries = soup_init.find('select',  attrs = {'name': 'country'}  ).find_all('option')
        for c in countries:
            short_name = c.get('value')
            name = c.text.split('(')[0].strip()
            countries_base.append((short_name, name))
        with open(f'proxy/countries.txt', 'w', encoding='utf-8') as file:
            file.write('\n'.join([f'{c[0]},{c[1]}' for c in countries_base]))

    # select_country = input("Select country: ").upper()
    # params['country'] = select_country
    # if select_country == 'ALL':
    params['country'] = ''
    return params['country']

def get_initial_data():
    try:
        response_init = session.get(page_url, params=params, headers=headers)
        with open('proxy/initial.html', 'w', encoding='utf-8') as file:
            file.write(response_init.text)
        time.sleep(2)
        return f'[INFO] get_initial_data is done successfully'
    except Exception as ex:
        return f'[Error] get_initial_data has occurred: {ex}'

def collect_proxies():
    try:
        proxy_base = []
        params['country'] = select_country()
        print(params)
        for page in range(1, 2):
            params['page'] = str(page)
            response = session.get(page_url, params=params, headers=headers)
            soup = BeautifulSoup(response.text, 'lxml')
            table = soup.find('table', class_='layui-table').find('tbody')
            tr = table.find_all('tr')
            for item in tr:
                try:
                    ip = item.find('td', class_="show-ip-div").text
                except Exception as ex:
                    continue
                if ip:
                    item = item.find_all('td')
                    proxy_base.append({
                        'ip': ip.strip(),
                        'port' :item[1].text.strip(),
                        'country': item[2].text.strip(),
                        'type': item[5].text.strip(),
                        })
            print(f"[+] Page {page} is parsed")
            time.sleep(random.randrange(3,5))
        with open(f'proxy/raw_proxies.txt', 'w', encoding='utf-8') as file:
            json.dump(proxy_base, file, indent=2, ensure_ascii=False)
        return f'[INFO] collect_proxies is done successfully'
    except Exception as ex:
        return f'[Error] collect_proxies has occurred: {ex}'

def proxy_handler(proxy):
    time.sleep(random.randrange(1, 4))
    link = f"http://icanhazip.com/"
    
    proxies = {
        'http': f'http://{proxy}',
        'https': f'https://{proxy}'
    }

    try:
        response = requests.get(link, proxies=proxies, timeout=2).text
        return proxy
    except:
        return None

def multi_proxy_check():
    with open('proxy/raw_proxies.txt', 'r') as file:
            proxies = json.loads(file.read())
            proxy_base = [proxy['ip'] + ':' + proxy['port'] for proxy in proxies]

    with multiprocessing.Pool(multiprocessing.cpu_count()) as process:
        results = process.map(proxy_handler, proxy_base)
    
    valid_proxy_keys = [proxy for proxy in results if proxy is not None]
    
    # Filter original proxies to keep only valid ones
    valid_proxies = []
    for proxy in proxies:
        proxy_key = proxy['ip'] + ':' + proxy['port']
        if proxy_key in valid_proxy_keys:
            valid_proxies.append(proxy)

    with open('proxy/Valid.txt', 'w') as file:
        json.dump(valid_proxies, file, indent=2, ensure_ascii=False)
    
    return f'[INFO] get_initial_data is done successfully'

def main_handler():
    with open('proxy/scheduler.txt', 'a', encoding='utf-8') as file:
        file.write(f'Запущено🔄: {datetime.now().strftime("%d.%m.%Y %H:%M")}\n')
    print(collect_proxies())
    print(multi_proxy_check())
    with open('proxy/scheduler.txt', 'a', encoding='utf-8') as file:
        file.write(f'Завершено✅: {datetime.now().strftime("%d.%m.%Y %H:%M")}\n\n')


if __name__ == '__main__':
    main_handler()