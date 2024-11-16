document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__links').classList.toggle('active');
}); 

document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.nav__links').classList.remove('active');
    });
}); 

document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[placeholder="Введите имя"]').value;
    const email = this.querySelector('input[placeholder="Введите почту"]').value;
    const comment = this.querySelector('textarea').value;
    
    const BOT_TOKEN = '7419664545:AAHlkz_xOl8BX-Hjah0OiNcF3tr3MSrA-3c';
    const CHAT_ID = '6323282872';
    const message = `
📨 Новая заявка с сайта!

👤 Имя: ${name}
📧 Email: ${email}
💬 Комментарий: ${comment}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            this.reset();
            alert('Форма успешно отправлена!');
        } else {
            throw new Error('Ошибка при отправке формы');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы. Попробуйте позже.');
    }
}); 