// Переключение страниц
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Модальные окна
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Закрытие модалки кликом вне её
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// Обработка регистрации
function handleRegister(event) {
    event.preventDefault();
    alert('Регистрация прошла успешно! Добро пожаловать в AirTicketHub ✈️');
    closeModal('registerModal');
}

// Чат поддержки
function sendMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    
    if (input.value.trim() === '') return;
    
    const userMsg = document.createElement('div');
    userMsg.className = 'msg msg-user';
    userMsg.innerHTML = '<strong>Вы:</strong> ' + input.value;
    messages.appendChild(userMsg);
    
    const userText = input.value;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    
    // Имитация ответа поддержки
    setTimeout(() => {
        const supportMsg = document.createElement('div');
        supportMsg.className = 'msg msg-support';
        supportMsg.innerHTML = '<strong>Поддержка:</strong> Спасибо за ваш вопрос! Наш специалист скоро ответит вам.';
        messages.appendChild(supportMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

// Enter в чате
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});