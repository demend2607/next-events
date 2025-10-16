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

page_url = 'https://www.freeproxy.world/'

def get_page():
    try:
        session = requests.Session()
        response_init = session.get(page_url, params=params, headers=headers)
        # class="layui-table"
        with open('proxy/initial.html', 'w', encoding='utf-8') as file:
            file.write(response_init.text)
            
        proxy_base = []
        countries_base = []
        with open(f'proxy/initial.html', 'r', encoding='utf-8') as file:
            src = file.read()
            
        soup_init = BeautifulSoup(src, 'lxml')
        countries = soup_init.find('select',  attrs = {'name': 'country'}  ).find_all('option')
        for c in countries:
            short_name = c.get('value')
            name = c.text.split('(')[0].strip()
            countries_base.append((short_name, name))
        with open(f'proxy/countries.txt', 'w', encoding='utf-8') as file:
            file.write('\n'.join([f'{c[0]},{c[1]}' for c in countries_base]))

        # country choice
        selec_country = input("Select country: ")
        params['country'] = selec_country
        if selec_country == 'all':
            params['country'] = ''
        time.sleep(2)
        for page in range(1, 3):
            print(page)
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
            time.sleep(random.randrange(3,5))
        with open(f'proxy/raw_proxies.txt', 'w', encoding='utf-8') as file:
            for proxy in proxy_base:
                file.write(json.dumps(proxy) + '\n')
        return "[INFO] Page is recorded successfully"
    except Exception as ex:
        return f"[ERROR] something went wrong while getting page: {ex}"
def collect_proxies():

    
    
    return "[INFO] Proxies are collected successfully"

def main():
    print(get_page())
    print(collect_proxies())


if __name__ == '__main__':
    main()