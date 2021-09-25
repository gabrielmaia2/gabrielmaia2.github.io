// Scrolls down to projects-scroll when clicked
docReady(function () {
  var scrollBtn = document.querySelector('.header button.icon')

  scrollBtn.addEventListener('click', function () {
    document.getElementById('projects-scroll').scrollIntoView({ behavior: 'smooth' });
  });
});
