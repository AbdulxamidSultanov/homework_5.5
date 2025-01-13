// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 1-vazifa >>>>>>>>>>>>>>>>>>>>>>>>>>

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
          birthDateDesc.textContent = checkYearsOld(birthDate);
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
      btn.disabled = false; 
    } else {
      event.preventDefault();
      btn.disabled = true; 
    }
  });

// <<<<<<<<<<<<<<<<<<<<<< 2-vazifa >>>>>>>>>>>>>>>>>>>>>>>>

// ============
// 13-masala:
/*Foydalanuvchi Ismini Ko‘rsatish
Vazifa: Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.
Ishlatiladigan mavzular: createElement, append, value. */

const input = document.getElementById("name");
const btnToSend = document.getElementById("button");
const div = document.getElementById("showName");
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.textContent =
  "*Ismni to`g`ri kiriting. Kamida 2 ta harf bo`lishi kerak va faqat lotin harflaridan foydalaning.";
btnToSend &&
  btnToSend.addEventListener("click", () => {
    let check = validateFirstName(input);
    if (check === true) {
      div.textContent = input.value;
    } else {
      input.before(errorMessage);
    }
  });
// ============
// 14-masala:
/*Shaxsiy Profilni O‘zgartirish
Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.
Ishlatiladigan mavzular: replaceChild, value. */

const editBtn = document.getElementById("edit");
const hiddenInput = document.getElementById("hidden");
const editedName = document.getElementById("editedName");
editBtn.dataset.action = "edit";
editBtn &&
  editBtn.addEventListener("click", function () {
    let check = validateFirstName(hiddenInput);

    if (editBtn.dataset.action === "edit") {
      hiddenInput.value = editedName.textContent;
      editedName.style.display = "none";
      hiddenInput.style.display = "block";
      editBtn.dataset.action = "save";
      errorMessage.style.display = "none";
      hiddenInput.focus();
    } else if (check === true) {
      editedName.textContent = hiddenInput.value;
      editedName.style.display = "block";
      hiddenInput.style.display = "none";
      editBtn.dataset.action = "edit";
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
      hiddenInput.before(errorMessage);
    }
  });
// ============
// 15-masala:
/* Parolni Tasdiqlash
Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.
Ishlatiladigan mavzular: value, alert. */



// ============
// 16-masala:
/*Rang Tanlash
Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.
Ishlatiladigan mavzular: style.backgroundColor, createElement. */

// ============
// 17-masala:
/*Shaharlar Ro‘yxati
Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.
Ishlatiladigan mavzular: createElement, append. */

// ============
// 18-masala:
/*Xabar Yozish
Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.
Ishlatiladigan mavzular: value, textContent. */

// ============
// 19-masala:
/*Yosh Tekshirish
Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin.
Ishlatiladigan mavzular: value, if. */

// ============
// 20-masala:
/*Input Orqali Rang O‘zgartirish
Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.
Ishlatiladigan mavzular: style.backgroundColor, value.
 */

// ============
// 21-masala:
/*Foydalanuvchi Qo‘shish
Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.
Ishlatiladigan mavzular: value, createElement, append.*/

// ============
// 22-masala:
/*Harflarni Hisoblash
Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.
Ishlatiladigan mavzular: value, textContent. */

// ============
// 23-masala:
/* Davlatlarni Saralash
Vazifa: Sahifada davlatlar ro‘yxati (ul) bo‘lsin. Formada "Saralash" tugmasi bo‘lsin. Tugma bosilganda, davlatlar ro‘yxati alifbo bo‘yicha qayta tartiblanadi.
Ishlatiladigan mavzular: childNodes, sort, appendChild. */

// ============
// 24-masala:
/*Tugmani Faollashtirish
Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.
Ishlatiladigan mavzular: disabled, input hodisasi. */

// ============
// 25-masala:
/*Forma Tozalash
Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.
Ishlatiladigan mavzular: value. */

// ============
// 26-masala:
/*Foydalanuvchi Ro‘yxatini Filtrlash
Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.
Ishlatiladigan mavzular: textContent, style.display. */

// ============
// 27-masala:
/*Matnni Tahrirlash
Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.
Ishlatiladigan mavzular: replaceChild, value. */

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
