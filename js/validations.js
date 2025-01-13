/* firstName
Validatsiya:
Maydon bo‘sh bo‘lmasligi kerak.
Kamida 2 ta belgi bo‘lishi kerak.
Faqat lotin harflaridan iborat bo‘lishi kerak.
Xatolik xabari: "Ismni to‘g‘ri kiriting. Kamida 2 ta harf bo‘lishi kerak va faqat lotin harflaridan foydalaning." 
*/

export function validateFirstName(firstName) {
  if (
    firstName.value.trim() === "" ||
    firstName.value.length < 2 ||
    !/^[A-Za-z]+$/.test(firstName.value)
  ) {
    return "Ismni to`g`ri kiriting. Kamida 2 ta harf bo`lishi kerak va faqat lotin harflaridan foydalaning.";
  }
  return true;
}

/*secondName
Input turi: Matn (text)
Validatsiya:
Maydon bo‘sh bo‘lmasligi kerak.
Kamida 2 ta belgi bo‘lishi kerak.
Faqat lotin harflaridan iborat bo‘lishi kerak.
Xatolik xabari: "Familiyani to‘g‘ri kiriting."
*/

export function validateSecondName(secondName) {
  if (
    secondName.value.trim() === "" ||
    secondName.value.length < 2 ||
    !/^[A-Za-z]+$/.test(secondName.value)
  ) {
    return "Familiyani to`g`ri kiriting.";
  }
  return true;
}

/*birthDate
Validatsiya:
Sana kiritilishi shart.
Foydalanuvchining yoshi 18 dan kichik bo‘lmasligi kerak.
Xatolik xabari: "Yoshingiz 18 dan katta bo‘lishi kerak." */

export function checkYearsOld(birthDate) {
  let year = birthDate.value.slice(0, 4);
  let nowYear = new Date();
  if (nowYear.getFullYear() - year < 18) {
    return "Yoshingiz 18 dan katta bo`lishi kerak.";
  }
  return true;
}

/*telephoneNumber
Validatsiya:
Telefon raqami bo‘sh bo‘lmasligi kerak.
Raqam + belgisi bilan boshlanib, 9-15 ta raqamdan iborat bo‘lishi kerak.
Xatolik xabari: "Telefon raqamini to‘g‘ri kiriting, masalan: +998901234567. */

export function checkNumber(number) {
  if (
    number.value.trim() === "" ||
    number.value.slice(0, 1) !== "+" ||
    number.value.length < 9 ||
    number.value.length > 15
  ) {
    return "Telefon raqamini togri kiriting, masalan: +998901234567.";
  }
  return true;
}

/*Email
 Validatsiya:
Bo‘sh bo‘lmasligi kerak.
Email formatiga mos bo‘lishi kerak (masalan, example@gmail.com).
Xatolik xabari: "Emailni to‘g‘ri kiriting." */

export function checkEmail(email) {
  let mail = email.value.trim();
  let valid = mail.includes(".");
  let validate = mail.includes("@");
  if (valid === false || validate === false || mail === "") {
    return "Emailni to`g`ri kiriting.";
  }
  return true;
}

/*firstPassword
Validatsiya:
Kamida 8 ta belgi bo‘lishi kerak.
Kamida 1 ta katta harf, 1 ta kichik harf va 1 ta raqam bo‘lishi kerak.
Xatolik xabari: "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak." */

export function validatePassword(pass) {
  let password = pass.value.trim();
  if (
    password.length < 8 ||
    !/[a-zA-z]/.test(password) ||
    !/\d/.test(password) ||
    password.value === ""
  ) {
    return "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak.";
  }

  return true;
}

/*secondPassword
Validatsiya:
Parol bilan bir xil bo‘lishi kerak.
Xatolik xabari: "Parol va tasdiqlash bir xil bo‘lishi kerak." */

export function checkPassword(toCheck, pass) {
  let toCheckTrim = toCheck.value.trim();
  if (toCheckTrim !== pass.value) {
    return "Parol va tasdiqlash bir xil bo`lishi kerak.";
  }
  return true;
}

/*Address
Validatsiya:
Bo‘sh bo‘lmasligi kerak.
Kamida 10 ta belgi bo‘lishi kerak.
Xatolik xabari: "Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak." */

export function validateAddress(address) {
  if (address.value === "" || address.value.length < 10) {
    return "Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak.";
  }
  return true;
}

/*postCode
Validatsiya:
Faqat 5 yoki 6 ta raqamdan iborat bo‘lishi kerak.
Xatolik xabari: "Pochta indeksini faqat raqamlardan iborat qilib kiriting." */

export function validatePostcode(postcode) {
  let trim = postcode.value.trim();
  if (
    trim === "" ||
    trim.length < 5 ||
    trim.length > 6 ||
    /^\d+$/.test(postcode)
  ) {
    return "Pochta indeksini faqat raqamlardan iborat qilib kiriting.";
  }
  return true;
}

/*Jins
Validatsiya:
Variant tanlanishi shart (Masalan: "Erkak", "Ayol").
Xatolik xabari: "Jinsingizni tanlang." */

export function validateGender(select) {
  if (!select.value || select.value === "") {
    return "Jinsingizni tanlang.";
  }
  return true;
}

/*Qiziqishlar (Interests):
Validatsiya:
Maydon bo‘sh bo‘lmasligi kerak.
Kamida 5 ta belgi bo‘lishi kerak.
Xatolik xabari: "Qiziqishlaringizni kamida 5 ta belgi bilan yozing. */

export function validateHobby(hobby) {
  let trim = hobby.value.trim();
  if (trim === "" || trim.length < 5) {
    return "Qiziqishlaringizni kamida 5 ta belgi bilan yozing.";
  }
  return true;
}

/*Qabul qilish (Terms & Conditions):
Validatsiya:
Belgilangan bo‘lishi shart.
Xatolik xabari: "Qoidalarga rozilik bildiring." */

export function validateCheckbox(checkbox) {
  if (!checkbox.checked) {
    return "Qoidalarga rozilik bildiring.";
  }
  return true;
}
