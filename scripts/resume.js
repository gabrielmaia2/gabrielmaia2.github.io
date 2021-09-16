var birthDate = new Date('1999-10-29');

var birthEl = document.getElementById("birth-date");

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

// fixing pt-br locale (UTC-3)
birthDate.setUTCHours(birthDate.getUTCHours() + 3);

birthString = `Nascido em ${birthDate.toLocaleDateString('pt-BR')} (${getAge(birthDate)} anos)`;
birthEl.textContent = birthString;
