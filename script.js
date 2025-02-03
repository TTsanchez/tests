document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    const playButton = document.getElementById("play-button");
    const tabs = document.querySelectorAll(".tab");

    playButton.addEventListener("click", () => {
        video.muted = false;
        video.play()
            .then(() => {
                playButton.style.display = "none"; // Скрываем кнопку после воспроизведения
            })
            .catch(error => {
                console.error("Ошибка воспроизведения:", error);
            });
    });

    video.addEventListener("timeupdate", () => {
        let currentTime = video.currentTime;

        tabs.forEach(tab => {
            let tabTime = parseFloat(tab.dataset.time);
            if (currentTime >= tabTime) {
                tab.style.opacity = "1";
                tab.style.pointerEvents = "auto"; // Разрешаем клик
            } else {
                tab.style.opacity = "0";
                tab.style.pointerEvents = "none"; // Запрещаем клик
            }
        });
    });
});
