const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', evt => {
  const name = evt.target.name;
  const value = evt.target.value;
  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
