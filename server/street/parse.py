from bs4 import BeautifulSoup

import requests
import json
import time
import random
from datetime import datetime

cookies = {
    '__ddg9_': '217.150.56.221',
    '__ddg1_': 'QX0O6hgCtJoCib0wc0L9',
    'PHPSESSID': 'lyEEnEsvihL7ULf9JH7DBxymzpABXI4a',
    'user_city': '%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA',
    'CLIENT_CITY_ID': '2893',
    'CLIENT_CITY': '%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA',
    'mainpagetype': 'man',
    'topMenu_active': '%2Fman%2F',
    '__ddg10_': '1759375200',
    '__ddg8_': '4D6Dp5wJwGKGmeMk',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'accept-language': 'ru-RU,ru;q=0.7',
    'cache-control': 'max-age=0',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Brave";v="140"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'sec-gpc': '1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
    # 'cookie': '__ddg9_=217.150.56.221; __ddg1_=QX0O6hgCtJoCib0wc0L9; PHPSESSID=lyEEnEsvihL7ULf9JH7DBxymzpABXI4a; user_city=%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA; CLIENT_CITY_ID=2893; CLIENT_CITY=%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA; mainpagetype=man; topMenu_active=%2Fman%2F; __ddg10_=1759375200; __ddg8_=4D6Dp5wJwGKGmeMk',
}

page_link = 'https://street-beat.ru/cat/man/obuv/obuv_eu_43;obuv_eu_43,5/demi-season/'

def get_page():
    s = requests.Session()
    
    try:
        response = s.get(page_link, cookies=cookies, headers=headers,)
        with open('street/result.html', 'w', encoding='utf-8') as file:
            file.write(response.text)
        return f'[INFO] The page is recorded successfully'
    except Exception as _ex:
        return f'[ERROR] something went wrong while getting page: {_ex}'

def get_json():
    try:
        with open('street/result.html', 'r', encoding='utf-8') as file:
            src = file.read()
            
        soup = BeautifulSoup(src, 'lxml')
        scripts = soup.find_all('script', attrs={'data-skip-moving':'true'})
        for script in scripts:
            if 'window.digitalData = ' in script.text:
                    
                json_file = script.text.split('window.digitalData = ')[1].split('if (typeof yaCounter27318569')[0].replace('};', '}')
        with open('street/initial.json', 'w', encoding='utf-8') as file:
            file.write(json_file)
        return '[INFO] The json is recorded successfully'
    except Exception as _ex:
        return f'[ERROR] something went wrong while getting json: {_ex}'

def collect_data():
    with open('street/initial.json', 'r', encoding='utf-8') as file:
        data = json.load(file)
    page_count = data.get('listing').get('pagesCount')
    
    result_data = []
    try:
        for page in range(1, page_count + 1):
            url = f'https://street-beat.ru/cat/man/obuv/obuv_eu_43;obuv_eu_43,5/demi-season/?page={page}'
            session = requests.Session()
            request = session.get(url, cookies=cookies, headers=headers,)
            
            soup = BeautifulSoup(request.text, 'lxml')
            scripts = soup.find_all('script', attrs={'data-skip-moving':'true'})
            
            for script in scripts:
                if 'window.digitalData = ' in script.text:
                    json_data = script.text.split('window.digitalData = ')[1].split('if (typeof yaCounter27318569')[0].replace('};', '}')
                    json_data = json.loads(json_data)
                    items = json_data.get('listing').get('items')
                    for item in items:
                        # discont_item = [item for item in items if item.get('unitSalePrice') < item.get('unitPrice')]
                        if item.get('unitSalePrice') < item.get('unitPrice'):
                            #  how get integer value 
                            discount = round(((item.get('unitPrice') - item.get('unitSalePrice')) / item.get('unitPrice')) * 100)
                            result_data.append({
                                'title': item.get('name'),
                                'category': item.get('category'),
                                'link': item.get('url'),
                                'image_url': item.get('imageUrl'),
                                'base_price': item.get('unitPrice'),
                                'sale_price': item.get('unitSalePrice'),
                                'discount': discount
                            })
            print(f'[+] Page {page}/{page_count} ')
            time.sleep(random.randrange(2, 4))
            
    except Exception as _ex:
        return f'[ERROR] something went wrong while collecting data: {_ex}'
    
    with open('street/result.json', 'w', encoding='utf-8') as file:
        result_data = sorted(result_data, key=lambda x: x['discount'], reverse=True)        
        json.dump(result_data, file, indent=2, ensure_ascii=False)
    return '[INFO] The data is collected successfully'


def parse():
    with open('street/scheduler.txt', 'a', encoding='utf-8') as file:
        file.write(f'Запущено🔄: {datetime.now().strftime("%d.%m.%Y %H:%M")}\n')
    print(get_page())
    print(get_json())
    print(collect_data())
    with open('street/scheduler.txt', 'a', encoding='utf-8') as file:
        file.write(f'Завершено✅: {datetime.now().strftime("%d.%m.%Y %H:%M")}\n\n')
    
if __name__ == '__main__':
    parse()