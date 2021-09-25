// Runs fn only if document is loaded
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

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

docReady(function () {
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

  document.querySelectorAll('.content-wrapper .item').forEach(e => observer.observe(e));
});

/**
 * Replaces all properties in the document that mactch the format ${property}
 * with the specified value using appendInfo({ property: value }).
 * 
 * if value is a function, it uses the return value.
 */
function replaceProperties() {
  var regex = /\$\{(.*?)\}/g;

  var replaceFunc = (_, m) => {
    var result = document.info;
    m.split('.').forEach(e => {
      if (typeof (result[e]) === 'function') {
        result = result[e]();
      } else {
        result = result[e];
      }
    });
    return result;
  }

  document.head.innerHTML = document.head.innerHTML.replace(regex, replaceFunc);
  document.body.innerHTML = document.body.innerHTML.replace(regex, replaceFunc);
}

/**
 * Appends properties to be dynamically set in DOM.
 * @param {object} properties New properties to append
 */
function appendProperties(properties) {
  for (var i in properties) {
    document.info[i] = properties[i]
  }
}

docReady(replaceProperties);

document.info = {};
