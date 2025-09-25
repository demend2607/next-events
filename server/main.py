# def proxy_handler(proxy):
#     link = f"http://icanhazip.com/"
    
#     proxies = {
#         'http': f'http://{proxy}',
#         'https': f'https://{proxy}'
#     }
    
#     try:
#         response = requests.get(link, proxies=proxies, timeout=2).text
#         print(f'id: {response}')
#         time.sleep(0.5, 3.5)
#         return proxy
#     except:
#         print('not')
#         return None

# def proxy_check():
#     with open('Raw.txt', 'r') as file:
#         proxy_base = ''.join(file.readlines()).strip().split('\n')
        
#     with multiprocessing.Pool(multiprocessing.cpu_count()) as process:
#         results = process.map(proxy_handler, proxy_base)
        
#     valid_proxy = [proxy for proxy in results if proxy is not None]
        
    
#     with open('Valid.txt', 'w') as file:
#         file.write('\n'.join(valid_proxy))