from telebot import TeleBot

# Инициализация бота с вашим токеном
bot = TeleBot('7419664545:AAHlkz_xOl8BX-Hjah0OiNcF3tr3MSrA-3c')

# Обработчик команды /id
@bot.message_handler(commands=['id'])
def send_chat_id(message):
    chat_id = message.chat.id
    bot.reply_to(message, f'ID этого чата: {chat_id}')

# Запуск бота
if __name__ == '__main__':
    print('Бот запущен')
    bot.infinity_polling()
