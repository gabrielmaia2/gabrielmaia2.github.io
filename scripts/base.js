/**
 * Runs function only when document is loaded.
 * @param {function} fn Function to run.
 */
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

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

// All other docReady calls must be after this one
// because it replaces the whole DOM content and
// any operations done on the older elements will have no effect on the new ones
docReady(replaceProperties);

docReady(function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Checks for each item in items view and sets/removes view class
      // to change css when the items are in viewport or hidden

      const item = entry.target.querySelectorAll('.content, .preview-wrapper');

      if (entry.isIntersecting) {
        item.forEach(e => e.classList.add('view'));
        return;
      }

      item.forEach(e => e.classList.remove('view'));
    });
  });

  // Creates observers for each item in items view
  document.querySelectorAll('.content-wrapper .item').forEach(e => observer.observe(e));
});

document.info = {};
