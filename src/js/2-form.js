








/*const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Функція для зберігання форми у локальному сховищі
function saveFormState() {
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formDataObject));
}

// Функція для відновлення стану форми
function populateFormState() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const formDataObject = JSON.parse(savedData);
    Object.entries(formDataObject).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}

// Відновлюємо стан форми при завантаженні сторінки
populateFormState();

// Відстежуємо введення даних у форму
form.addEventListener('input', () => {
  saveFormState();
});

// Обробка події сабміту форми
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value.trim(); // Обрізаємо пробіли по краях
  });
  
  // Перевірка, щоб обидва поля були заповнені
  if (formDataObject.email && formDataObject.message) {
    console.log(formDataObject);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
*/