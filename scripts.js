// Функция увеличения шрифта для слабовидящих
function toggleFontSize() {
  const body = document.body;
  body.style.fontSize = body.style.fontSize === '16pt' ? '12pt' : '16pt';
}

// Плавный скролл уже включён через CSS scroll-behavior: smooth

// Скрипт часов (для футера или хедера)
function startClock() {
  const clock = document.createElement('div');
  clock.id = 'clock';
  clock.style.position = 'fixed';
  clock.style.bottom = '10px';
  clock.style.right = '10px';
  clock.style.color = '#aaa';
  clock.style.fontSize = '12px';
  document.body.appendChild(clock);

  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    clock.textContent = 'Текущее время: ' + timeStr;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Счётчик посещений
function updateVisitCounter() {
  let visits = localStorage.getItem('visitCounter');
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem('visitCounter', visits);

  const counter = document.createElement('div');
  counter.style.position = 'fixed';
  counter.style.bottom = '10px';
  counter.style.left = '10px';
  counter.style.color = '#aaa';
  counter.style.fontSize = '12px';
  counter.textContent = 'Количество посещений: ' + visits;
  document.body.appendChild(counter);
}

window.addEventListener('DOMContentLoaded', () => {
  startClock();
  updateVisitCounter();
});
function login() {
  alert("Вы успешно вошли!");
}

function register() {
  alert("Вы успешно зарегистрировались!");
}
function showRecoveryForm() {
  document.getElementById("recoveryModal").style.display = "block";
}

function closeRecoveryForm() {
  document.getElementById("recoveryModal").style.display = "none";
}

function recoverPassword() {
  const input = document.getElementById("recoveryInput").value.trim();
  if (input) {
    alert("Ссылка на восстановление пароля отправлена на: " + input);
    closeRecoveryForm();
  } else {
    alert("Пожалуйста, введите email или номер телефона.");
  }
}

// Закрытие окна при клике вне формы
window.onclick = function(event) {
  const modal = document.getElementById("recoveryModal");
  if (event.target === modal) {
    closeRecoveryForm();
  }
};
function validatePasswords(event) {
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;
  const errorDiv = document.getElementById("passwordError");

  if (password !== confirmPassword) {
    errorDiv.textContent = "Пароли не совпадают!";
    event.preventDefault(); // Отменяем отправку формы
    return false;
  } else {
    errorDiv.textContent = ""; // Очищаем сообщение об ошибке
    alert("Вы успешно зарегистрировались!");
    return true;
  }
}
function submitReview() {
  const text = document.getElementById("reviewText").value.trim();
  const message = document.getElementById("reviewMessage");

  if (sessionStorage.getItem("loggedIn") !== "true") {
    message.textContent = "Чтобы оставить отзыв, пожалуйста, войдите в аккаунт.";
    message.style.color = "#ff4d4d";
    return;
  }

  if (text.length < 5) {
    message.textContent = "Отзыв слишком короткий.";
    message.style.color = "#ff4d4d";
    return;
  }

  const reviewContainer = document.getElementById("reviews-container");
  const newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = '<p>${text}</p><span>— Вы</span>'
  ;
  reviewContainer.appendChild(newReview);

  document.getElementById("reviewText").value = "";
  message.textContent = "Спасибо за отзыв!";
  message.style.color = "#4fff91";
}
    function calculateTotal() {
      const checkboxes = document.querySelectorAll('input[name="subject"]:checked');
      const lessons = parseInt(document.getElementById("lessonsCount").value) || 0;
      const result = document.getElementById("result");

      if (checkboxes.length === 0 || lessons <= 0) {
        result.textContent = "Выберите хотя бы один предмет и введите количество занятий.";
        result.style.color = "red";
        return;
      }

      let total = 0;
      checkboxes.forEach((checkbox) => {
        const price = parseInt(checkbox.dataset.price);
        total += price * lessons;
      });

     result.textContent = `Общая стоимость занятий: ${total}₽`;
result.style.color = "lime";

    }
    document.addEventListener('DOMContentLoaded', () => {
  // Заявка на занятие
  const bookingForm = document.getElementById('bookingForm');
  const confirmation = document.getElementById('confirmationMessage');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      confirmation.style.display = 'block';
      bookingForm.reset();
    });
  }

  // Кнопка "A+"
  const fontSizeBtn = document.querySelector('.font-size-btn');
  if (fontSizeBtn) {
    fontSizeBtn.addEventListener('click', () => {
      document.body.style.fontSize = 'larger';
    });
  }

  // Счётчик посещений
  const visitCount = document.getElementById('visitCount');
  let count = localStorage.getItem('visits') || 0;
  count++;
  localStorage.setItem('visits', count);
  if (visitCount) visitCount.textContent = count;

  // Время
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = "Текущее время: " + now.toLocaleString();
  }
});

function showDetails(text) {
  document.getElementById('modal-text').textContent = text;
  document.getElementById('details-modal').style.display = 'block';
}

window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('details-modal')) {
    document.getElementById('details-modal').style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // const counter = localStorage.getItem('visits') || 0;
  // localStorage.setItem('visits', +counter + 1);
  // document.getElementById('counter').textContent = +counter + 1;

  startClock();

});

// function updateClock() {
//   const now = new Date();
//   const time = now.toLocaleTimeString();
//   document.getElementById('time').textContent = "Время: ${time}";
// }

function closeModal() {
  document.getElementById('success-modal').style.display = 'none';
}
function toggleAccessibility() {
  document.body.classList.toggle('high-contrast');
}

// Счётчик посещений
let count = localStorage.getItem("visitCount") || 0;
count++;
localStorage.setItem("visitCount", count);
document.getElementById("visit-count").textContent = "Количество посещений: " + count;

// Текущее время
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = "Текущее время: " + timeStr;
}
setInterval(updateTime, 1000);
updateTime();

// Отправка формы
function submitContactForm() {
  document.getElementById("successModal").style.display = "flex";
  return false;
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}

