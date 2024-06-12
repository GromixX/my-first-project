let timer; // Переменная для хранения идентификатора таймера
let startTime; // Переменная для хранения времени начала отсчета
let isTimerRunning = false; // Флаг для отслеживания состояния таймера (запущен или остановлен)

// Функция для запуска таймера при нажатии клавиши "Пробел"
function startTimerOnKeyPress(event) {
  if (event.code === "Space") {
    if (!isTimerRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }
}

// Функция для запуска таймера
function startTimer() {
  // Если таймер уже запущен, то не запускаем его снова
  if (isTimerRunning) {
    return;
  }
  
  // Устанавливаем флаг, что таймер запущен
  isTimerRunning = true;
  
  // Получаем текущее время
  startTime = new Date().getTime();

  // Устанавливаем интервал в 10 миллисекунд и вызываем функцию tick каждые 10 миллисекунд
  timer = setInterval(tick, 10);
}

// Функция для остановки таймера
function stopTimer() {
  // Если таймер уже остановлен, то ничего не делаем
  if (!isTimerRunning) {
    return;
  }
  
  // Останавливаем таймер
  clearInterval(timer);
  
  // Устанавливаем флаг, что таймер остановлен
  isTimerRunning = false;
}

// Функция, которая вызывается каждые 10 миллисекунд
function tick() {
  // Получаем текущее время
  let currentTime = new Date().getTime();

  // Вычисляем разницу во времени
  let elapsedTime = currentTime - startTime;

  // Преобразуем разницу во времени в формат ММ:СС.М
  let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000) / 100);

  // Форматируем вывод времени
  let formattedTime = pad(minutes) + ":" + pad(seconds) + "." + milliseconds;

  // Выводим время на веб-странице
  document.getElementById("timer").innerHTML = formattedTime;
}

// Функция для добавления ведущего нуля к числу, если оно меньше 10
function pad(num) {
  return (num < 10 ? "0" : "") + num;
}
