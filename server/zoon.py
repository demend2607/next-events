from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

from bs4 import BeautifulSoup
import requests

import time
import random
import multiprocessing

zoon_link = 'https://zoon.ru/khabarovsk/trainings/type/shkola_tantsev/'

def get_source_html(url, page):
    
    driver = webdriver.Firefox()
    driver.maximize_window()

    try:
        driver.get(f'{url}page-{page}/')
        time.sleep(random.uniform(1, 4))
        with open('zoon/zoon.html', 'w', encoding='utf-8') as file:
            file.write(driver.page_source)
        
        return True
    except Exception as error:
        print(f'Error has occurred: {error}')
        return False
    finally:
        driver.close()
        driver.quit()

def main():
    # for page in range(1 , 6):
        success = get_source_html(zoon_link, page=1)
        # if not success:
        #     print('error')
        #     break
        # time.sleep(random.uniform(1, 3))
    

if __name__ == '__main__':
    main()
