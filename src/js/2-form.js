const feedbackForm = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedbackFormState';

/*зберігаємо дані*/
function storeFormData() {
  const feedbackData = new FormData(feedbackForm);
  const feedbackDataObj = {};
  feedbackData.forEach((value, key) => {feedbackDataObj[key] = value;});
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(feedbackDataObj));
}

/*відновлюємо данні*/
function restoreFormData() {const retrievedData = localStorage.getItem(FEEDBACK_FORM_STATE);
  if (retrievedData) {const feedbackDataObj = JSON.parse(retrievedData);
    Object.entries(feedbackDataObj).forEach(([key, value]) => {feedbackForm.elements[key].value = value;});
  }
}

restoreFormData();

/*слідкуємо за змінами*/
feedbackForm.addEventListener('input', () => {storeFormData();
});

/*слухач надсилання форми*/
feedbackForm.addEventListener('submit', event => {event.preventDefault();
  const feedbackData = new FormData(feedbackForm);
  const feedbackDataObj = {};
  feedbackData.forEach((value, key) => {feedbackDataObj[key] = value.trim();
  });
  
/*перевіряємо чи все заповнено*/
  if (feedbackDataObj.email && feedbackDataObj.message) {
    console.log(feedbackDataObj);
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    feedbackForm.reset();
  } else {
    alert('Будь ласка, заповніть усі поля.');
  }
});
