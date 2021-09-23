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
