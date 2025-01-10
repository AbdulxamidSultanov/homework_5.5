// ========== Ism (First Name) ==========
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

// ========== Familiya (Second Name) ==========
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

// ========== Tug‘ilgan sana (Date of Birth) ==========
export function checkYearsOld(birthDate) {
  let year = birthDate.value.slice(0, 4);
  let nowYear = new Date();
  if (nowYear.getFullYear() - year < 18) {
    return "Yoshingiz 18 dan katta bo`lishi kerak.";
  }
  return true;
}

// ========== Telefon raqam (Phone Number) ==========
export function checkNumber(number) {
  if (
    number.value.trim() === "" ||
    number.value.slice(0, 1) !== "+" ||
    number.value.length < 9 ||
    number.value.length > 15
  ) {
    return "Telefon raqamini to`g`ri kiriting, masalan: +998901234567.";
  }
  return true;
}

// ========== Email ==========
export function checkEmail(email) {
  let mail = email.value.trim();
  if (!mail.includes("@") || !mail.includes(".") || mail === "") {
    return "Emailni to`g`ri kiriting.";
  }
  return true;
}

// ========== Parol (Password) ==========
export function validatePassword(pass) {
  let password = pass.value.trim();
  if (
    password.length < 8 ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    return "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak.";
  }
  return true;
}

// ========== Tasdiqlash parol (Check Password) ==========
export function checkPassword(toCheck, pass) {
  let toCheckTrim = toCheck.value.trim();
  if (toCheckTrim !== pass.value) {
    return "Parol va tasdiqlash bir xil bo`lishi kerak.";
  }
  return true;
}

// ========== Manzil (Address) ==========
export function validateAddress(address) {
  if (address.value === "" || address.value.length < 10) {
    return "Manzilni to`g`ri kiriting. Kamida 10 ta belgi bo`lishi kerak.";
  }
  return true;
}

// ========== Pochta indeks (Postcode) ==========
export function validatePostcode(postcode) {
  let trim = postcode.value.trim();
  if (
    trim === "" ||
    trim.length < 5 ||
    trim.length > 6 ||
    !/^\d+$/.test(postcode.value)
  ) {
    return "Pochta indeksini faqat raqamlardan iborat qilib kiriting.";
  }
  return true;
}

// ========== Jins (Gender) ==========
export function validateGender(select) {
  if (!select.value || select.value === "") {
    return "Jinsingizni tanlang.";
  }
  return true;
}

// ========== Qiziqishlar (Interests) ==========
export function validateHobby(hobby) {
  let trim = hobby.value.trim();
  if (trim === "" || trim.length < 5) {
    return "Qiziqishlaringizni kamida 5 ta belgi bilan yozing.";
  }
  return true;
}

// ========== Qabul qilish (Terms & Conditions) ==========
export function validateCheckbox(checkbox) {
  if (!checkbox.checked) {
    return "Qoidalarga rozilik bildiring.";
  }
  return true;
}
