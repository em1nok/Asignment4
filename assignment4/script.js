const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    document.querySelector('.slideshow-container').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    document.querySelector('.slideshow-container').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Создаем аудио-элемент и добавляем его на страницу
    var audio = document.createElement("audio");
    audio.src = "audio/dearm.mp3";
    audio.type = "audio/mpeg";
    audio.controls = true;
    audio.id = "audio";
    document.querySelector(".audio-container").appendChild(audio);
});
$(document).ready(function() {
    var animatedText = $("#animated-text");

    // Функция для анимации текста "Dear. M"
    function animateText() {
        animatedText.css({opacity: 0, transform: "translateY(-100px)"});
        animatedText.animate({
            opacity: 1,
            translateY: 0
        }, 1000, function() {
            // Анимация завершена
        });
    }

    // Вызываем функцию анимации при загрузке страницы
    animateText();
});

