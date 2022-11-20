/**
 * Returns age from birth date.
 * @param {string} dateString Birth date to get string from.
 * @returns Age in years.
 */
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

var birthDate = new Date("1999-10-29");
birthDate.setUTCHours(3);

var phoneNumberHtmlBr = "";
var phoneNumberHtmlEn = "";

if (phoneNumber !== "") {
  var phoneNumberEn = "+55 " + phoneNumber;
  phoneNumberHtmlBr = `<br> <a id="phone" href="tel:${phoneNumber}">${phoneNumber}</a>`;
  phoneNumberHtmlEn = `<br> <a id="phone" href="tel:${phoneNumberEn}">${phoneNumberEn}</a>`;
}

appendProperties({
  age: getAge(birthDate),
  birthDateBr: birthDate.toLocaleDateString("pt-BR"),
  birthDateEn: birthDate.toLocaleDateString("en-US"),
  emailAddress: emailAddress,
  phoneNumberHtmlBr: phoneNumberHtmlBr,
  phoneNumberHtmlEn: phoneNumberHtmlEn,
});
