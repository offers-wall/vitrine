function formValidation() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const date = document.getElementById("date");
    const gender = document.getElementById("gender");

    // Создание элемента для сообщения благодарности
    const thankYouMessage = document.createElement("div");
    thankYouMessage.classList.add("thank-you-message");
    thankYouMessage.textContent = "Obrigado pela sua assinatura!";


    form.addEventListener("submit", (event) => {
      // Останавливаем отправку формы
      event.preventDefault();

      // Выполняем валидацию
      let isValid = true;

      // Проверка имени
      if (fullname.value.trim() === "") {
        setInvalid(fullname, "Full name is required!");
        isValid = false;
      } else {
        setSuccess(fullname);
      }

      // Проверка email
      if (email.value.trim() === "") {
        setInvalid(email, "Email is required!");
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        setInvalid(email, "Email is not valid!");
        isValid = false;
      } else {
        setSuccess(email);
      }

      // Проверка даты рождения
      if (date.value === "") {
        setInvalid(date, "Birth date is required!");
        isValid = false;
      } else {
        setSuccess(date);
      }

      // Проверка пола
      if (gender.value === "") {
        setInvalid(gender, "Please select your gender!");
        isValid = false;
      } else {
        setSuccess(gender);
      }

      // Если форма валидна, можно выполнить отправку
      if (isValid) {
        console.log("Form is valid! Submitting...");
        const section = document.querySelector(".form-section__bottom");

        // Очистка формы
        form.reset();

        section.appendChild(thankYouMessage); 
      }
    });

    // Установить сообщение об ошибке
    function setInvalid(input, message) {
      const formGroup = input.parentElement;
      formGroup.classList.add("invalid");
      formGroup.classList.remove("success");
      let error = formGroup.querySelector(".error-message");
      if (!error) {
        error = document.createElement("span");
        error.className = "error-message";
        formGroup.appendChild(error);
      }
      error.textContent = message;
    }

    // Установить успех
    function setSuccess(input) {
      const formGroup = input.parentElement;
      formGroup.classList.add("success");
      formGroup.classList.remove("invalid");
      const error = formGroup.querySelector(".error-message");
      if (error) {
        error.remove();
      }
    }

    // Проверка корректности email
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
}

export { formValidation };
