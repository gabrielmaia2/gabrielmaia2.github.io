docReady(function () {
  var birthDate = new Date('1999-10-29');

  var birthEl = document.getElementById("birth-date");

  // fixing pt-br locale (UTC-3)
  birthDate.setUTCHours(birthDate.getUTCHours() + 3);

  birthString = `Nascido em ${birthDate.toLocaleDateString('pt-BR')} (${getAge(birthDate)} anos)`;
  birthEl.textContent = birthString;
});
