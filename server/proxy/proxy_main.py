import schedule
import time
import threading
from proxy_parse import main_handler


def start_scheduler():
    schedule.every().hour.at(":30").do(main_handler)
    while True:
        schedule.run_pending()
        time.sleep(60)  
        
def proxy_main():
    scheduler_thread = threading.Thread(target=start_scheduler)
    scheduler_thread.daemon = True
    scheduler_thread.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down scheduler...")


if __name__ == '__main__':
    proxy_main()
