from aiogram import Bot, Dispatcher, html, F, Router
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart, Command
from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, Message, InlineKeyboardButton, InlineKeyboardMarkup, CallbackQuery
from aiogram.utils.markdown import hbold, hlink

import asyncio
from os import getenv
import json
from street.parse import parse
import time
import schedule
import threading
from datetime import datetime

# schedule status record in street/scheduler.txt
def start_scheduler():
    schedule.every().hour.at(":55").do(parse)
    while True:
        schedule.run_pending()
        time.sleep(60)  

# Create a separate thread for our scheduler
scheduler_thread = threading.Thread(target=start_scheduler)
scheduler_thread.daemon = True
scheduler_thread.start()

TOKEN = getenv('STREET_BOT')

bot = Bot(token=TOKEN, default=DefaultBotProperties(parse_mode=ParseMode.HTML))
dp = Dispatcher()
router = Router()

with open("result.json", "r", encoding="utf-8") as file:
    items_data = json.load(file)
items_count = len(items_data)
ITEMS_PER_PAGE = 5



@dp.message(CommandStart())
async def start(message: Message) -> None:
    start_buttons = [[KeyboardButton(text="Кроcсовки"), KeyboardButton(text="Кеды")]]
    keyboard = ReplyKeyboardMarkup(keyboard=start_buttons, resize_keyboard=True, one_time_keyboard=True)
    
    await message.answer(text="Выберите категорию", reply_markup=keyboard)

def get_keyboard_for_page(page: int, total_pages: int):
    keyboard_buttons = []
    
    if page > 1:
        keyboard_buttons.append(InlineKeyboardButton(text="⬅️ Назад", callback_data=f"page_{page-1}"))
    if page < total_pages:
        keyboard_buttons.append(InlineKeyboardButton(text="Вперёд ➡️", callback_data=f"page_{page+1}"))
        
    return InlineKeyboardMarkup(inline_keyboard=[keyboard_buttons], resize_keyboard=True)

async def send_items_page(chat_id: int, page: int):
    total_pages = (len(items_data) + ITEMS_PER_PAGE - 1) // ITEMS_PER_PAGE
    start_index = (page - 1) * ITEMS_PER_PAGE
    end_index = start_index + ITEMS_PER_PAGE
    # card_items = []
    current_items = items_data[start_index:end_index]
    
    # Отправляем каждый товар отдельно
    
    for item in current_items:
        card = (
            f'{hlink(item.get("title"), item.get("link"))}\n'
            f'{hbold("Категория: ")} {item.get("category")[2]}\n'
            f'{hbold("Цена: ")} {item.get("base_price")}\n'
            f'{hbold("Скидка: ")} {item.get("discount")}%\n'
            f'{hbold("Цена со скидкой: ")} {item.get("sale_price")}🔥'
        )
        # after change page rewrite card
        # card_items.append(card)
        
        
        await bot.send_message(
            chat_id=chat_id,
            text=card,
            disable_web_page_preview=False,
            disable_notification=True
        )
        await asyncio.sleep(0.3)
    
    # Отправляем клавиатуру
    reply_markup = get_keyboard_for_page(page, total_pages)
    await bot.send_message(
        chat_id=chat_id,
        text=f"Страница {page} из {total_pages}",
        reply_markup=reply_markup,
        disable_notification=True
    )

# Тогда оба обработчика будут использовать одну функцию:
@dp.message(F.text.casefold() == "кроcсовки")
async def show_sneakers(message: Message):
    await message.answer("Please wait a moment...", disable_notification=True)
    await send_items_page(message.chat.id, 1)

@dp.callback_query(F.data.startswith("page_"))
async def process_page_callback(callback: CallbackQuery):
    page = int(callback.data.split("_")[1])
    await send_items_page(callback.message.chat.id, page)
    await callback.message.delete()
    await callback.answer()



async def main():
    await dp.start_polling(bot)
    
if __name__ == '__main__':
    asyncio.run(main())