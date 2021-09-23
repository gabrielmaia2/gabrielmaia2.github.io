const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const item = entry.target.querySelectorAll('.content, .preview');

    if (entry.isIntersecting) {
      item.forEach(e => e.classList.add('view'));
	    return;
    }

    item.forEach(e => e.classList.remove('view'));
  });
});

document.querySelectorAll('.content-wrapper .item').forEach(e => observer.observe(e))

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
