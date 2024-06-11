document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const lastname = document.getElementById('lastname').value;
    const firstname = document.getElementById('firstname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const message = document.getElementById('message').value;

    // Простая валидация полей
    if (!lastname || !firstname || !phone || !address || !message) {
        document.getElementById('response').textContent = 'Пожалуйста, заполните все поля.';
        document.getElementById('response').style.color = 'red';
        return;
    }

    // Здесь вы можете добавить отправку данных на сервер

    // Показать сообщение об успешной отправке
    document.getElementById('response').textContent = 'Спасибо за ваш отзыв!';
    document.getElementById('response').style.color = 'green';

    // Очистить форму
    document.getElementById('feedbackForm').reset();
});
