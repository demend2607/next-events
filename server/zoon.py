from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions as EC

from bs4 import BeautifulSoup
import requests

import time
import random
import multiprocessing

zoon_link = 'https://zoon.ru/khabarovsk/trainings/type/shkola_tantsev/'

def get_source_html(url):


    driver = webdriver.Chrome()
    driver.maximize_window()
    try:
        driver.get(url)
        time.sleep(6)
        
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

                time.sleep(3)                
        return True
    except Exception as error:
        print(f'Error has occurred: {error}')
    finally:
        driver.close()
        driver.quit()
        
    def get_items_urls():
        return True

def main():
    get_source_html(zoon_link)

    

if __name__ == '__main__':
    main()
