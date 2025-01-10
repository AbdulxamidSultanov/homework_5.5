import {
  validateFirstName,
  validateSecondName,
  checkYearsOld,
  checkNumber,
  checkEmail,
  validatePassword,
  checkPassword,
  validateAddress,
  validatePostcode,
  validateGender,
  validateHobby,
  validateCheckbox,
} from "./validations.js";

// ============
// 1-masala:
/*Ism (First Name):*/

const form = document.getElementById("form");

form &&
  form.addEventListener("input", function (event) {
    const btn = document.getElementById("sendForm");
    const firstName = document.querySelector("#firstName");
    const firstNameDesc = document.querySelector("#firstNameDesc");

    firstName &&
      firstName.addEventListener("input", function () {
        let check = validateFirstName(firstName);
        if (check === true) {
          firstNameDesc.textContent = "Ismingizni kriting:";
          firstNameDesc.style.color = "black";
        } else {
          firstNameDesc.textContent = `*${validateFirstName(firstName)}`;
          firstNameDesc.style.color = "red";
        }
      });

    // ============
    // 2-masala:
    //Familiya (Last Name):

    const secondName = document.querySelector("#secondName");
    const secondNameDesc = document.querySelector("#secondNameDesc");

    secondName &&
      secondName.addEventListener("input", function () {
        let check = validateSecondName(secondName);
        if (check === true) {
          secondNameDesc.textContent = `Familyangizni kriting:`;
          secondNameDesc.style.color = "black";
        } else {
          secondNameDesc.textContent = `*${validateSecondName(secondName)}`;
          secondNameDesc.style.color = "red";
        }
      });

    // ============
    // 3-masala:
    /*Tug‘ilgan sana (Date of Birth)*/

    const birthDate = document.getElementById("birthDate");
    const birthDateDesc = document.getElementById("birthDateDesc");

    birthDate &&
      birthDate.addEventListener("input", function () {
        let check = checkYearsOld(birthDate);
        if (check === true) {
          birthDateDesc.style.color = "black";
          birthDateDesc.textContent = "Tug`ulgan sanangizni kriting:";
        } else {
          birthDateDesc.style.color = "red";
          birthDateDesc.textContent = checkYearsOld(birthDate)
        }
      });

    // ============
    // 4-masala:
    /*Telefon raqam (Phone Number):*/

    const numberDesc = document.getElementById("numberDesc");
    const number = document.getElementById("number");

    number &&
      number.addEventListener("input", function () {
        let check = checkNumber(number);
        if (check === true) {
          numberDesc.textContent = "telefon raqamingizni kriting:";
          numberDesc.style.color = "black";
        } else {
          numberDesc.textContent = checkNumber(number);
          numberDesc.style.color = "red";
        }
      });

    // ============
    // 5-masala:
    /*Email manzil (Email Address):*/

    const mail = document.getElementById("email");
    const mailDesc = document.getElementById("emailDesc");

    mail &&
      mail.addEventListener("input", function () {
        let validate = checkEmail(mail);
        if (validate === true) {
          mailDesc.textContent = "Email pochtangizni krirting:";
          mailDesc.style.color = "black";
        } else {
          mailDesc.textContent = checkEmail(mail);
          mailDesc.style.color = "red";
        }
      });

    // ============
    // 6-masala:
    /*Parol (password) */

    const password = document.getElementById("password");
    const passwordDesc = document.getElementById("passwordDesc");

    password &&
      password.addEventListener("input", function () {
        let check = validatePassword(password);
        if (check === true) {
          passwordDesc.textContent = "Parol kriting:";
          passwordDesc.style.color = "black";
        } else {
          passwordDesc.textContent = validatePassword(password);
          passwordDesc.style.color = "red";
        }
      });

    // ============
    // 7-masala:
    /*secondParol (checkPassword) */

    const toCheck = document.getElementById("checkPass");
    const toCheckDesc = document.getElementById("checkPassDesc");

    toCheck &&
      toCheck.addEventListener("input", function () {
        let toChecked = checkPassword(toCheck, password);
        if (toChecked === true) {
          toCheckDesc.textContent = "Kritilgan parolni tasdiqlang:";
          toCheckDesc.style.color = "black";
        } else {
          toCheckDesc.textContent = checkPassword(toCheck, password);
          toCheckDesc.style.color = "red";
        }
      });

    // ========
    // ====
    // 8-masala:
    /*Manzil (Address) */

    const addressDesc = document.getElementById("addressDesc");
    const address = document.getElementById("address");

    address &&
      address.addEventListener("input", function () {
        let check = validateAddress(address);
        if (check === true) {
          addressDesc.textContent = "MManzlingizni kriting:";
          addressDesc.style.color = "black";
        } else {
          addressDesc.textContent =
            "Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak.";
          addressDesc.style.color = "red";
        }
      });

    // ============
    // 9-masala:
    /* Pochta indeksi (Postal Code)*/

    const postcode = document.getElementById("postcode");
    const postcodeDesc = document.getElementById("postcodeDesc");

    postcode &&
      postcode.addEventListener("input", function () {
        let check = validatePostcode(postcode);
        if (check === true) {
          postcodeDesc.textContent = "Pocta index kriting:";
          postcodeDesc.style.color = "black";
        } else {
          postcodeDesc.textContent =
            "Pochta indeksini faqat raqamlardan iborat qilib kiriting.";
          postcodeDesc.style.color = "red";
        }
      });

    // ============
    // 10-masala:
    /*Jinsi (Gender) */

    const genderDesc = document.getElementById("genderDesc");
    const gender = document.getElementById("gender");

    gender &&
      gender.addEventListener("input", function () {
        let check = validateGender(gender);
        if (check === true) {
          genderDesc.textContent = "Jinsingizni tanlang:";
          genderDesc.style.color = "black";
        } else {
          genderDesc.textContent = validateGender(gender);
          genderDesc.style.color = "red";
        }
      });

    // ============
    // 11-masala:
    /*Qiziqishlar (Interests): */

    const hobby = document.getElementById("hobby");
    const hobbyDesc = document.getElementById("hobbyDesc");

    hobby &&
      hobby.addEventListener("input", function () {
        let check = validateHobby(hobby);
        if (check === true) {
          hobbyDesc.style.color = "black";
          hobbyDesc.textContent = "Nmalarga qiziqishingizni kriting:";
        } else {
          hobbyDesc.style.color = "red";
          hobbyDesc.textContent = validateHobby(hobby);
        }
      });

    // ============
    // 12-masala:
    /*Qabul qilish (Terms & Conditions): */

    const agreement = document.getElementById("agreement");
    const agreementDesc = document.getElementById("agreementDesc");

    agreement &&
      agreement.addEventListener("input", function () {
        let check = validateCheckbox(agreement);
        if (check === true) {
          agreementDesc.style.color = "black";
          agreementDesc.textContent = "Bizning shrtlar blan tanishib chiqing:";
        } else {
          agreementDesc.style.color = "red";
          agreementDesc.textContent = check;
        }
      });

    const validations = [
      validateFirstName(firstName) === true,
      validateSecondName(secondName) === true,
      checkYearsOld(birthDate) === true,
      checkNumber(number) === true,
      checkEmail(mail) === true,
      validatePassword(password) === true,
      checkPassword(toCheck, password) === true,
      validateAddress(address) === true,
      validatePostcode(postcode) === true,
      validateGender(gender) === true,
      validateHobby(hobby) === true,
      validateCheckbox(agreement) === true,
    ];
    if (validations.every((isValid) => isValid)) {
      btn.disabled = false; // Активировать кнопку
    } else {
      event.preventDefault();
      btn.disabled = true; // Деактивировать кнопку
    }
  });

// ============
// 13-masala:
//

// ============
// 14-masala:
//

// ============
// 15-masala:
//

// ============
// 16-masala:
//

// ============
// 17-masala:
//

// ============
// 18-masala:
//

// ============
// 19-masala:
//

// ============
// 20-masala:
//

// ============
// 21-masala:
//

// ============
// 22-masala:
//

// ============
// 23-masala:
//

// ============
// 24-masala:
//

// ============
// 25-masala:
//

// ============
// 26-masala:
//

// ============
// 27-masala:
//

// ============
// 28-masala:
//

// ============
// 29-masala:
//

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
//
