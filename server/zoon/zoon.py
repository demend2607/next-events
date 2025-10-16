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

zoon_link = 'https://zoon.ru/khabarovsk/autoservice/type/tonirovanie/'
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
}

def get_source_html():

    driver = webdriver.Chrome()
    driver.maximize_window()
    try:
        driver.get(zoon_link)
        time.sleep(random.randrange(4, 6)) 
        
        while True:
            # button-show-more
            catalog_button = driver.find_element(By.CLASS_NAME, 'catalog-button-showMore')
            if driver.find_elements(By.CLASS_NAME, 'hasmore-text'):
                with open('zoon/zoon.html', 'w', encoding='utf-8') as file:
                    file.write(driver.page_source)
                break
            else:
                button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CLASS_NAME, 'button-show-more')))
                actions = ActionChains(driver)
                
                actions.click(button).perform()
                actions.move_to_element(catalog_button).pause(2).perform()


                time.sleep(random.randrange(3, 5))              
        return '[INFO] Source html is record in zoon/zoon.html successfully'
    except Exception as error:
        print(f'Error has occurred: {error}')
        return '[INFO] Source html is not record'
    finally:
        driver.close()
        driver.quit()

        
def get_items_urls():
    with open('zoon/zoon.html', 'r', encoding='utf-8') as file:
        src = file.read()
        
    soup = BeautifulSoup(src, 'lxml')
    # minicard-item__info -> minicard-item__title -> title-link+a
    items_info = soup.find_all('div', class_='minicard-item__info')
    urls = []
    try:
        for item in items_info:
            item_url = item.find('div', class_='minicard-item__title').find('a').get('href')
            urls.append(item_url)    
        with open('zoon/zoon_urls.txt', 'w', encoding='utf-8') as file:
            file.write('\n'.join(urls))
    except Exception as error:
        print(f'Error has occurred: {error}')
        return '[INFO] Urls are not collected' 
        
    return '[INFO] Urls are collected in zoon/zoon_urls.txt successfully'


def url_cleaner(url):
    try:
        cleaned_url = unquote(url.split('?to=')[1].split('&')[0])
        return cleaned_url
    except Exception as _ex:
        return None

def get_data():
    with open('zoon/zoon_urls.txt', 'r', encoding='utf-8') as file:
        urls_list = [url.strip() for url in file.readlines()]
        
    result_list = []
    count = 1
    urls_count = len(urls_list)
    
    for url in urls_list[:10]:
        
        responce = requests.get(url, headers=headers)
        soup = BeautifulSoup(responce.text, 'lxml')
        # ----
        try:
            item_name = soup.find('span', attrs={'itemprop': 'name' }).text.strip()
        except Exception as _ex:
            item_name = None
        # ----
        item_phone_list = []
        try:
            item_phones = soup.find('div', class_='service-phones-list').find_all('a', class_='js-phone-number')
            for phone in item_phones:
                item_phone = phone.get('href').split(':')[-1].strip()
                item_phone_list.append(item_phone)
        except Exception as _ex:
            item_phone_list = None
        # ----
        try:
            item_address = soup.find('address', class_='iblock').text.strip()
        except Exception as _ex:
            item_address = None
        # ---- 
        # for search regular value we can use library - re
        # text.re.compile("text|another text")
        try:
            item_website = soup.find('div', class_='service-website-value').find('a').get('href').strip()
            item_website = url_cleaner(item_website)
        except Exception as _ex:
            item_website = None
        # ---- 
        item_social_list = []
        try:
            item_socials = soup.find('div', class_='service-description-social-list').find_all('a', class_='service-description-social-btn')
            for social in item_socials:
                item_social = social.get('href').strip()
                item_social = url_cleaner(item_social)
                item_social_list.append(item_social)
        except Exception as _ex:
            item_social_list = None
        result_list.append({"item_name": item_name, 
                            "item_phone_list": item_phone_list, 
                            "item_address": item_address, 
                            "item_website": item_website, 
                            "item_social_list": item_social_list
                            })
        time.sleep(random.randrange(2, 4)) 
        if count%10 == 0:
            time.sleep(random.randrange(4, 6))
            
        print(f'[+] Progress: {count}/{urls_count}') 
        count+=1
    with open('zoon/zoon_data.json', 'w', encoding='utf-8') as file:
        json.dump(result_list, file, indent=4, ensure_ascii=False)
    
    return "[INFO] Data collected successfully"
        
def main():
    print(get_source_html())
    print(get_items_urls())
    print(get_data())


if __name__ == '__main__':
    main()
